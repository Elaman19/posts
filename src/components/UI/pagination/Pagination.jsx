import { getPagesArray } from "../../../utils/page"

export const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className='page-wrapper'>
      {
        pagesArray.map(p => 
          <span 
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page-current' : 'page'}
          >
          {p}
          </span>
        )
      }
    </div>
  )
}