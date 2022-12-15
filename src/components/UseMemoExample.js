import { useState, useMemo } from 'react';

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  console.log('Вычисляем value');
  const value = a + b;

  const memoizedValue = useMemo(() => {
    console.log('Вычисляем memoizedValue');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>update a: {a}</button>
      <button onClick={() => setB(b + 1)}>update b: {b}</button>
      <button onClick={() => setC(c + 1)}>update c: {c}</button>
      <p>value: {value}</p>
      <p>memoizedValue: {memoizedValue}</p>
    </div>
  );
};
