import React, {Component} from 'react'
import {map, size, every} from 'lodash'
import {Error, Button} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import WrappedRequest from 'components/WrappedRequest'

const inputClassNames = 'input-reset pa2 br2 ba b--gray-secondary dark-gray w-100'

const clearedState = {
  title: '',
  technologyId: '',
  summary: '',
  hasMissingInput: false,
}

export default class Propose extends Component {

  state = clearedState

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

  handleResponse = (response) => {
    if(!response) {
      this.setState(clearedState)
    }
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
      <TitleCard
        title={<Text message='proposeLesson.title' />}
        description={<Text message='proposeLesson.description' />}
      >
        <div className='pa4'>

          <div className='mb3'>
            <div className='b'>
              <Text message='proposeLesson.lessonTitle' />
            </div>
            <input
              type='text'
              value={title}
              onChange={this.handleTitleChange}
              className={`${inputClassNames}${hasMissingInput ? ' b--red' : ''}`}
            />
          </div>

          <WrappedRequest url='/api/v1/technologies'>
            {({data}) => (
              <div className='mb3'>
                <div className='b'>
                  <Text message='proposeLesson.lessonTechnology' />
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
          </WrappedRequest>

          <div className='mb3'>
            <div className='b'>
              <Text message='proposeLesson.lessonSummary' />
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
                  <Text message='proposeLesson.missingInputError' />
                </Error>
              </div>
            : null
          }

          <WrappedRequest
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
            onResponse={this.handleResponse}
          >
            {({request}) => (
              <Button
                size='extra-small'
                onClick={() => {
                  if(every([title, technologyId], (input) => size(input) > 0)) {
                    request()
                  }
                  else {
                    this.handleMissingInput()
                  }
                }}
              >
                <Text message='proposeLesson.action' />
              </Button>
            )}
          </WrappedRequest>

        </div>
      </TitleCard>
    )
  }
}
