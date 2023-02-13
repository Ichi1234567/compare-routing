export default () => (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="users" component={UsersIndex}>
        <Route path="/users/:username" component={User} />
      </Route>
    </Route>
  </Router>
);
