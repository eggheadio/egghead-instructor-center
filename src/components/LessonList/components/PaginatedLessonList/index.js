import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import {List} from 'egghead-ui'
import {previousLabelText, nextLabelText} from 'utils/text'
import sortLessonsByState from './utils/sortLessonsByState'
import LessonListItem from './components/LessonListItem'

const PaginatedLessonList = ({
  fallback,
  pageSize,
  currentPage,
  total,
  lessons,
  requestNextPage,
  requestCurrentPage,
}) => {

  const pageNum = Math.ceil(total / pageSize)
  const hasMoreThanOnePage = (pageNum > 1) && (lessons.length > 0)

  const linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim bg-blue white mr2 pa2 ph3-ns br2',
  }

  return total > 0
    ? <div>

        <List items={map(sortLessonsByState(lessons), (lesson) => (
          <LessonListItem 
            key={lesson.slug}
            lesson={lesson}
            requestCurrentPage={requestCurrentPage}
          />
        ))} />

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

PaginatedLessonList.propTypes = {
  fallback: PropTypes.node.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.string,
  lessons: PropTypes.array.isRequired,
  requestNextPage: PropTypes.func.isRequired,
}

export default PaginatedLessonList
