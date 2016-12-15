import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {size} from 'lodash'
import {addNotification} from '../../../../../../state/actions'
import Heading from '../../../../../../components/Heading'
import {startSubmitLesson} from '../../../../state/actions'
import Button from '../../../../../../components/Button'
import Well from '../../../../../../components/Well'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

const clearedState = {
  title: '',
  summary: '',
  hasError: false,
  hasSuccess: false,
}

export default connect(
  null,
  {startSubmitLesson, addNotification}
)(class Submit extends Component {

  state = clearedState

  clear = () => {
    this.setState(clearedState)
  }

  submit = () => {
    const {title, summary} = this.state
    const {instructor, startSubmitLesson} = this.props
    startSubmitLesson({
      title: title,
      summary: summary,
      state: 'claimed',
      instructor_id: instructor.id,
    })
    this.clear()
    this.setState({hasSuccess: true})
  }

  handleSubmitAttempt = () => {
    const {addNotification} = this.props
    const {title} = this.state
    if(size(title) > 0) {
      this.submit()
    }
    else {
      this.setState({hasError: true})
      addNotification({
        type: 'error',
        message: 'Missing required form input',
      })
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
    const {title, summary, hasError, hasSuccess} = this.state
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

        {hasSuccess
          ? <div className='mb3'>
              <Well>
                Lesson topic saved! <Link to='/' className='blue'>View</Link>
              </Well>
            </div>
          : null
        }

        <Button onClick={this.handleSubmitAttempt}>
          Submit
        </Button>

      </div>
    )
  }
})
