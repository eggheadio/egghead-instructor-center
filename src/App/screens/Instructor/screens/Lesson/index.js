import React, {Component} from 'react'
import {find} from 'lodash'
import {connect} from 'react-redux'
import {lessonTitleText} from '../../../../utils/text'
import {startFetchLesson} from '../../../../state/actions'
import Split from '../../../../components/Split'
import Main from '../../../../components/Main'
import Loading from '../../../../components/Loading'
import Heading from '../../../../components/Heading'
import WistiaVideo from './components/WistiaVideo'

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
          <div>
            <Heading level='3'>
              {lesson.title}
            </Heading>
            <div>
              {lesson.state}
            </div>
            <div>
              <img
                src={lesson.technology.logo_http_url}
                alt={lesson.technology.label}
                className='mw2 mr3'
              />
              {lesson.technology.label}
            </div>
            <div>
              {lesson.instructor.full_name}
            </div>
            <div>
              {lesson.summary}
            </div>
          </div>
        }
        aside={
          <WistiaVideo wistiaId={lesson.wistia_id} />
        }
      />
    )
  }
})
