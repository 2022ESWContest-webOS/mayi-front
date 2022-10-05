import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import { HashRouter, Route, Routes } from 'react-router-dom';

import SignInPage from '../views/SignIn';
import CameraListPage from '../views/CameraList';
import EventListPage from '../views/EventList';

import './attachErrorHandler';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/camera" element={<CameraListPage />} />
        <Route path="/event" element={<EventListPage />} />
      </Routes>
    </HashRouter>
  );
};

export default ThemeDecorator(App);
