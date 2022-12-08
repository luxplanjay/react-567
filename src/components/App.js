import { fetchDogByBreed } from 'api';
import { Component } from 'react';
import { BreedSelect } from './BreedSelect';
import { Dog } from './Dog';
import { Layout } from './Layout';
import { DogSkeleton } from './DogSkeleton';

export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  };

  selectBreed = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({
        error:
          'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { error, dog, isLoading } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.selectBreed} />
        {dog && !isLoading && <Dog dog={dog} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <DogSkeleton />}
      </Layout>
    );
  }
}
