import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
