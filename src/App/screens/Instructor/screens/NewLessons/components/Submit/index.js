import React, {Component} from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
import {
  submitActionText,
  viewActionText,
  missingInputDescriptionText,
  lessonSummaryLabelText,
  newLessonSubmissionDescriptionText,
  titleLabelText,
} from '../../../../../../utils/text'
import {addNotification} from '../../../../../../state/actions'
import Heading from '../../../../../../components/Heading'
import {startSubmitLesson} from '../../../../state/actions'
import Button from '../../../../../../components/Button'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

const clearedState = {
  title: '',
  summary: '',
  hasError: false,
}

export default connect(
  null,
  {startSubmitLesson, addNotification}
)(class Submit extends Component {

  state = clearedState

  submit = () => {
    const {title, summary} = this.state
    const {instructor, startSubmitLesson, addNotification} = this.props
    startSubmitLesson({
      title: title,
      summary: summary,
      state: 'claimed',
      instructor_id: instructor.id,
    })
    this.setState(clearedState)
    addNotification({
      type: 'info',
      message: 'Lesson submitted and claimed!',
      action: {
        path: '/',
        description: viewActionText,
      },
    })
  }

  handleSubmitAttempt = () => {
    const {title} = this.state
    const {addNotification} = this.props
    if(size(title) > 0) {
      this.submit()
    }
    else {
      addNotification({
        type: 'error',
        message: missingInputDescriptionText,
      })
      this.setState({hasError: true})
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleSummaryChange = (event) => {
    this.setState({
      summary: event.target.value
    })
  }

  render() {
    const {title, summary, hasError} = this.state
    return (
      <div>

        <Heading level='2'>
          {submitActionText}
        </Heading>

        <div className='mb3'>
          {newLessonSubmissionDescriptionText}
        </div>

        <div className='mb2'>
          <input
            type='text'
            placeholder={titleLabelText}
            value={title}
            onChange={this.handleTitleChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          />
        </div>

        <div className='mb2'>
          <textarea
            type='text'
            placeholder={lessonSummaryLabelText}
            rows='5'
            value={summary}
            onChange={this.handleSummaryChange}
            className={inputClassNames}
          />
        </div>

        <Button onClick={this.handleSubmitAttempt}>
          {submitActionText}
        </Button>

      </div>
    )
  }
})
