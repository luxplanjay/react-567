import { Sticker } from 'components/Sticker/Sticker';
import { List } from './StickerList.styled';

export const StickerList = ({ items }) => {
  return (
    <List>
      {items.map((item, idx) => (
        <li key={idx}>
          <Sticker sticker={item} />
        </li>
      ))}
    </List>
  );
};
