import './App.css'
import { Critera, CriteriaType } from './components/Criteria'

const criteria: CriteriaType[] = [
  {
    question: 'Have I thought about it for at least two weeks?',
    buy: 'Yes',
    noBuy: 'No'
  },
  {
    question: "Does it solve a problem that I've genuinely noticed?",
    buy: 'Yes',
    noBuy: 'No'
  },
  {
    question: 'Do I already own something similar?',
    buy: 'No',
    noBuy: 'Yes'
  },
  {
    question:
      'Is buying it worth giving up progress towards my next financial goal?',
    buy: 'No',
    noBuy: 'Yes'
  },
  {
    question: 'Where will it be in five years?',
    buy: 'Used or in use',
    noBuy: 'Not in use'
  },
  {
    question: 'Where will I put it if I buy it?',
    buy: 'I have a place in mind',
    noBuy: 'Not sure'
  },
  {
    question: 'How long will I have to work to pay for it?',
    buy: 'Not very long',
    noBuy: 'A significant amount of time'
  },
  {
    question: 'Can I be productive and happy without it?',
    buy: 'No',
    noBuy: 'Yes'
  },
  {
    question: 'What is the cost of it per use?',
    buy: 'Worth my money',
    noBuy: 'Not worth my money'
  },
  {
    question: 'Does buying it support my priorities?',
    buy: 'Yes',
    noBuy: 'No'
  },
  {
    question: 'Is this the best way for me to obtain this?',
    buy: 'Yes',
    noBuy: 'No'
  },
  {
    question: 'Is it a high-quality item with a reasonable price tag?',
    buy: 'Yes',
    noBuy: 'No'
  },
  {
    question: 'What is my current mental state?',
    buy: 'Calm and neutral',
    noBuy: 'Allured by internal or external forces'
  },
  {
    question: "What is the real reason I'm considering buying it?",
    buy: 'An intentional reason',
    noBuy: 'An impulsive reason'
  }
]

function App() {
  return (
    <>
      {criteria.map((c: CriteriaType, i) => (
        <Critera key={i} criteria={c} />
      ))}
    </>
  )
}

export default App
