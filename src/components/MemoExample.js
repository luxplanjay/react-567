import { useState, memo } from 'react';

const ChildComponent = memo(() => {
  console.log('Child re-render');
  return <div>ChildComponent</div>;
});

export const MemoExample = () => {
  const [value, setValue] = useState(0);
  console.log('Parent re-render');

  return (
    <div>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>
        Update parent state value: {value}
      </button>
      <ChildComponent />
    </div>
  );
};
