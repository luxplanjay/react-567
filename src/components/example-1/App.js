import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

/**
 * Каждый стикер должен открываться и закрываться независимо от остальных
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 1</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};
