import React from 'react'
import {map} from 'lodash'
import {
  whatNowQuestionText,
  whatNowAnswerText,
  faqTitleText,
} from '../../../../../../utils/text'
import {guideUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import InfoBlock from './components/InfoBlock'

const questions = [
  {
    question: whatNowQuestionText,
    answer: whatNowAnswerText,
    moreInfoUrl: guideUrl,
  },
]

const GetPublishedFaq = () => (
  <div>

    <Heading level='2'>
      {faqTitleText}
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
