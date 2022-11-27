import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import recipes from '../recipes.json';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
