import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import {map} from 'lodash'
import GuideVariation from '../GuideVariation'
import Heading, {levels} from '.'

storiesOf('Heading', module)

  .add('levels', () => (
    <div>
      {map(levels, level => (
        <GuideVariation tooltip={level}>
          <Heading level={level}>
            {lorem.words()}
          </Heading>
        </GuideVariation>
      ))}
    </div>
  ))
