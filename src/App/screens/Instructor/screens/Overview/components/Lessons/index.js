import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
Tabs.setUseDefaultStyles(false)
import {map} from 'lodash'
import Heading from '../../../../../../components/Heading'
import InProgress from './components/InProgress'
import Published from './components/Published'

export default class extends Component {

  state = {
    selected: 0,
  }

  handleSelect = (index) => (
    this.setState({
      selected: index,
    })
  )

  render() {
    const {instructor, lessonPage} = this.props

    const groups = [
      {
        title: 'In Progress',
        component: (
          <InProgress
            instructor={instructor}
            lessonPage={lessonPage}
          />
        ),
      },
      {
        title: 'Published',
        component: (
          <Published
            instructor={instructor}
            lessonPage={lessonPage}
          />
        ),
      },
    ]

    return (
      <div>

        <Heading level='2'>
          Lessons
        </Heading>

        <Tabs
          onSelect={this.handleSelect}
          className='bg-light-gray'
        >

          <TabList className='list pa0 ma0 bg-black-70 flex-ns'>
            {map(groups, (group, index) => (
              <Tab
                key={index}
                className={`
                  f6
                  pv3 ph4 ph3-ns
                  ttu
                  bl bl-0-ns bb-ns bw2 bw1-ns
                  ${this.state.selected === index
                    ? 'b--orange white'
                    : 'b--transparent white-60'
                  }
                `}
              >
                {group.title}
              </Tab>
            ))}
          </TabList>

          {map(groups, (group, index) => (
            <TabPanel key={index}>
              {group.component}
            </TabPanel>
          ))}  

        </Tabs>

      </div>
    )
  }
}
