import { useNavigate } from 'react-router-dom';
import Switch from '@enact/sandstone/Switch';

import './PageLayout.css';
import logo from '../../../resources/images/logo.svg';

const PageLayout = ({ children, isAdminMode }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.close();
    }
  };

  const onToggle = () => {
    if (isAdminMode) navigate('/'); // TODO: CCTV 모드 페이지
    if (!isAdminMode) navigate('/camera');
  };

  return (
    <div className="layout">
      <div className="nav">
        <button className="nav-item" onClick={() => navigate('/camera')}>
          카메라 리스트
        </button>
        <button className="nav-item" onClick={() => navigate('/event')}>
          일지
        </button>
        <div className="admin">
          <span className="admin-text">관리자 모드</span>
          <Switch onToggle={onToggle} selected={isAdminMode} />
        </div>
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
