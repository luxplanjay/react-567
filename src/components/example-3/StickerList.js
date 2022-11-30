import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';

export const StickerList = ({ stickers }) => {
  return (
    <List>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker sticker={sticker} />
        </li>
      ))}
    </List>
  );
};
