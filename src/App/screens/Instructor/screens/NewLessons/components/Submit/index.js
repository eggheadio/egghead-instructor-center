import React, {Component} from 'react'
import {connect} from 'react-redux'
import {size, every} from 'lodash'
import {
  submitActionText,
  viewActionText,
  missingInputDescriptionText,
  newLessonSubmissionDescriptionText,
  lessonTitleLabelText,
  lessonTechnologyLabelText,
  lessonSummaryLabelText,
} from '../../../../../../utils/text'
import {addNotification} from '../../../../../../state/actions'
import Heading from '../../../../../../components/Heading'
import {startFetchTechnologies, startSubmitLesson} from '../../../../state/actions'
import Button from '../../../../../../components/Button'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

const clearedState = {
  title: '',
  technology: '',
  summary: '',
  hasError: false,
}

export default connect(
  ({instructorScreen}) => ({
    technologies: instructorScreen.technologies,
  }),
  {
    addNotification,
    startFetchTechnologies,
    startSubmitLesson,
  }
)(class Submit extends Component {

  state = clearedState

  componentWillMount() {
    const {technologies} = this.props
    if(!technologies) {
      startFetchTechnologies()
    }
  }

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
    const {title, technology} = this.state
    const {addNotification} = this.props
    if(every([title, technology], (input) => size(input) > 0)) {
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

  handleTechnologyChange = (event) => {
    this.setState({
      technology: event.target.value
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
          <div className='b gray'>
            {lessonTitleLabelText}
          </div>
          <input
            type='text'
            value={title}
            onChange={this.handleTitleChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          />
        </div>

        <div className='mb2'>
          <div className='b gray'>
            {lessonTechnologyLabelText}
          </div>
          <select
            value={this.state.technology}
            onChange={this.handleTechnologyChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          >
            <option value='grapefruit'>Grapefruit</option>
          </select>
        </div>

        <div className='mb2'>
          <div className='b gray'>
            {lessonSummaryLabelText}
          </div>
          <textarea
            type='text'
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
