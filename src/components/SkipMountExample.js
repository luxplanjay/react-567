import { useEffect, useRef, useState } from 'react';

// 1. ❌ Использование рефа для отмены эффекта при монтировании
// 2. ❌ StrictMode - ответный удар
// 3. ✅ Проверка значений для отмены эффекта при монтировании
// 4. ✅ Отмена HTTP-запросов для отмены эффекта при монтировании

export const SkipMountExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log(`Выполняем код после обновления компонента: ${searchQuery}`);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    console.log(`Fetchind data with query: ${searchQuery}`);
  }, [searchQuery]);

  // useEffect(() => {
  //   console.log(`Запускается HTTP-запрос`);

  //   return () => {
  //     console.log('Отменяем HTTP-запрос через AbortController');
  //   };
  // }, []);

  return (
    <div>
      <h1>SkipMountExample</h1>
      <button onClick={() => setSearchQuery('Mango')}>Populate query</button>
    </div>
  );
};
