import { Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from '@/components/pages';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
