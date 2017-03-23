import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {map} from 'lodash'
import {Icon, List} from 'egghead-ui'
import MoreInfo from './components/MoreInfo'

const completedOpacity = 'o-30'

const Checklist = ({items}) => (
  <List items={map(items, (item, index) => (
    <div 
      key={index}
      className='flex items-center justify-between b'
    >

      <div className='flex items-center'>

        <div className='mr2'>
          {item.isComplete
            ? <div className={completedOpacity}>
                <Icon type='box-check' />
              </div>
            : <Icon type='box' />
          }
        </div>

        <span className={item.isComplete
          ? `strike ${completedOpacity}`
          : ''
        }>
          {item.description}
        </span>

      </div>

      <div className={item.isComplete
        ? completedOpacity
        : ''
      }>
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
