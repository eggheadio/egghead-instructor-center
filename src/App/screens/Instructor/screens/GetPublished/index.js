import React from 'react'
import InfoBlock from './components/InfoBlock'
import Checklist from './components/Checklist'
import DescriptionBlock from './components/DescriptionBlock'

// TEMP DATA
// TODO: WIRE UP TO SERVICES/REDUX/CONNECT
const todos = [
  {
    isComplete: true,
    description: 'Create an instructor account',
  },
  {
    isComplete: false,
    description: 'Join egghead Slack',
    moreInfoUrl: 'https://instructor.egghead.io/01-invited/invited.html',
  },
  {
    isComplete: false,
    description: 'Upload rough draft lesson',
    moreInfoUrl: 'https://instructor.egghead.io/01-invited/first-lesson.html',
  },
  {
    isComplete: false,
    description: 'Get gear',
    moreInfoUrl: 'https://instructor.egghead.io/02-creating-lessons/recording-gear.html',
  },
  {
    isComplete: false,
    description: 'Re-upload lesson',
  },
  {
    isComplete: false,
    description: 'Publish lesson',
  },
]

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

const GetPublished = () => (
  <div>

    <header>
      <h1 className='f1'>Get Published</h1>
    </header>

    <div className='flex-ns'>

      <main
        className='mr4-ns'
        style={{flex: 1}}
      >
        <h2 className='f2'>To Do</h2>
        <DescriptionBlock>
          Work with your mentor to complete these items so you can get published!
        </DescriptionBlock>
        <div className='mt3'>
          <Checklist items={todos} />
        </div>
      </main>

      <aside style={{flex: 1}}>
        <h2 className='f2'>FAQ</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <InfoBlock
              title={question.question}
              description={question.answer}
              moreInfoUrl={question.moreInfoUrl}
            />
          </div>
        ))}
      </aside>

    </div>

  </div>
)

export default GetPublished
