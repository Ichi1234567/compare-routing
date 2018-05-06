export default function Routes() {
  <Route path="/" component={App}>
    <Switch>
      <Route exact path="/users" component={UsersIndex} />
      <Route path="/users/:username" component={User} />
      <Route path="*" component={NotFound} status={404} />
    </Switch>
  </Route>
}
