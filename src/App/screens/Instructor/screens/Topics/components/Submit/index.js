import React, {Component} from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
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
      instructor_id: instructor.slug,
    })
    this.setState(clearedState)
    addNotification({
      type: 'info',
      message: 'Lesson topic submitted and claimed!',
      action: {
        path: '/',
        description: 'View',
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
        message: 'Missing required form input',
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
          Submit
        </Heading>

        <div className='mb3'>
          Got an idea for something to record? Great! Submit anything and everything. You can submit as many as you'd like. You'll automatically "Claim" your submissions.
        </div>

        <div className='mb2'>
          <input
            type='text'
            placeholder='Title *'
            value={title}
            onChange={this.handleTitleChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          />
        </div>

        <div className='mb2'>
          <textarea
            type='text'
            placeholder='Summary (optional, but preferred)'
            rows='5'
            value={summary}
            onChange={this.handleSummaryChange}
            className={inputClassNames}
          />
        </div>

        <Button onClick={this.handleSubmitAttempt}>
          Submit
        </Button>

      </div>
    )
  }
})
