import React from 'react'
import Viewer from 'react-viewer';
import {CardMedia} from "material-ui";

class CardImage extends React.Component {
  state = {
    visible: false,
  };

  openImage = () => {
    this.setState({ visible: !this.state.visible });
  }
  closeImage = () => {
    this.setState({ visible: false });
  }
  render() {
    const {src = '', alt, style} = this.props;
    style.backgroundSize = 'auto 100%'
    style.cursor = 'pointer'
    return (
      <div>
        { src && <CardMedia
          onClick={this.openImage}
          style={style}
          image={src}
        />}
        <Viewer
          visible={this.state.visible}
          onClose={this.closeImage}
          images={[{src, alt}]}
        />
      </div>
    );
  }
}
export default CardImage