import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Heading from '../../../../../../components/Heading'
import InProgress from './components/InProgress'
import Published from './components/Published'

export default ({instructor, lessonPage}) => (
  <div>

    <Heading level='2'>
      Lessons
    </Heading>

    <Tabs>

      <TabList>
        <Tab>
          <Heading level='3'>
            In Progress
          </Heading>
        </Tab>
        <Tab>
          <Heading level='3'>
            Published
          </Heading>
        </Tab>
      </TabList>

      <TabPanel>
        <InProgress
          instructor={instructor}
          lessonPage={lessonPage}
        />
      </TabPanel>

      <TabPanel>
        <Published
          instructor={instructor}
          lessonPage={lessonPage}
        />
      </TabPanel>

    </Tabs>

  </div>
)
