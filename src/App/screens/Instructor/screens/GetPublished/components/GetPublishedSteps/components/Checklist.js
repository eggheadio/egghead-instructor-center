import React from 'react'
import MoreInfo from '../../MoreInfo'

const Checklist = ({items}) => (
  <div>
    {items.map((item, index) => (
      <div
        key={index}
        className='flex items-center b mb3'
      >
        <div className='mr2'>
          {item.isComplete
            ? <span className='fa fa-check-square-o fa-lg gray' />
            : <span className='fa fa-square-o fa-lg green' />
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
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    isComplete: React.PropTypes.bool.isRequired,
    description: React.PropTypes.string.isRequired,
    moreInfoUrl: React.PropTypes.string,
  })).isRequired,
}

export default Checklist
