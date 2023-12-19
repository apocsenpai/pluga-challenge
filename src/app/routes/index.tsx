import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '@/pages/home';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
