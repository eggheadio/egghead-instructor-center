import React, {PropTypes} from 'react'
import {map} from 'lodash'
import Icon from '../../../../../components/Icon'
import MoreInfo from '../../MoreInfo'

const Checklist = ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className='flex items-center b mb3'
      >

        <div className='mr2'>
          {item.isComplete
            ? <Icon
                type='step-complete'
                size='2'
                className='gray'
              />
            : <Icon
                type='step-incomplete'
                size='2'
                className='green'
              />
          }
        </div>

        <div>
          <div>
            <span className={item.isComplete
              ? 'strike gray'
              : 'green'
            }>
              {item.description}
            </span>
            {item.moreInfoUrl
              ? <span className='ml2'>
                  <MoreInfo url={item.moreInfoUrl} />
                </span>
              : null
            }
          </div>
        </div>

      </div>
    ))}
  </div>
)

Checklist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    moreInfoUrl: PropTypes.string,
  })).isRequired,
}

export default Checklist
