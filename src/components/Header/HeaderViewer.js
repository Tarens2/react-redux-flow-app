// @flow

import React from 'react';
import Viewer from 'react-viewer';

type State = {
  visible: Boolean,
};

type Props = {
  src: String,
  alt: String,
};

class HeaderViewer extends React.Component<Props, State> {
  state = {
    visible: false,
  };

  openImage = () => {
    this.setState({ visible: !this.state.visible });
  };

  closeImage = () => {
    this.setState({ visible: false });
  };

  render() {
    const { src = '', alt = '' } = this.props;
    return (
      <Viewer visible={this.state.visible} onClose={this.closeImage} images={[{ src, alt }]} />
    );
  }
}

export default HeaderViewer;
