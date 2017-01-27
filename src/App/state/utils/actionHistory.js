import {slice} from 'lodash'

const precedingActionsCount = 10

export default (store) => next => action => {
  const actionType = action.type
  const storedPrecedingActionsString = localStorage.getItem('precedingActions')
  const fullPrecedingActions = [
    ...(storedPrecedingActionsString
      ? JSON.parse(storedPrecedingActionsString)
      : []
    ),
    actionType,
  ]
  const mostRecentPrecedingActions = slice(fullPrecedingActions, fullPrecedingActions.length - precedingActionsCount)
  localStorage.setItem('precedingActions', JSON.stringify(mostRecentPrecedingActions))
  console.log('actionType', actionType)
  return next(action)
}
