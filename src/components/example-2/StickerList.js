import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';
import { Component } from 'react';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  selectSticker = idx => {
    this.setState({
      selectedIdx: idx,
    });
  };

  render() {
    const { stickers } = this.props;

    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              isSelected={this.state.selectedIdx === idx}
              onSelect={() => this.selectSticker(idx)}
            />
          </li>
        ))}
      </List>
    );
  }
}
