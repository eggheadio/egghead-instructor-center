import React from 'react'
import Split from '../../../../components/Split'
import Avatar from '../../components/Avatar'
import Lessons from './components/Lessons'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    title={
      <div className='flex items-center'>
        <div className='mr3 w3 flex items-center'>
          <Avatar
            name={instructor.first_name}
            url={instructor.avatar_url}
          />
        </div>
        <div>Overview</div>
      </div>
    }
    main={
      <Lessons
        instructor={instructor}
        lessonPage={lessonPage}
      />
    }
    aside={
      <div>
        <Stats instructor={instructor} />
        <Help />
      </div>
    }
  />
)
