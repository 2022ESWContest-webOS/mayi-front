import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import { HashRouter, Redirect, Route, Routes } from 'react-router-dom';

import CameraList from '../views/CameraList';
import SignIn from '../views/SignIn';

import './attachErrorHandler';
import './App.css';

const App = () => {
  // app
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/video" element={<CameraList />} />
      </Routes>
    </HashRouter>
  );
};

export default ThemeDecorator(App);
