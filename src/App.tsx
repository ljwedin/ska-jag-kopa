import { useCallback, useState } from 'react'
import './App.css'
import Criteria from './components/Criteria'
import { criteria } from './assets/criteriaData'

const App: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<{
    [key: string]: { buyPressed: boolean; noBuyPressed: boolean }
  }>({})

  const handleToggleBuy = useCallback((id: string) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        buyPressed: !prevState[id]?.buyPressed,
        noBuyPressed: prevState[id].buyPressed && false
      }
    }))
  }, [])

  const handleToggleNoBuy = useCallback((id: string) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        noBuyPressed: !prevState[id]?.noBuyPressed,
        buyPressed: prevState[id].noBuyPressed && false
      }
    }))
  }, [])

  return (
    <div className='flex flex-col solid-shadow w-3/4 min-w-[840px] max-w-[1000px] bg-white border-2 border-brownie divide-2 divide-brownie'>
      <div className='py-2 px-4 bg-[#F98878] w-full'>
        <h1 className='font-bold text-brownie'>Ska jag köpa?</h1>
      </div>
      <div className='p-5 flex flex-col gap-4'>
        {criteria.map((item) => (
          <Criteria
            key={item.key}
            criteria={item}
            onToggleBuy={handleToggleBuy}
            onToggleNoBuy={handleToggleNoBuy}
            buyPressed={buttonStates[item.key]?.buyPressed || false}
            noBuyPressed={buttonStates[item.key]?.noBuyPressed || false}
          />
        ))}
      </div>
    </div>
  )
}

export default App
