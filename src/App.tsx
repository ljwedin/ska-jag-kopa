import { useCallback, useState } from 'react'
import './App.css'
import Criteria from './components/Criteria'
import { criteria } from './assets/criteriaData'
import { IoClose } from 'react-icons/io5'

const App: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<{
    [key: string]: { buyPressed: boolean; noBuyPressed: boolean }
  }>({})

  const handleToggleBuy = useCallback((id: string) => {
    setButtonStates((prevState) => {
      const prevStateForId = prevState[id] || {
        buyPressed: false,
        noBuyPressed: false
      }
      return {
        ...prevState,
        [id]: {
          ...prevStateForId,
          buyPressed: !prevStateForId.buyPressed,
          noBuyPressed: prevStateForId.buyPressed && false
        }
      }
    })
  }, [])

  const handleToggleNoBuy = useCallback((id: string) => {
    setButtonStates((prevState) => {
      const prevStateForId = prevState[id] || {
        buyPressed: false,
        noBuyPressed: false
      }
      return {
        ...prevState,
        [id]: {
          ...prevStateForId,
          noBuyPressed: !prevStateForId.noBuyPressed,
          buyPressed: prevStateForId.noBuyPressed && false
        }
      }
    })
  }, [])

  return (
    <div className='flex flex-col solid-shadow w-3/4 max-w-[1000px] bg-white border-2 border-brownie divide-2 divide-brownie'>
      <div className='flex justify-between items-center py-2 px-4 bg-[#F98878] w-full border-b-2 border-brownie'>
        <h1 className='font-bold text-brownie'>Ska jag köpa?</h1>
        <IoClose size={22} className='text-brownie cursor-pointer' />
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
