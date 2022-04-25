import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from 'src/components/pages/main-page/main-page/main-page';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
