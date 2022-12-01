import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';

/**
 * 1. Можно добавлять новые стикеры через форму.
 * 2. Может быть открыт только один стикер, остальные закрыты.
 *    То есть при открытии нового, закрывается тот, что был открыт.
 */

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

  deleteSticker = stickerId => {
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(sticker => sticker.id !== stickerId),
    }));
  };

  render() {
    const { stickers } = this.state;

    return (
      <Layout>
        <StickerForm onSubmit={this.addSticker} />
        {stickers.length > 0 && (
          <StickerList items={stickers} onDelete={this.deleteSticker} />
        )}
      </Layout>
    );
  }
}
