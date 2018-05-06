export class App from Component {
  // render right part or Header
  _renderRightComponent = (sceneProps) => {
    const { route } = sceneProps.scene;
    const _key = purify(route.key);

    switch(_key) {
      case 'Index':
        return <RightAvatarHeader />;
      case 'Profile':
        return <RightHeader />;
      default:
        return null;
    }
  }

  // render left part or Header
  _renderLeftComponent = (sceneProps) => {
    const { route } = sceneProps.scene;
    const _key = purify(route.key);

    switch(_key) {
      case 'Index':
      case 'Profile':
        return <LeftHeader />;
      default:
        return null;
    }
  }

  // render center part or Header
  _renderTitleComponent = (sceneProps) => {
    const { route } = sceneProps.scene;
    const _key = purify(route.key);

    switch(_key) {
      case 'Index':
      case 'Profile':
        return <Title title={_key} />;
      default:
        return null;
    }
  }

  _renderHeader = () => {
    return (
      <NavigationHeader
        renderRightComponent={this._renderRightComponent}
        renderLeftComponent={this._renderLeftComponent}
        renderTitleComponent={this._renderTitleComponent}
      />
    );
  }

  _renderScene = ({ scene }) => {
    const { route } = scene;
    const { key } = route;
    const _key = purify(key);

    switch(_key) {
      case 'Index':
        return <Index />;
      case 'Profile':
        return <Profile />;
      default:
        return <NotFound />;
    }
  }

  render() {
    return (
      <NavigationCardStack
        renderHeader={this._renderHeader}
        renderScene={this._renderScene}
      />
    );
  }
}
