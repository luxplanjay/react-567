import { ImageModal } from 'components/ImageModal/ImageModal';
import { Component } from 'react';
import Modal from 'react-modal';
import { Actions, CardWrapper, Image, Label } from './Sticker.styled';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class Sticker extends Component {
  state = {
    openedModal: null,
  };

  openModal = type => {
    this.setState({ openedModal: type });
  };

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { openedModal } = this.state;
    const {
      sticker: { img, label },
    } = this.props;

    return (
      <>
        <CardWrapper>
          <Image
            src={img}
            alt={label}
            onClick={() => this.openModal('image')}
          />
          <Label>{label}</Label>
          <Actions>
            <button onClick={() => this.openModal('edit')}>Edit</button>
            <button onClick={() => this.openModal('fav')}>Fav</button>
            <button onClick={() => this.openModal('delete')}>Delete</button>
          </Actions>
        </CardWrapper>

        <ImageModal
          isOpen={openedModal === 'image'}
          img={img}
          onClose={this.closeModal}
        />

        <Modal
          isOpen={openedModal === 'edit'}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal}>Close</button>
          <div>Edit modal</div>
        </Modal>

        <Modal
          isOpen={openedModal === 'fav'}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal}>Close</button>
          <div>Fav modal</div>
        </Modal>

        <Modal
          isOpen={openedModal === 'delete'}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal}>Close</button>
          <div>Delete modal</div>
        </Modal>
      </>
    );
  }
}
