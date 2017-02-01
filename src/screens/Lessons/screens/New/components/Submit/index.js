import React, {Component} from 'react'
import {connect} from 'react-redux'
import {map, size, every} from 'lodash'
import {
  submitActionText,
  viewActionText,
  missingInputDescriptionText,
  newLessonSubmissionDescriptionText,
  lessonTitleLabelText,
  lessonTechnologyLabelText,
  lessonSummaryLabelText,
} from 'utils/text'
import {
  startShowNotification,
  startFetchTechnologies,
  startSubmitLesson,
} from 'state/actions'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Error from 'components/Error'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

const clearedState = {
  title: '',
  technologyId: '',
  summary: '',
  hasError: false,
}

export default connect(
  ({appScreen}) => ({
    technologies: appScreen.technologies,
  }),
  {
    startShowNotification,
    startFetchTechnologies,
    startSubmitLesson,
  }
)(class Submit extends Component {

  state = clearedState

  static defaultProps = {
    type: 'claimed',
  }

  componentDidMount() {
    const {startFetchTechnologies, technologies} = this.props
    if(!technologies) {
      startFetchTechnologies()
    }
  }

  submit = () => {
    const {title, technologyId, summary} = this.state
    const {instructor, startSubmitLesson, startShowNotification, type} = this.props
    startSubmitLesson({
      title: title,
      technology_id: technologyId,
      summary: summary,
      state: type,
      ...(instructor ? {instructor_id: instructor.id} : {}),
    })
    this.setState(clearedState)
    startShowNotification({
      type: 'info',
      message: 'Lesson submitted!',
      action: {
        path: '/',
        description: viewActionText,
      },
    })
  }

  handleSubmitAttempt = () => {
    const {title, technologyId} = this.state
    if(every([title, technologyId], (input) => size(input) > 0)) {
      this.submit()
    }
    else {
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
      technologyId: event.target.value
    })
  }

  handleSummaryChange = (event) => {
    this.setState({
      summary: event.target.value
    })
  }

  render() {
    const {
      title,
      technologyId,
      summary, 
      hasError,
    } = this.state
    const {technologies, type} = this.props
    return (
      <div>

        <Heading level='2'>
          {submitActionText}
        </Heading>

        {type === 'claimed'
          ? <div className='mb3'>
              {newLessonSubmissionDescriptionText}
            </div>
          : null
        }

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
            value={technologyId}
            onChange={this.handleTechnologyChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          >
            <option value=''></option>
            {map(technologies, (technology) => (
              <option 
                key={technology.id}
                value={technology.id}
              >
                {technology.label}
              </option>
            ))}
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

        {hasError
          ? <div className='mb2'>
              <Error>
                {missingInputDescriptionText}
              </Error>
            </div>
          : null
        }

        <Button onClick={this.handleSubmitAttempt}>
          {submitActionText}
        </Button>

      </div>
    )
  }
})
