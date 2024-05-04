import './App.css'
import { Critera, CriteriaType } from './components/Criteria'

const criteria: CriteriaType[] = [
  {
    question: 'Har jag tänkt på saken i mer än två veckor?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Löser det ett problem jag geniunt har uppmärksammat?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Äger jag redan något liknande?',
    buy: 'Nej',
    noBuy: 'Ja'
  },
  {
    question: 'Är det värt att ta ett steg från mina finansiella mål?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Var kommer den vara om fem år?',
    buy: 'Använd eller används',
    noBuy: 'Oanvänd'
  },
  {
    question: 'Var ska jag sätta den om jag köper den?',
    buy: 'Jag vet precis var den ska vara',
    noBuy: 'Oklart'
  },
  {
    question: 'Hur länge måste jag jobba för att tjäna ihop till den?',
    buy: 'Inte särskilt länge',
    noBuy: 'Länge'
  },
  {
    question: 'Kan jag vara produktiv och lycklig utan den?',
    buy: 'Nej',
    noBuy: 'Ja'
  },
  {
    question: 'Vad är kostnaden per användning?',
    buy: 'Värd pengarna',
    noBuy: 'Inte värd pengarna'
  },
  {
    question: 'Matchar den här saken mina prioriteringar?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Är det här det bästa sättet för mig att skaffa den här saken?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Är saken av hög kvalitet och har den ett rimligt pris?',
    buy: 'Ja',
    noBuy: 'Nej'
  },
  {
    question: 'Hur är min sinnesstämning just nu?',
    buy: 'Lugn och neutral',
    noBuy: 'Ur balans åt något håll'
  },
  {
    question: 'Är det här ett impulsköp?',
    buy: 'Nej',
    noBuy: 'Ja'
  }
]

function App() {
  return (
    <div className='solid-shadow flex flex-col items-center w-3/4 max-w-[1000px] rounded bg-white border-2 border-brownie divide-2 divide-brownie'>
      <div className='py-2 px-4 bg-[#F98878] w-full'>
        <h1 className='font-bold text-brownie'>Ska jag köpa?</h1>
      </div>
      <div className='w-full'>
        {criteria.map((c: CriteriaType, i) => (
          <Critera key={i} criteria={c} />
        ))}
      </div>
    </div>
  )
}

export default App
