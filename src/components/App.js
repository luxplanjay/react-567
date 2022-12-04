import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';

export class App extends Component {
  static defaultProps = {
    initialStickers: [],
  };

  state = {
    stickers: this.props.initialStickers,
  };

  addSticker = (img, label) => {
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id: nanoid(), img, label }],
    }));
  };

  render() {
    const { stickers } = this.state;

    return (
      <Layout>
        <StickerForm onSubmit={this.addSticker} />
        {stickers.length > 0 && <StickerList items={stickers} />}
      </Layout>
    );
  }
}
