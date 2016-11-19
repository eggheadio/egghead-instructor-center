import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'

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

          <ul>
            {map(lessons, (lesson) => (
              <li key={lesson.id}>
                {lesson.title} - <em>{lesson.state}</em>
              </li>
            ))}
          </ul>

          {hasMoreThanOnePage
            ? <div id='react-paginate'>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={<a href=''>...</a>}
                  breakClassName={'break-me'}
                  pageNum={pageNum}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={5}
                  initialSelected={currentPage - 1}
                  clickCallback={(page) => {
                    const {selected} = page
                    if (currentPage !== selected + 1) {
                      fetchLessons(selected + 1)
                    }
                  }}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
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
