import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Container from './components/Container';
import Header from './components/Header';

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <main className="mt-14 md:mt-18 px-4 md:px-8 py-10 w-full">
        <Routes>
          <Route path="/*" element={<Container />} />
        </Routes>
      </main>{" "}
    </div>
  );
}

export default App