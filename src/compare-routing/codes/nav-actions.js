import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'Users',
  params: { username: 'hello-user' },
});

this.props.navigation.dispatch(navigateAction);
