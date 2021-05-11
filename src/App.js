import React, { useEffect } from 'react'

import Main from './pages/Main'

function App() {
  useEffect(() => {
    document.title = 'Weather'
  }, [])
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
