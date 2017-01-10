import React from 'react'
import {map} from 'lodash'
import {
  incomeAmountQuestionText,
  incomeAmountAnswerText,
  incomeStartQuestionText,
  incomeStartAnswerText,
  viewerStatsQuestionText,
  viewerStatsAnswerText,
  faqTitleText,
} from '../../../../../../utils/text'
import {paymentInfoUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import InfoBlock from './components/InfoBlock'

const questions = [
  {
    question: incomeAmountQuestionText,
    answer: incomeAmountAnswerText,
    moreInfoUrl: paymentInfoUrl,
  },
  {
    question: incomeStartQuestionText,
    answer: incomeStartAnswerText,
  },
  {
    question: viewerStatsQuestionText,
    answer: viewerStatsAnswerText,
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
