import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';


import ListOfLessons from '../App/shared/components/ListOfLessons';
import Tagger from '../App/shared/components/Tagger';
import WistiaVideo from '../App/shared/components/WistiaVideo';


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


