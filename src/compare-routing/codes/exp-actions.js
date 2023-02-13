import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'home',
   title: 'Home'
  }]
}

function navigationState (state = initialState, action) {
  switch (action.type) {
    case 'PUSH_ROUTE':
      return NavigationStateUtils.push(state, action.route);

    case 'POP_ROUTE':
      return NavigationStateUtils.pop(state)
    default:
      return state;
  }
}

export default navigationState;
