import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import {
  previousLabelText,
  nextLabelText,
} from '../../../../../../utils/text'
import sortLessonsByState from './utils/sortLessonsByState'
import LessonSummary from './components/LessonSummary'

const PaginatedLessonList = ({
  fetchLessons,
  lessons,
  total,
  currentPage,
  pageSize,
  fallback,
}) => {

  const pageNum = Math.ceil(total / pageSize)
  const hasMoreThanOnePage = (pageNum > 1) && (lessons.length > 0)

  const linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim bg-blue white mr2 pa2 ph3-ns br2',
  }

  return (
    total > 0
      ? <div>

          <div className='bg-light-gray br2'>
            {map(sortLessonsByState(lessons), (lesson) => (
              <div
                key={lesson.id}
                className='bb b--black-20 pa3'
              >
                <LessonSummary lesson={lesson} />
              </div>
            ))}
          </div>

          {hasMoreThanOnePage
            ? <ReactPaginate
                pageNum={pageNum}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                initialSelected={currentPage - 1}
                previousLabel={previousLabelText}
                nextLabel={nextLabelText}
                clickCallback={(page) => {
                  const {selected} = page
                  if (currentPage !== selected + 1) {
                    fetchLessons(selected + 1)
                  }
                }}
                containerClassName='mb0 pa0 list mt4 flex items-center'
                previousClassName={linkClassNames.mobileHide}
                nextClassName={linkClassNames.mobileHide}
                disabledClassName='o-20'
                previousLinkClassName={linkClassNames.link}
                nextLinkClassName={linkClassNames.link}
                pageLinkClassName={linkClassNames.link}
                activeClassName='o-50'
                breakClassName='mr2'
              />
            : null
          }

        </div>
      : fallback
  )
}

PaginatedLessonList.propTypes = {
  lessons: PropTypes.array.isRequired,
  fetchLessons: PropTypes.func.isRequired,
  total: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
}

export default PaginatedLessonList
