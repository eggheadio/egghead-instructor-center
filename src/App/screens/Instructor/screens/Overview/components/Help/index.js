import React from 'react'
import {
  helpTitleText,
  guideDescriptionText,
  guideActionText,
  adminDescriptionText,
  instructorsChatDescription,
  adminActionText,
} from '../../../../../../utils/text'
import {guideUrl, chatUrl, instructorsChatUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import Anchor from '../../../../../../components/Anchor'

export default () => (
  <div>

    <Heading level='2'>
      {helpTitleText}
    </Heading>

    <ul>
      <li>
        {guideDescriptionText}
        <Anchor url={guideUrl} isSeparateTab>{guideActionText}</Anchor>
      </li>
      <li>
        {adminDescriptionText}
        <Anchor url={chatUrl} isSeparateTab>{adminActionText}</Anchor>
      </li>
      <li>
        {instructorsChatDescription}
        <Anchor url={instructorsChatUrl} isSeparateTab>View the channel</Anchor>
      </li>
    </ul>

  </div>
)
