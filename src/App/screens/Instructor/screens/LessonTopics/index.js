import React from 'react'
import Split from '../../../../components/Split'
import AllLessons from '../../components/AllLessons'

export default ({
  instructor,
  allLessons,
}) => (
  <AllLessons instructor={instructor}>
    {(currentPage) => (
      <Split
        title='Lesson Topics'
        main={
          <div />
        }
        aside={
          <div />
        }
      />
    )}
  </AllLessons>
)
