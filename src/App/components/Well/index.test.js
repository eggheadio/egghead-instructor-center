import React from 'react'
import {create} from 'react-test-renderer'
import {forEach, keys} from 'lodash'
import {StringFixture} from '../SnapshotFixtures'
import Well, {types} from '.'

test('types', () => {
  forEach(keys(types), (type) => (
    expect(create(
      <Well type={type}>
        {StringFixture}
      </Well>
    )).toMatchSnapshot()
  ))
})

