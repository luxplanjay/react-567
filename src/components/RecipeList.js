import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
