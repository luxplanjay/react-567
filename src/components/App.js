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
    stickers: [],
  };

  componentDidMount() {
    const savedStickers = localStorage.getItem('stickers');
    if (savedStickers !== null) {
      this.setState({
        stickers: JSON.parse(savedStickers),
      });
    } else {
      this.setState({
        stickers: this.props.initialStickers,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.stickers !== this.state.stickers) {
      localStorage.setItem('stickers', JSON.stringify(this.state.stickers));
    }
  }

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
