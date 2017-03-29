import React, {Component} from 'react'
import {Text} from 'react-localize'
import IconLabel from 'components/IconLabel'
import ProposeLessonForm from './components/ProposeLessonForm'

export default class extends Component {

  state = {
    isOpen: false,
  }

  handleClick = () => (
    this.setState({
      isOpen: true,
    })
  )

  render() {
    const {isOpen} = this.state
    const {instructor} = this.props
    return isOpen
      ? <ProposeLessonForm instructor={instructor} />
      : <div 
          onClick={this.handleClick}
          className='ttu'
        >
          <IconLabel
            iconType='add'
            labelText={<Text message='requestedLessons.proposeLesson.action' />}
            color='blue'
          />
        </div>
  }
}
