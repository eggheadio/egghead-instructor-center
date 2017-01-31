import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filter, reject} from 'lodash'
import {instructorPulseTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'
import Loading from 'components/Loading'
import Split from 'components/Split'
import {startFetchInstructors} from './state/actions'
import InstructorsList from './components/InstructorsList'

export default connect(
  ({instructorsScreen}) => ({
    instructors: instructorsScreen.instructors,
  }),
  {
    startFetchInstructors,
  }
)(class Admin extends Component {

  componentDidMount() {

    const {instructors, startFetchInstructors} = this.props

    if(!instructors) {
      startFetchInstructors()
    }
  }

  render() {
    
    const {instructors} = this.props

    if(!instructors) {
      return <Loading />
    }

    return (
      <Split
        title={instructorPulseTitleText}
        main={
          <InstructorsList
            title={unpublishedTitleText}
            instructors={filter(instructors, ['published_lessons', 0])}
          />
        }
        aside={
          <InstructorsList
            title={publishedTitleText}
            instructors={reject(instructors, ['published_lessons', 0])}
          />
        }
      />
    )
  }
})
