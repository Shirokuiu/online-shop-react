import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from 'src/components/pages/main-page/main-page';

function App() {
  return (
    <main>
      <section className="onlineshop-app">
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default App;
