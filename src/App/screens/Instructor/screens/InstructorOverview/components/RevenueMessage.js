import React from 'react'

function RevenueMessage(props) {
  const {instructor} = props
  return instructor.revenue ? (
    <div>
      <p>This month subscribers have
        spent <strong>{instructor.revenue[instructor.revenue.current].minutes_watched}</strong> minutes
        watching your lessons. Your current revenue share
        is <strong>${instructor.revenue[instructor.revenue.current].revenue}</strong>.
      </p>
    </div>
  ) : null
}

RevenueMessage.propTypes = {
  instructor: React.PropTypes.object.isRequired
}

export default RevenueMessage