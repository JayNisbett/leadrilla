import React, { useState, useEffect } from 'react';
import 'react-step-progress/dist/index.css';
import Autocomplete from 'react-google-autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { isEmpty } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Onboarding() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [place, setPlace] = useState() //Step 1 rusult
  const [spend, setSpend] = useState() //Step 2 result
  const [products, setProducts] = useState(null)
  const [subProduct, setSubProduct] = useState(null)
  const [kind, setKind] = useState(null)
  const [nextAble, setNextAble] = useState(false)
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNextAble(false)
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function getSteps() {
    return ['step 1', 'step 2', 'step 3', 'step 4'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <ZipCodeComponent />;
      case 1:
        return <SpendComponent />;
      case 2:
        return <IndustriesComponent />;
      case 3:
        return <KindComponent />
    }
  }

  const ZipCodeComponent = () => {
    useEffect(() => {
      if (!isEmpty(place)) {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [place])
    return (
      <div className="onboarding-step">
        <h3 bp="margin-bottom--none">Where do you need leads?</h3>
        <p>You can enter a zip code, county or city.</p>
        <div>
          <Autocomplete
            style={{ width: '100%' }}
            onPlaceSelected={(place) => {
              setPlace(place)
            }}
            // types={['(regions)']}
            defaultValue={place?.formatted_address}
            required
            componentRestrictions={{ country: "us" }}
          />
        </div>
      </div>
    )
  }

  const SpendComponent = () => {
    useEffect(() => {
      if (!isEmpty(spend)) {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [spend])
    return (
      <div style={{ marginTop: 30 }} className="custom-radios">
        <h4>How much do you spend on leads per week?</h4>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="top" value={spend} onChange={(e) => setSpend(e.target.value)}>
            {spens.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                labelPlacement="end"
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    )
  }

  const IndustriesComponent = () => {
    const [industry, setIndustry] = useState([])
    useEffect(() => {
      if (!isEmpty(subProduct)) {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [subProduct])
    const handleSub = (sub) => {
      setProducts(sub)
    }
    return (
      <div style={{ marginTop: 30 }} className="custom-radios">
        <h4>Select your industry</h4>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="top" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {industries.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                onClick={() => handleSub(item?.product ?? null)}
                labelPlacement="end"
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {products &&
          <div>
            <div className="" >
              <h5>Select the products you wnat leads for.</h5>
            </div>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top" value={subProduct} onChange={(e) => setSubProduct(e.target.value)}>
                {products.map((item, key) => (
                  <FormControlLabel
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.label}
                    labelPlacement="end"
                    key={key}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        }
      </div>
    )
  }

  const KindItemComponent = ({ data }) => {
    return (
      <div>
        <h5 className="kind-title">{data.title}</h5>
        {console.log(data.description)}
        {data.description &&
          <div className="kind-desription">
            <div className="kind-dec-item">
              <h5>per lead cost</h5>
              <p>{data.description[0].cost}</p>
            </div>
            <div className="kind-dec-item">
              <h5>contact rate</h5>
              <p>{data.description[0].rate}</p>
            </div>
            <div className="kind-dec-item">
              <h5>estimated roi</h5>
              <p>{data.description[0].roi}</p>
            </div>
          </div>
        }
      </div>
    )
  }
  const KindComponent = () => {
    useEffect(() => {
      if (!isEmpty(kind)) {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [kind])
    const handleSub = (sub) => {
      setProducts(sub)
    }
    return (
      <div style={{ marginTop: 30 }} className="custom-radios step-4">
        <h4>Select your industry</h4>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="top" value={kind} onChange={(e) => setKind(e.target.value)}>
            {kinds.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={<KindItemComponent data={item} />}
                onClick={() => handleSub(item?.product ?? null)}
                labelPlacement="end"
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    )
  }


  return (
    <div className="Stepper">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="step-body">
          <div>
            {getStepContent(activeStep)}
            <div style={{ display: 'flex', justifyContent: `${activeStep !== 0 ? 'space-between' : 'flex-end'}`, marginTop: 20, alignItems: 'center', paddingRight: 6, paddingLeft: 6 }}>
              {activeStep !== 0 &&
                <button className="btn btn-white" onClick={handleBack}>
                  Prev
                    </button>
              }
              <button className="btn btn-white" onClick={handleNext} disabled={!nextAble}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const spens = [
  {
    value: 'new_leads',
    label: "I'm new to buying leads"
  },
  {
    value: 'less_250',
    label: "less than $250"
  },
  {
    value: 'in_250_500',
    label: "$250 - $500"
  },
  {
    value: 'in_500_1000',
    label: "$500 - $1000"
  },
  {
    value: 'more_1000',
    label: "more than $1000"
  }
]

const industries = [
  {
    value: 'life',
    label: "Life Insurance",
    product: [
      {
        value: 'final_expense',
        label: 'Final Expense'
      },
      {
        value: 'morgage_protection',
        label: 'Mortgaga Protection'
      },
      {
        value: 'agent_hiring',
        label: 'Agent Hiring'
      }
    ]
  },
  {
    value: 'solar',
    label: "Solar"
  },
  {
    value: 'medicare',
    label: "Medicare",
    product: [
      {
        value: 'supplement',
        label: 'Medicare Supplement'
      },
      {
        value: 'turning_65',
        label: 'Medicare Turning 65'
      }
    ]
  }
]

const kinds = [
  {
    value: 'real_time',
    title: 'Real time, exclusive leads',
    description: [
      {
        cost: '$35 - $55',
        rate: '40% - 60%',
        roi: '1.5x - 4.0x'
      }
    ]
  },
  {
    value: 'aged_2nd',
    title: 'Aged or 2nd chance leads',
    description: [
      {
        cost: 'as low as $0.70',
        rate: '5% - 15%',
        roi: '1.0x - 3.0x'
      }
    ]
  },
  {
    value: 'mix',
    title: 'A mix of both real-time and aged leads',
  }
]