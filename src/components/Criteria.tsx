export interface CriteriaType {
  question: string
  buy: string
  noBuy: string
}

export function Critera(props: { criteria: CriteriaType }) {
  return (
    <div className='flex justify-between p-4'>
      <p className='w-1/2'>{props.criteria.question}</p>
      <div className='flex justify-evenly'>
        <p>{props.criteria.buy}</p>
        <p>{props.criteria.noBuy}</p>
      </div>
    </div>
  )
}
