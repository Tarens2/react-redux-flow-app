import React from 'react';
import Viewer from 'react-viewer';

class HeaderViewer extends React.Component {
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
