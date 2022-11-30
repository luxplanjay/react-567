import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

/**
 * Может быть открыт только один стикер, остальные закрыты.
 * То есть при открытии нового, закрывается тот, что был открыт.
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 2</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};
