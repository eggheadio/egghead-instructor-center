import React from 'react'
import {storiesOf} from '@kadira/storybook'

import examples from '../App/utils/examples'

import Checklist from '../App/components/Checklist'
import DescriptionBlock from '../App/components/DescriptionBlock'
import InfoBlock from '../App/components/InfoBlock'
import Link from '../App/components/Link'
import ListOfLessons from '../App/components/ListOfLessons'
import MoreInfoLink from '../App/components/MoreInfoLink'
import Tagger from '../App/components/Tagger'
import WistiaVideo from '../App/components/WistiaVideo'

storiesOf('Checklist', module)
  .add('Default', () => (
    <Checklist items={[
      {
        isComplete: false,
        description: examples.text.short,
      },
      {
        isComplete: true,
        description: examples.text.short,
      },
      {
        isComplete: true,
        description: examples.text.short,
        moreInfoUrl: examples.url,
      },
    ]} />
  ))

storiesOf('DescriptionBlock', module)
  .add('Default', () => (
    <DescriptionBlock>
      {examples.text.medium}
    </DescriptionBlock>
  ))

storiesOf('InfoBlock', module)
  .add('Default', () => (
    <InfoBlock
      title={examples.text.short}
      description={examples.text.medium}
      moreInfoUrl={examples.url}
    />
  ))

storiesOf('Link', module)
  .add('Default', () => (
    <Link url={examples.url}>
      {examples.text.short}
    </Link>
  ))

storiesOf('ListOfLessons', module)
  .add('Basic', () => (
    <ListOfLessons/>
  ))

storiesOf('MoreInfoLink', module)
  .add('Default', () => (
    <MoreInfoLink url={examples.url} />
  ))

storiesOf('Tagger', module)
  .add('basic', () => (
    <Tagger
      label="test"
      tags={['some tag']} 
    />
  ))
  .add('with description', () => (
    <Tagger
      label="test"
      tags={['some tag']}
      description={examples.markdown}
    />
  ))

storiesOf('WistiaVideo', module)
  .add('Basic', () => (
    <WistiaVideo wistia_id="0ya0rwdg1l" />
  ))

