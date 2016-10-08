import React from 'react'
import ReactPaginate from 'react-paginate'

function PaginatedLessonList(props) {
  const {fetchLessons, lessons, instructor, total, currentPage} = props
  const pageNum = Math.ceil(total / 10)

  return (
    <div>
      <h4>All lessons:</h4>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.slug}>{lesson.title} - <em>{lesson.state}</em></li>
        ))}
      </ul>
      { pageNum > 1 && lessons.length > 0 ? (
        <div id="react-paginate">
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         pageNum={pageNum}
                         marginPagesDisplayed={3}
                         pageRangeDisplayed={5}
                         initialSelected={currentPage - 1}
                         clickCallback={(page) => {
                           const {selected} = page
                           if (currentPage !== selected + 1) {
                             console.log(currentPage, selected)
                             fetchLessons(instructor, selected + 1)
                           }
                         }}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"}/>
        </div>
      ) : null}

    </div>
  )
}

PaginatedLessonList.propTypes = {
  lessons: React.PropTypes.array.isRequired,
  fetchLessons: React.PropTypes.func.isRequired,
  instructor: React.PropTypes.object.isRequired,
  total: React.PropTypes.string,
  currentPage: React.PropTypes.number.isRequired
}

export default PaginatedLessonList