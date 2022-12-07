import { Component } from 'react';
import { BsFillTrashFill, BsZoomIn } from 'react-icons/bs';
import { ImageModal } from 'components/ImageModal/ImageModal';
import {
  CardWrapper,
  Image,
  Label,
  ActionButton,
  Actions,
} from './Sticker.styled';

export class Sticker extends Component {
  state = {
    isImageModalOpen: false,
  };

  toggleImageModal = () => {
    this.setState(prevState => ({
      isImageModalOpen: !prevState.isImageModalOpen,
    }));
  };

  handleDelete = () => {
    const { sticker, onDelete } = this.props;
    onDelete(sticker.id);
  };

  render() {
    const { isImageModalOpen } = this.state;
    const {
      sticker: { img, label },
    } = this.props;

    return (
      <>
        <CardWrapper>
          <Image src={img} alt={label} />
          <Label>{label}</Label>
          <Actions>
            <ActionButton aria-label="zoom" onClick={this.toggleImageModal}>
              <BsZoomIn />
            </ActionButton>
            <ActionButton aria-label="delete" onClick={this.handleDelete}>
              <BsFillTrashFill />
            </ActionButton>
          </Actions>
        </CardWrapper>

        <ImageModal
          isOpen={isImageModalOpen}
          img={img}
          onClose={this.toggleImageModal}
        />
      </>
    );
  }
}
