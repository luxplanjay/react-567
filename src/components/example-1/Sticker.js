import { CardWrapper, Image, Label } from 'components/Sticker.styled';
import { Component } from 'react';

export class Sticker extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      sticker: { img, label },
    } = this.props;
    const { isOpen } = this.state;

    return (
      <CardWrapper onClick={this.toggle}>
        <Image src={img} alt={label} />
        {isOpen && <Label>{label}</Label>}
      </CardWrapper>
    );
  }
}
