import React from 'react'
import {map, keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import GuideVariation from '../GuideVariation'
import Well, {types} from '.'

storiesOf('Well', module)

  .add('types', () => (
    <div>
      {map(keys(types), type => (
        <GuideVariation
          key={type}
          tooltip={type}
        >
          <Well type={type}>
            {lorem.text()}
          </Well>
        </GuideVariation>
      ))}
    </div>
  ))
