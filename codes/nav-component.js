const RootStack = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: {
        title: 'Index',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
    NotFound: {
      screen: NotFoundScreen,
      navigationOptions: {
        title: 'NotFound',
      },
    },
  },
  {
    initialRouteName: 'Index',
  }
);


export function App() {
  return <RootStack />;
}
