import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import {map} from 'lodash'

Tabs.setUseDefaultStyles(false)

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
    const {groups} = this.props

    return (
      <Tabs onSelect={this.handleSelect}>

        <TabList className='list pa0 ma0 bg-light-navy flex-ns br2 br--top'>
          {map(groups, (group, index) => (
            <Tab
              key={index}
              className={`
                f6
                pv3 ph4 ph3-ns
                ttu
                pointer
                bl bl-0-ns bb-ns bw2 bw1-ns
                ${this.state.selected === index
                  ? 'b--yellow'
                  : 'b--transparent gray'
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
    )
  }
}
