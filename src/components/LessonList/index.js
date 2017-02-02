import React, {Component, PropTypes} from 'react'
import createLessonsUrl from './utils/createLessonsUrl'
import PaginatedLessonList from './components/PaginatedLessonList'

export default class LessonList extends Component {
  
  static propTypes = {
    states: PropTypes.array.isRequired,
    fallback: PropTypes.node.isRequired,
    instructor: PropTypes.object,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    pageSize: 15,
  }

  state = {
    currentPage: 1,
  }

  handleCurrentPage = (currentPage) => {
    this.setState({currentPage})
  }

  render() {
    const {currentPage} = this.state
    const {states, fallback, instructor, pageSize} = this.props

    return (
      <Request
        url={createLessonsUrl({
          states,
          pageSize,
          page: currentPage,
          lessons_url: instructor
            ? instructor.lessons_url
            : false,
        })}
      >
        {({request, data, response}) => (
          <PaginatedLessonList
            fallback={fallback}
            pageSize={pageSize}
            currentPage={currentPage}
            total={response.headers.get('x-total-count')}
            lessons={data}
            requestNextPage={(nextPage) => {
              this.handleCurrentPage(nextPage)
              request()
            }}
          />
        )}
      </Request>
    )
  }
}
