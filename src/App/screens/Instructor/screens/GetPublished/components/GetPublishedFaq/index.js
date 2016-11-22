import React from 'react'
import {map} from 'lodash'
import Heading from '../../../../../../components/Heading'
import InfoBlock from './components/InfoBlock'

const questions = [
  {
    question: 'How much money will I make?',
    answer: 'Royalties can range anywhere from pocket change to surpassing your full-time job\'s income. It all depends on how many lessons and courses you create all your hard work snowballs into beautiful recurring residual income!',
    moreInfoUrl: 'https://instructor.egghead.io/01-invited/getting-paid.html',
  },
  {
    question: 'When do I get paid?',
    answer: 'After you publish your first lesson, at the beginning of the following month we will set up your direct deposit.',
  },
  {
    question: 'Can I see viewer stats for my lessons?',
    answer: 'Yep! After you publish your first lesson, you will start getting nightly emails with viewer stats on your published lessons.',
  },
]

const GetPublishedFaq = () => (
  <div>

    <Heading level='2'>
      FAQ
    </Heading>

    {map(questions, (question, index) => (
      <div
        key={index}
        className='mb3'
      >
        <InfoBlock
          title={question.question}
          description={question.answer}
          moreInfoUrl={question.moreInfoUrl}
        />
      </div>
    ))}

  </div>
)

export default GetPublishedFaq
