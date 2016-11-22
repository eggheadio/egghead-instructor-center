import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import {map, keys} from 'lodash'
import GuideVariation from '../GuideVariation'
import Heading, {levelClassNames} from '.'

storiesOf('Heading', module)

  .add('levels', () => (
    <div>
      {map(keys(levelClassNames), level => (
        <GuideVariation tooltip={level}>
          <Heading level={level}>
            {lorem.words()}
          </Heading>
        </GuideVariation>
      ))}
    </div>
  ))
