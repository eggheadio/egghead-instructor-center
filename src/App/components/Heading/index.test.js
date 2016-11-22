import React from 'react'
import {create} from 'react-test-renderer'
import {forEach, keys} from 'lodash'
import {StringFixture} from '../SnapshotFixtures'
import GuideVariation from '../GuideVariation'
import Heading, {levelClassNames} from '.'

test('levels', () => {
  forEach(keys(levelClassNames), (level) => (
    expect(create(
      <Heading level={level}>
        {StringFixture}
      </Heading>
    )).toMatchSnapshot()
  ))
})
