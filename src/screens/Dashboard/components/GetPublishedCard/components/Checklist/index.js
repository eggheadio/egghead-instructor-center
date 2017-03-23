import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {map} from 'lodash'
import {Icon, List} from 'egghead-ui'
import MoreInfo from './components/MoreInfo'

const completedColor = 'dark-gray-secondary'

const Checklist = ({items}) => (
  <List items={map(items, (item, index) => (
    <div 
      key={index}
      className='flex items-center b'
    >
      <div className='mr2'>
        {item.isComplete
          ? <Icon
              type='box-check'
              color={completedColor}
            />
          : <Icon type='box' />
        }
      </div>
      <div>
        <div>
          <span className={item.isComplete
            ? `strike ${completedColor}`
            : ''
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
                to={item.action}
                className='ml2'
              >
                <Icon type='arrow-right' />
              </Link>
            : null
          }
        </div>
      </div>
    </div>
  ))} />
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
