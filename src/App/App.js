import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import { HashRouter, Route, Routes } from 'react-router-dom';

import SignInPage from '../views/SignIn';
import CameraListPage from '../views/CameraList';

import './attachErrorHandler';
import './App.css';

const App = () => {
  // app
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/camera-list" element={<CameraListPage />} />
      </Routes>
    </HashRouter>
  );
};

export default ThemeDecorator(App);
