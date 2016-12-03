import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {map} from 'lodash'
import Heading from '../../../../../../components/Heading'
import InProgress from './components/InProgress'
import Published from './components/Published'

export default ({instructor, lessonPage}) => {

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

      <Tabs>

        <TabList>
          {map(groups, (group, index) => (
            <Tab key={index}>
              <Heading level='3'>
                {group.title}
              </Heading>
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
