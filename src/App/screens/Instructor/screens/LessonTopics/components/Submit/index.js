import React, {Component} from 'react'
import Heading from '../../../../../../components/Heading'
import Button from '../../../../components/Button'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

export default class Submit extends Component {

  state = {
    title: '',
    summary: '',
  }

  handleSubmit = () => {
    const {instructor} = this.props
    console.log(`Submit tapped by ${instructor.id}`)
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
    const {title, summary} = this.state
    return (
      <div>

        <Heading level='2'>
          Submit
        </Heading>

        <div className='mb3'>
          Got an idea for something to record? Great! Submit anything and everything. You can submit as many as you'd like; you can record it, or others can. We'll get back to you within a couple of days.
        </div>

        <div className='mb2'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={this.handleTitleChange}
            className={inputClassNames}
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

        <Button onClick={this.handleSubmit}>
          Submit
        </Button>

      </div>
    )
  }
}
