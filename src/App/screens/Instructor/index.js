import React from 'react'
import ReactPaginate from 'react-paginate';
import {fetchInstructor, fetchInstructorLessons} from '../../shared/services/instructor-service'

class InstructorDashboard extends React.Component {
  state = {
    instructor: {},
    lessons: [],
    currentPage: 1
  }

  fetchLessons(instructor, currentPage=1) {
    this.setState({currentPage});
    fetchInstructorLessons(instructor, currentPage).then(({lessons, pages, total}) => this.setState({lessons, pages, total}))
  }

  componentWillMount() {
    fetchInstructor('john-lindquist').then((instructor) => {
      console.info(instructor);
      this.setState({instructor})
      this.fetchLessons(instructor)
    })
  }
  render() {
    const {instructor, lessons, total, currentPage} = this.state

    const pageNum = Math.ceil(total / 10)

    return instructor.first_name ? (
      <div className="pa4">
        <div>
          <h1>Hi, {instructor.first_name}!</h1>
        </div>
        {instructor.revenue ? (
          <div>
            <p>This month subscribers have
              spent <strong>{instructor.revenue[instructor.revenue.current].minutes_watched}</strong> minutes
              watching your lessons. Your current revenue share
              is <strong>${instructor.revenue[instructor.revenue.current].revenue}</strong>.
            </p>
          </div>
        ) : null}
        <div>
          <h3>Got questions? Feeling stuck?</h3>
          <p>
              You're not alone. The first lesson is always the hardest, and we
            have lots of resources to help you. If you're feeling stuck
            here're a few places to turn:
          </p>
          <ul>
            <li>
              <a href="#0">egghead.io Slack</a> - Need access? Email <a href="mailto:slack@egghead.io">slack@egghead.io</a>
            </li>
            <li>
              <a href="#0">Your mentor</a> - Your mentor is <strong>John Lindquist</strong>. Reach out any tine, they're here to help.
            </li>
            <li>
              <a href="#0">The Instructor Guidebook</a> - We've put together comprehensive how-tos covering a lot of the
              common issues that new instructors encounter. It's here to help you make great work that will resonate
            </li>
            <li>
              <a href="#0">Joel & John</a> - As egghead.io's coufounders, they can help with almost anything related
              to making egghead.io lessons.
            </li>
          </ul>

        </div>
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
                             initialSelected={currentPage-1}
                             clickCallback={(page) => {
                               const {selected} = page
                               if(currentPage !== selected + 1) {
                                 console.log(currentPage, selected)
                                 this.setState({lessons: []})
                                 this.fetchLessons(instructor, selected + 1)
                               }
                             }}
                             containerClassName={"pagination"}
                             subContainerClassName={"pages pagination"}
                             activeClassName={"active"}/>
            </div>
          ) : null}

        </div>


      </div>
    ) : null
  }
}

export default InstructorDashboard