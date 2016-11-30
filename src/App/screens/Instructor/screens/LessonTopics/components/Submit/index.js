import React, {Component} from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
import Heading from '../../../../../../components/Heading'
import {startSubmitLesson} from '../../../../state/actions'
import Button from '../../../../components/Button'
import Well from './components/Well'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

export default connect(
  null,
  {startSubmitLesson}
)(class Submit extends Component {

  state = {
    title: '',
    summary: '',
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

  showValidationError = (errorMessage) => {
    this.setState({errorMessage})
  }

  handleSubmit = () => {
    const {instructor, startSubmitLesson} = this.props
    size(this.state.title) > 0
      ? startSubmitLesson({
          title: this.state.title,
          summary: this.state.summary,
          state: 'claimed',
          instructor_id: instructor.id,
        })
      : this.showValidationError('Title is required')
  }

  render() {
    const {title, summary} = this.state
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
            className={`${inputClassNames}${this.state.errorMessage ? ' b--red' : ''}`}
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

        <div className='mb3'>
          <Well
            type='error'
            description={this.state.errorMessage}
          />
        </div>

        <Button onClick={this.handleSubmit}>
          Submit
        </Button>

      </div>
    )
  }
})
