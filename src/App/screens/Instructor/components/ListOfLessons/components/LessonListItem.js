import React from 'react'
import classnames from 'classnames'
import {union} from 'lodash'

const LessonListItem = ({
  lesson,
  selectedLesson,
  selectLesson,
}) => {

  const selected = classnames({
    'bg-near-white': selectedLesson === lesson,
  })

  const allTags = union(
    lesson.language_list,
    lesson.framework_list,
    lesson.skillset_list,
    lesson.library_list,
    lesson.tool_list,
    lesson.platform_list
  ).join(', ')

  return (
    <div className={selected}>
      <a className="link dt w-100 bb b--black-10 dim blue" onClick={() => {
        selectLesson(lesson)
      }}>
        <div className="dtc w1 w3-ns v-mid pl2">
          <img
            alt='Lesson icon'
            className="f6 f5-ns fw6 lh-title black mv0"
            src={lesson.icon_url}
          />
        </div>
        <div className="dtc v-mid pa3">
          <h5 className="f6 f5-ns fw6 lh-title black mv0">
            {lesson.title}
          </h5>
          {lesson.series ? (
            <div className="f6 pt2">
              <span className="black-40">IN COURSE:</span> {lesson.series.title}
            </div>
          ) : null}

          <div className="f6 pt2 black-60">
            {allTags}
          </div>
        </div>

      </a>
    </div>
  )
}

export default LessonListItem
