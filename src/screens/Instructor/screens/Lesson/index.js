import React, {Component} from 'react'
import {find} from 'lodash'
import {connect} from 'react-redux'
import {lessonTitleText} from 'utils/text'
import {startFetchLesson} from 'state/actions'
import Split from 'components/Split'
import Main from 'components/Main'
import Loading from 'components/Loading'
import NextStep from './components/NextStep'
import Data from './components/Data'

export default connect(
  ({appScreen}, {params}) => ({
    lesson: find(appScreen.lessons, ['slug', params.lessonSlug]),
  }),
  {startFetchLesson}
)(class Lesson extends Component {

  componentWillReceiveProps(nextProps) {
    const {lessonSlug} = this.props.params
    if (lessonSlug !== nextProps.params.lessonSlug) {
      this.props.startFetchLesson(nextProps.params.lessonSlug)
    }
  }

  render() {
    const {lesson, params, startFetchLesson} = this.props

    if(!lesson || params.lessonSlug !== lesson.slug) {
      startFetchLesson(params.lessonSlug)
      return (
        <Main>
          <Loading />
        </Main>
      )
    }

    return (
      <Split
        title={lessonTitleText}
        main={
          <NextStep lesson={lesson} />
        }
        aside={
          <Data lesson={lesson} />
        }
      />
    )
  }
})
