import React from "react"
import TagsInput from 'react-tagsinput'
import ReactMarkdown from 'react-markdown'

const Tagger = ({
  label,
  tags = [],
  onUpdate,
  field,
  description,
}) => (
  <div className="pa2">
    <form className="mw6 center">
      <fieldset className="cf bn ma0 pa0 tl">

        <legend className="f5 f4-ns mb3 black-80">
          {label}
        </legend>

        <TagsInput
          value={tags}
          onChange={(newTags) => {
            onUpdate({[field]: newTags.join(', ')})
          }}
        />

        {description
          ? <p className="black-50 f6 lh-copy">
              <ReactMarkdown source={description}/>
            </p>
          : null
        }

      </fieldset>
    </form>
  </div>
)

Tagger.propTypes = {
  label: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string,
}

export default Tagger
