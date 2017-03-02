import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import {previousLabelText, nextLabelText} from 'utils/text'
import sortLessonsByState from './utils/sortLessonsByState'
import LessonTeaser from './components/LessonTeaser'

const PaginatedLessonList = ({
  fallback,
  pageSize,
  currentPage,
  total,
  lessons,
  requestNextPage,
}) => {

  const pageNum = Math.ceil(total / pageSize)
  const hasMoreThanOnePage = (pageNum > 1) && (lessons.length > 0)

  const linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim bg-blue white mr2 pa2 ph3-ns br2',
  }

  return (
    <div className='bg-light-navy'>
      {total > 0
        ? <div>

            <div className='br2'>
              {map(sortLessonsByState(lessons), (lesson, index) => (
                <div
                  key={index}
                  className='bb b--navy pa3'
                >
                  <LessonTeaser lesson={lesson} />
                </div>
              ))}
            </div>

            {hasMoreThanOnePage
              ? <div className='pa3'>
                  <ReactPaginate
                    pageNum={pageNum}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    initialSelected={currentPage - 1}
                    previousLabel={previousLabelText}
                    nextLabel={nextLabelText}
                    clickCallback={(page) => {
                      const {selected} = page
                      if (currentPage !== selected + 1) {
                        requestNextPage(selected + 1)
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
                </div>
              : null
            }

          </div>
        : fallback
      }
    </div>
  )
}

PaginatedLessonList.propTypes = {
  fallback: PropTypes.node.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.string,
  lessons: PropTypes.array.isRequired,
  requestNextPage: PropTypes.func.isRequired,
}

export default PaginatedLessonList
