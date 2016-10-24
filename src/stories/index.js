import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';


import ListOfLessons from '../App/components/ListOfLessons';
import Tagger from '../App/components/Tagger';
import WistiaVideo from '../App/components/WistiaVideo';


storiesOf('WistiaVideo', module)
  .add('Basic', () => (
    <WistiaVideo wistia_id="0ya0rwdg1l" />
  ));

storiesOf('ListOfLessons', module)
  .add('Basic', () => (
    <ListOfLessons/>
  ));

storiesOf('Tagger', module)
  .add('basic', () => (
    <Tagger label="test" tags={['some tag']}  />
  ))
  .add('with description', () => (

    <Tagger label="test" tags={['some tag']} description="Just some *markdown*"/>
  ));;


