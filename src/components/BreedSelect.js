import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';

const ERROR_MESSAGE =
  'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        const breeds = await fetchBreeds();
        setBreeds(breeds);
      } catch {
        setError(ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }

    getBreeds();
  }, []);

  const handleChange = option => {
    onSelect(option.value);
  };

  const options = useMemo(() => {
    return breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  }, [breeds]);

  return (
    <div>
      <Select options={options} onChange={handleChange} isLoading={isLoading} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
