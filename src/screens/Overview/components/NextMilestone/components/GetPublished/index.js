import React from 'react'
import {getPublishedTitleText} from 'utils/text'
import Heading from 'components/Heading'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

export default ({
  instructor,
}) => (
  <div>
    <Heading level='3'>
      {getPublishedTitleText}
    </Heading>
    <GetPublishedSteps instructor={instructor} />
    <GetPublishedFaq />
  </div>
)
