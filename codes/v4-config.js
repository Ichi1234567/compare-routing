const routes = [
  {
    component: App,
    routes: [
      {
        path: '/users',
        component: UsersIndex,
      },
      {
        path: '/users/:username',
        component: User,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes
