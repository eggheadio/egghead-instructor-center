import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filter, reject} from 'lodash'

import {instructorPulseTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'

import {startFetchInstructors} from 'state/actions'

import Main from 'components/Main'
import Loading from 'components/Loading'
import Split from 'components/Split'

import InstructorsList from './components/InstructorsList'

export default connect(
  ({appScreen}) => ({
    instructors: appScreen.instructors,
  }),
  {
    startFetchInstructors,
  }
)(class Admin extends Component {

  componentWillMount() {

    const {instructors, startFetchInstructors} = this.props

    if(!instructors) {
      startFetchInstructors()
      return (
        <Main>
          <Loading />
        </Main>
      )
    }
  }

  render() {
    
    const {instructors} = this.props

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
