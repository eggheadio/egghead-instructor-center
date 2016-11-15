import React from 'react'
import Split from '../../../../components/Split'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

class Overview extends React.Component {

  componentWillMount() {
    const {instructor, requestInstructorLessons} = this.props
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: 1,
      size: 50,
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
  instructor: React.PropTypes.object.isRequired
}

export default Overview
