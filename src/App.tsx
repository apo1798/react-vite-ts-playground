import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import StyledComponent from '@/components/StyledComponent';
import AxiosHooks from '@/components/axios-hooks/AxiosHooks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <StyledComponent /> */}
      <AxiosHooks />
    </div>
  );
}

export default App;
