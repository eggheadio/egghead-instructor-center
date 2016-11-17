import React, {Component, PropTypes} from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

class Overview extends Component {

  componentWillMount() {
    const {instructor, requestInstructorLessons} = this.props
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: 1,
      size: 50,
      states: slice(lessonStates, 0, indexOf(lessonStates, 'published')),
    })
  }

  render() {
    const {instructor, instructorLessons} = this.props
    return (
      instructor
        ? <Split
            title={instructor.first_name}
            main={
              <InProgress
                instructor={instructor}
                instructorLessons={instructorLessons}
              />
            }
            aside={
              <div>
                <Stats instructor={instructor} />
                <Help />
              </div>
            }
          />
        : null
    )
  }
}

Overview.propTypes = {
  instructor: PropTypes.object.isRequired
}

export default Overview
