import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import LessonSummary from './components/LessonSummary'

const PaginatedLessonList = ({
  fetchLessons,
  lessons,
  total,
  currentPage,
  pageSize,
}) => {

  const pageNum = Math.ceil(total / pageSize)
  const hasMoreThanOnePage = (pageNum > 1) && (lessons.length > 0)

  return (
    total > 0
      ? <div>

          <div className='bg-black-10 br2 mv3'>
            {map(lessons, (lesson) => (
              <div
                key={lesson.id}
                className='bb b--black-10 pa3'
              >
                <LessonSummary lesson={lesson} />
              </div>
            ))}
          </div>

          {hasMoreThanOnePage
            ? <div id='react-paginate'>
                <ReactPaginate
                  pageNum={pageNum}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={3}
                  initialSelected={currentPage - 1}
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  clickCallback={(page) => {
                    const {selected} = page
                    if (currentPage !== selected + 1) {
                      fetchLessons(selected + 1)
                    }
                  }}
                />
              </div>
            : null
          }

        </div>
      : <div>No lessons to show</div>
  )
}

PaginatedLessonList.propTypes = {
  lessons: PropTypes.array.isRequired,
  fetchLessons: PropTypes.func.isRequired,
  total: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
}

export default PaginatedLessonList
