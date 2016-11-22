import React from 'react'
import {map, keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import GuideVariation from '../../../../components/GuideVariation'
import Icon, {sizes, types} from './index'

storiesOf('Icon', module)

  .add('default', () => (
    <Icon type='more-info' />
  ))

  .add('sizes', () => (
    <div>
      {map(keys(sizes), size => (
        <GuideVariation tooltip={size}>
          <Icon
            type='more-info'
            size={size}
          />
        </GuideVariation>
      ))}
    </div>
  ))

  .add('types', () => (
    <div>
      {map(keys(types), type => (
        <GuideVariation tooltip={type}>
          <Icon type={type} />
        </GuideVariation>
      ))}
    </div>
  ))
