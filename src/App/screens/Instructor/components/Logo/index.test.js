import React from 'react'
import {create} from 'react-test-renderer'
import Logo from '.'

test('default', () => (
  expect(create(
    <Logo />
  )).toMatchSnapshot()
))
