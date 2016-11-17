import React from 'react'
import {create} from 'react-test-renderer'
import Icon from '.'

test('types', () => (
  expect(create(
    <Icon type='more-info' />
  )).toMatchSnapshot()
))

test('sizes', () => (
  expect(create(
    <Icon
      type='more-info'
      size='3'
    />
  )).toMatchSnapshot()
))
