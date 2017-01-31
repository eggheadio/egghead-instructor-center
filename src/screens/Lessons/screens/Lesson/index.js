import React, {Component} from 'react'
import {find} from 'lodash'
import {connect} from 'react-redux'
import {lessonTitleText} from 'utils/text'
import {startFetchLesson} from 'state/actions'
import Split from 'components/Split'
import Loading from 'components/Loading'
import NextStep from './components/NextStep'
import Data from './components/Data'

export default connect(
  ({appScreen}, {lessonSlug}) => ({
    lesson: find(appScreen.lessons, ['slug', lessonSlug]),
  }),
  {startFetchLesson}
)(class Lesson extends Component {

  componentWillReceiveProps(nextProps) {
    const {lessonSlug} = this.props
    if (lessonSlug !== nextProps.lessonSlug) {
      this.props.startFetchLesson(nextProps.lessonSlug)
    }
  }

  componentDidMount() {
    const {lesson, lessonSlug, startFetchLesson} = this.props
    if(!lesson || lessonSlug !== lesson.slug) {
      startFetchLesson(lessonSlug)
    }
  }

  render() {
    const {lesson, lessonSlug} = this.props

    if(!lesson || lessonSlug !== lesson.slug) {
      return <Loading />
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
