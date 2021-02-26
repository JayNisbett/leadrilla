import React from 'react'
import mpImg from '../assets/img/couple-family-mortgage-protection-leads@2x.jpg'
import medSupImg1 from '../assets/img/medicare-supplement-another-rate-increase@2x.jpg'
import medSupImg2 from '../assets/img/med-care-supplement-available-for-you@2x.jpg'
import agentHiringImg from '../assets/img/facebook-agent-hiring.jpg'
import fxAdSample from '../assets/img/fx-ad-sample.jpg'

export const LEAD_TYPES = [
  {
    name: 'Final Expense',
    price: '$20',
    handle: 'final-expense-insurance-leads',
    images: [<img src={fxAdSample} alt="liveleads Final Expense Leads" />],
    description: (
      <span>
        <p>
          Final Expense insurance plays a huge role in protecting the financial security of elderly
          individuals that low to mid income levels. Burial and funeral expenses can costs over
          $35,000. So having an insurance policy that covers the cost of this provides peace of mind
          to individuals with families that would struggle to afford a funeral.
        </p>
        <p>
          Our Final Expense leads are targeted toward seniors between the ages of 50-85, and have
          low to mid income levels.
        </p>
      </span>
    ),
    bullets: [
      'Ages 50-85',
      'Leads are 100% exclusive for 21 days',
      'Receive each lead within seconds',
      'Lead instantly receives text message with your name and number',
      'Pick the areas you want leads in on a map',
      'Pay per lead - only pay when you receive a lead',
      'Full name, address, city, state, zip, date of birth, phone, email'
    ]
  },
  {
    name: 'Final Expense Pro',
    price: '$30',
    handle: 'final-expense-pro-insurance-leads',
    images: [<img src={fxAdSample} alt="liveleads Final Expense Leads" />],
    description: (
      <span>
        <p>
          <strong>
            Our Final Expense Pro leads provide you with additional information on the client.
          </strong>{' '}
          We collect the same information as our regular Final Expense Leads but we also ask the
          following questions. The client MUST manually answer each of these questions.
          <ul>
            <li>
              <strong>How much life insurance do you currently have?</strong>
              <ul>
                <li>
                  Possible answers: None, Less than $10k, $10k - $25k, $25k - $50k, $50k - $100k,
                  $100k - $250k, More than $250k, I'm not sure
                </li>
              </ul>
            </li>
            <li>
              <strong>How much coverage are you looking for?</strong>
              <ul>
                <li>
                  Possible answers: Less than $10k, $10k - $25k, $25k - $50k, $50k - $100k, More
                  than $100k, I'm not sure
                </li>
              </ul>
            </li>
            <li>
              <strong>Who would be the beneficiary(s) for your policy?</strong>
              <ul>
                <li>
                  Possible answers: My spouse, My children, My parents, Someone else, I'm not sure
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Collecting this information from the client gives the agent extra data points to use in
            their script when on the phone. You know exactly what this client is looking for, and
            you know they had high intent when filling out this form.
          </p>
          <p>
            If you'd like to try our Final Expense Pro leads in your area please reach out to us at{' '}
            <a href="mailto:hello@liveleads.com">hello@liveleads.com</a>.
          </p>
        </p>
      </span>
    ),
    bullets: [
      'Ages 50-85',
      'Leads are 100% exclusive for 21 days',
      'Receive each lead within seconds',
      'Lead instantly receives text message with your name and number',
      'Pick the areas you want leads in on a map',
      'Pay per lead - only pay when you receive a lead',
      'Full name, address, city, state, zip, date of birth, phone, email'
    ]
  },
  {
    name: 'Spanish Final Expense',
    price: '$25',
    handle: 'spanish-final-expense-insurance-leads',
    images: [<img src={fxAdSample} alt="liveleads Spanish Final Expense Leads" />],
    description: (
      <span>
        <p>
          Final Expense insurance plays a huge role in protecting the financial security of elderly
          individuals that low to mid income levels. Burial and funeral expenses can costs over
          $35,000. So having an insurance policy that covers the cost of this provides peace of mind
          to individuals with families that would struggle to afford a funeral.
        </p>
        <p>
          Our Spanish Final Expense leads are targeted toward Spanish-speaking seniors between the
          ages of 50-85, and have low to mid income levels.
        </p>
      </span>
    ),
    bullets: [
      'Ages 50-85',
      'Leads are 100% exclusive for 21 days',
      'Receive each lead within seconds',
      'Pick the areas you want leads in on a map',
      'Pay per lead - only pay when you receive a lead',
      'Full name, address, city, state, zip, date of birth, phone, email'
    ]
  },
  {
    name: 'Mortgage Protection',
    price: '$36',
    handle: 'mortgage-protection-insurance-leads',
    images: [
      <img
        src={mpImg}
        alt="liveleads Mortgage Protection Leads Ad Example - Happy Couple with Family"
      />
    ],
    description: (
      <span>
        <p>
          Mortgage Protection insurance plays a huge role in protecting the financial security of
          homeowners. Mortgage Protection helps cover costs of the mortgage if a partner or spouse
          dies unexpectedly. Many people don’t think about what would happen if their partner or
          spouse dies, but it’s crucial that they think about their mortgage and if they would be
          able to afford the payments if it did occur.
        </p>
        <p>
          Our Mortgage Protection leads are targeted toward home owners between the ages of 25-85,
          and have expressed an interest in Mortgage Protection insurance on the internet. This
          interest is captured when they search for Mortgage Protection insurance on the internet,
          or visit websites / pages related to Mortgage Protection insurance.
        </p>
      </span>
    ),
    bullets: [
      'Ages 25-85',
      'Expressed interest in mortgage protection insurance',
      'Leads are 100% exclusive for 21 days',
      'Receive each lead within seconds',
      'Lead instantly receives text message with your name and number',
      'Pick the areas you want leads in on a map',
      'Pay per lead - only pay when you receive a lead',
      'Full name, address, city, state, zip, date of birth, phone, email'
    ]
  },
  {
    name: 'Medicare Supplement',
    price: '$35',
    handle: 'medicare-supplement-leads',
    images: [
      <img
        src={medSupImg1}
        alt="liveleads Medicare Supplement Medigap Leads - Another Rate Increase"
      />,
      <img
        src={medSupImg2}
        alt="liveleads Medicare Supplement Medigap Leads - Happy couple - Plans are available for you"
      />
    ],
    description: (
      <span>
        <p>
          Every year, seniors receive a rate increase from their Medicare Supplement company.
          Sometimes, they receive multiple increases in the same year. Most seniors can’t afford
          this. This introduces an opportunity to put them in a new Medicare Supplement plan that
          they can afford. 10,000 seniors become available for Medicare every single day.
        </p>
        <p>
          Our Medicare Supplement leads target seniors that are at least 64 years of age and have
          expressed an interest in Medicare, Medicare Supplement, Medigap, or Medicare Advantage
          products. This interest is captured when they search for Medicare related products on the
          internet, or visit websites / pages related to Medicare Supplement plans.
        </p>
      </span>
    ),
    bullets: [
      'Ages 64+',
      'Expressed interest in Medicare, Medicare supplement, Medigap, or Medicare Advantage products',
      'Leads are 100% exclusive for 21 days',
      'Receive each lead within seconds',
      'Lead instantly receives text message with your name and number',
      'Pick the areas you want leads in on a map',
      'Pay per lead - only pay when you receive a lead',
      'Full name, address, city, state, zip, date of birth, phone, email'
    ]
  },
  {
    name: 'Agent Hiring',
    price: '$17',
    handle: 'agent-hiring',
    images: [<img src={agentHiringImg} alt="liveleads Agent Hiring Leads" />],
    description: (
      <span>
        <p>
          Looking to grow your agency but don't have the time to post jobs every week, run ads, and
          do your own agent outreach? With liveleads, all you need to do is turn on a Lead Feed for
          Agent Hiring leads and sit back.
        </p>
        <p>
          We target licensed life insurance agents and create intelligent lookalike audiences from
          them. On top of that, we target individuals that are currently job seeking or have
          expressed interests in life insurance sales positions. You will receive both licensed and
          unlicensed agents.
        </p>
      </span>
    ),
    bullets: [
      'Ages 18-55',
      'Currently job seeking and/or expressed interests in life insurance sales',
      'Roughly 20% of the agent hiring leads will be licensed',
      'Exclusive leads',
      'Leads are never resold',
      'Receive each lead within seconds',
      'Pick the state(s) you want the leads in',
      'Pay per lead - only pay when you receive a lead',
      'Full name, email, phone number, licensing status'
    ]
  }
]
