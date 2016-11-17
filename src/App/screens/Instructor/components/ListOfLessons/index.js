import React from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import LessonListItem from './components/LessonListItem'

const ListOfLessons = (
  lessons=[],
  selectedLesson,
  selectLesson,
  total,
  handlePageClick,
  currentPage,
) => (
  <main className="mw6">

    <div id="react-paginate">
      <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<a href="">...</a>}
        pageNum={Math.ceil(total / 5)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        initialSelected={currentPage}
        clickCallback={(page) => {
          handlePageClick(page.selected+1)
        }}
      />
    </div>

    {map(lessons, (lesson) => (
      <LessonListItem selectedLesson={selectedLesson}
        lesson={lesson}
        selectLesson={selectLesson}
      />
    ))}

  </main>
)

export default ListOfLessons
