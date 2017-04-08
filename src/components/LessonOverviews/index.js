import React, {Component, PropTypes} from 'react'
import createLessonsUrl from 'utils/createLessonsUrl'
import WrappedRequest from 'components/WrappedRequest'
import PaginatedLessonOverviews from './components/PaginatedLessonOverviews'

export default class LessonOverviews extends Component {
  
  static propTypes = {
    states: PropTypes.array.isRequired,
    fallback: PropTypes.node.isRequired,
    instructor: PropTypes.object,
    pageSize: PropTypes.number,
    includeLessonsInCourses: PropTypes.bool,
  }

  static defaultProps = {
    pageSize: 20,
    includeLessonsInCourses: true,
  }

  state = {
    currentPage: 1,
  }

  handleCurrentPage = (currentPage) => {
    this.setState({currentPage})
  }

  render() {
    const {currentPage} = this.state
    const {
      states,
      fallback,
      instructor,
      pageSize,
      includeLessonsInCourses,
    } = this.props

    return (
      <WrappedRequest
        url={createLessonsUrl({
          states,
          pageSize,
          page: currentPage,
          lessons_url: instructor
            ? instructor.lessons_url
            : false,
          includeLessonsInCourses,
        })}
        subscribe
      >
        {({request, data, response}) => (
          <PaginatedLessonOverviews
            fallback={fallback}
            pageSize={pageSize}
            currentPage={currentPage}
            total={response.headers['x-total-count']}
            lessons={data}
            requestNextPage={(nextPage) => {
              this.handleCurrentPage(nextPage)
              request()
            }}
            requestCurrentPage={request}
          />
        )}
      </WrappedRequest>
    )
  }
}
