import React from 'react'
import { CriteriaType } from '../assets/criteriaData'
import classNames from 'classnames'

interface CriteriaComponentProps {
  criteria: CriteriaType
  onToggleBuy: (id: string) => void
  onToggleNoBuy: (id: string) => void
  buyPressed: boolean
  noBuyPressed: boolean
}

const Criteria: React.FC<CriteriaComponentProps> = React.memo(
  ({ criteria, onToggleBuy, onToggleNoBuy, buyPressed, noBuyPressed }) => {
    const buttonBuyClasses = classNames(
      'px-6',
      'py-2',
      'text-sm',
      'button-shadow',
      'transition-all',
      'duration-200',
      'hover:scale-105',
      'border-2',
      'border-brownie',
      {
        'bg-mint': buyPressed,
        'bg-lemon': !buyPressed
      }
    )

    const buttonNoBuyClasses = classNames(
      'px-6',
      'py-2',
      'text-sm',
      'button-shadow',
      'transition-all',
      'duration-200',
      'hover:scale-105',
      'border-2',
      'border-brownie',
      {
        'bg-mint': noBuyPressed,
        'bg-lemon': !noBuyPressed
      }
    )

    return (
      <div className='flex justify-between items-center gap-20'>
        <p>{criteria.question}</p>
        <div className='flex gap-4'>
          <button
            className={buttonBuyClasses}
            onClick={() => onToggleBuy(criteria.key)}
          >
            {criteria.buy}
          </button>
          <button
            className={buttonNoBuyClasses}
            onClick={() => onToggleNoBuy(criteria.key)}
          >
            {criteria.noBuy}
          </button>
        </div>
      </div>
    )
  }
)

export default Criteria
