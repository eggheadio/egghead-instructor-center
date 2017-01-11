import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {map} from 'lodash'
import Icon from '../../../../../components/Icon'
import MoreInfo from '../../MoreInfo'

const Checklist = ({items, instructorId}) => (
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
            {item.action
              ? <Link 
                  to={`/instructors/${instructorId}${item.action}`}
                  className='ml2'
                >
                  <Icon
                    type='arrow-right'
                    className='blue'
                  />
                </Link>
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
    actionUrl: PropTypes.string,
    moreInfoUrl: PropTypes.string,
  })).isRequired,
}

export default Checklist
