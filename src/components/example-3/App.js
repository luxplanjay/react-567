import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

/**
 * Может быть открыт только один стикер, остальные закрыты.
 * То есть при открытии нового, закрывается тот, что был открыт.
 * Можно добавлять новые стикеры через форму. (Занятие 2 этой недели)
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 3</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};
