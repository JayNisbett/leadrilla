import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useSelector } from "react-redux";
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
  const userInfo = useSelector(store => (store?.auth ?? {}))?.user ?? ''

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [location, setLocation] = useState() //Step 1 rusult
  const [spend, setSpend] = useState() //Step 2 result
  const [industry, setIndustry] = useState([])
  const [subProduct, setSubProduct] = useState(null)
  const [kind, setKind] = useState(null)

  const [products, setProducts] = useState(null)
  const [nextAble, setNextAble] = useState(false)
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNextAble(false)
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {

    const leadData = {
      'location': location,
      'spend': spend,
      'industry': industry,
      'subProduct': subProduct,
      'kind': kind,
      'userId': userInfo.id
    }
    console.log(leadData)
    axios.post("http://216.137.179.178:5000/api/leads/onboarding", {
      leadData
    }).then(res => {
      console.log(res, "error")
    })
  }
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
      default:
        return <KindComponent />

    }
  }

  const ZipCodeComponent = () => {
    useEffect(() => {
      if (!isEmpty(location)) {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [])
    return (
      <div className="onboarding-step">
        <h3 bp="margin-bottom--none">Where do you need leads?</h3>
        <p>You can enter a zip code, county or city.</p>
        <div>
          <Autocomplete
            style={{ width: '100%' }}
            onPlaceSelected={(location) => {
              setLocation(location)
            }}
            // types={['(regions)']}
            defaultValue={location?.formatted_address}
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
    }, [])
    return (
      <div style={{ marginTop: 30 }} className="custom-radios">
        <h4>How much do you spend on leads per week?</h4>
        <FormControl component="fieldset">
          <RadioGroup row value={spend} onChange={(e) => setSpend(e.target.value)}>
            {spens.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                labellocationment="end"
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    )
  }

  const IndustriesComponent = () => {
    useEffect(() => {
      if (!isEmpty(subProduct) || industry === '1') {
        setNextAble(true)
      } else {
        setNextAble(false)
      }
    }, [])
    const handleSub = (sub) => {
      setProducts(sub)
    }
    return (
      <div style={{ marginTop: 30 }} className="custom-radios">
        <h4>Select your industry</h4>
        <FormControl component="fieldset">
          <RadioGroup row value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {industries.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                onClick={() => handleSub(item?.product ?? null)}
                labellocationment="end"
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
              <RadioGroup row value={subProduct} onChange={(e) => setSubProduct(e.target.value)}>
                {products.map((item, key) => (
                  <FormControlLabel
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.label}
                    labellocationment="end"
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
    }, [])
    const handleSub = (sub) => {
      setProducts(sub)
    }
    return (
      <div style={{ marginTop: 30 }} className="custom-radios step-4">
        <h4>What kind of leads do you want?</h4>
        <FormControl component="fieldset">
          <RadioGroup row value={kind} onChange={(e) => setKind(e.target.value)}>
            {kinds.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={<KindItemComponent data={item} />}
                onClick={() => handleSub(item?.product ?? null)}
                labellocationment="end"
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    )
  }


  return (
    <div bp="container">
      <div classes="onboarding-head">
        <h1>Welcome to Liveleads, {userInfo.firstName}. </h1>
      </div>
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
                {activeStep !== steps.length - 1 ? (

                  <button className="btn btn-white" onClick={handleNext} disabled={!nextAble}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </button>
                ) : (
                    <button className="btn btn-white" onClick={handleSubmit} disabled={!nextAble}>
                      Submit
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const spens = [
  {
    value: '0',
    label: "I'm new to buying leads"
  },
  {
    value: '1',
    label: "less than $250"
  },
  {
    value: '2',
    label: "$250 - $500"
  },
  {
    value: '3',
    label: "$500 - $1000"
  },
  {
    value: '4',
    label: "more than $1000"
  }
]

const industries = [
  {
    value: '0',
    label: "Life Insurance",
    product: [
      {
        value: '0',
        label: 'Final Expense'
      },
      {
        value: '1',
        label: 'Mortgaga Protection'
      },
      {
        value: '2',
        label: 'Agent Hiring'
      }
    ]
  },
  {
    value: '1',
    label: "Solar"
  },
  {
    value: '2',
    label: "Medicare",
    product: [
      {
        value: '0',
        label: 'Medicare Supplement'
      },
      {
        value: '1',
        label: 'Medicare Turning 65'
      }
    ]
  }
]

const kinds = [
  {
    value: '0',
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
    value: '1',
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
    value: '2',
    title: 'A mix of both real-time and aged leads',
  }
]