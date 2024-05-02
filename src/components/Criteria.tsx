export interface CriteriaType {
  question: string
  buy: string
  noBuy: string
}

export function Critera(props: { criteria: CriteriaType }) {
  return <div className='text-red-400'>{props.criteria.question}</div>
}
