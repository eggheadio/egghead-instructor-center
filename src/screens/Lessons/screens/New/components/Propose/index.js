import React, {Component} from 'react'
import {map, size, every} from 'lodash'
import {
  proposeActionText,
  missingInputDescriptionText,
  newLessonSubmissionDescriptionText,
  lessonTitleLabelText,
  lessonTechnologyLabelText,
  lessonSummaryLabelText,
} from 'utils/text'
import Request from 'components/Request'
import Heading from 'components/Heading'
import {Button} from 'egghead-ui'
import {Error} from 'egghead-ui'

const inputClassNames = 'input-reset pa2 br2 bg-dark-navy white ba b--light-navy w-100'

const clearedState = {
  title: '',
  technologyId: '',
  summary: '',
  hasMissingInput: false,
}

export default class Propose extends Component {

  state = clearedState

  handleClearInput = () => {
    this.setState(clearedState)
  }

  handleMissingInput = () => {
    this.setState({hasMissingInput: true})
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
      hasMissingInput,
    } = this.state
    const {instructor} = this.props
    return (
      <div>

        <Heading level='2'>
          {proposeActionText}
        </Heading>

        <div className='mb3'>
          {newLessonSubmissionDescriptionText}
        </div>

        <div className='mb3'>
          <div className='b'>
            {lessonTitleLabelText}
          </div>
          <input
            type='text'
            value={title}
            onChange={this.handleTitleChange}
            className={`${inputClassNames}${hasMissingInput ? ' b--red' : ''}`}
          />
        </div>

        <Request url='/api/v1/technologies'>
          {({data}) => (
            <div className='mb3'>
              <div className='b'>
                {lessonTechnologyLabelText}
              </div>
              <select
                value={technologyId}
                onChange={this.handleTechnologyChange}
                className={`${inputClassNames}${hasMissingInput ? ' b--red' : ''}`}
              >
                <option value=''></option>
                {map(data.technologies, (technology) => (
                  <option 
                    key={technology.id}
                    value={technology.id}
                  >
                    {technology.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </Request>

        <div className='mb3'>
          <div className='b'>
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

        {hasMissingInput
          ? <div className='mb3'>
              <Error>
                {missingInputDescriptionText}
              </Error>
            </div>
          : null
        }

        <Request
          lazy
          method='post'
          url='/api/v1/lessons'
          body={{
            'lesson': {
              title: title,
              technology_id: technologyId,
              summary: summary,
              instructor_id: instructor.id,
            }
          }}
        >
          {({request}) => (
            <Button
              type='primary'
              onClick={() => {
                if(every([title, technologyId], (input) => size(input) > 0)) {
                  request()
                  this.handleClearInput()
                }
                else {
                  this.handleMissingInput()
                }
              }}
            >
              {proposeActionText}
            </Button>
          )}
        </Request>

      </div>
    )
  }
}
