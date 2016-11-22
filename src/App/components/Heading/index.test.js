import React from 'react'
import {create} from 'react-test-renderer'
import {forEach} from 'lodash'
import {StringFixture} from '../SnapshotFixtures'
import GuideVariation from '../GuideVariation'
import Heading, {levels} from '.'

test('levels', () => {
  forEach(levels, (level) => (
    expect(create(
      <Heading level={level}>
        {StringFixture}
      </Heading>
    )).toMatchSnapshot()
  ))
})
