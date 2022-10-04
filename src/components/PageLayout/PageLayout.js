import { useNavigate } from 'react-router-dom';

import './PageLayout.css';
import logo from '../../../resources/images/logo.svg';

const PageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="nav">
        <button className="nav-item" onClick={() => navigate('/camera')}>
          카메라 리스트
        </button>
        <button className="nav-item" onClick={() => navigate('/event')}>
          일지
        </button>
      </div>
      <div className="content">
        <div className="content-header">
          <img src={logo} alt="" />
        </div>
        <div className="content-body">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
