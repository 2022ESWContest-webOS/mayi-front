import './SignIn.css';
import logo from '../../../resources/images/logo.svg';
import Switch from '@enact/sandstone/Switch';

const SignIn = () => {
  return (
    <div className="login-wrapper">
      <div className="login-area">
        <div className="login-area-header">
          <img src={logo} alt="" />
          <div className="admin">
            <span className="admin-text">관리자 모드</span>
            <Switch />
          </div>
        </div>
        <div className="login-area-body">
          <span className="text">우리 아이들을 안전사고</span>
          <span className="text">위험행동으로부터 지켜주세요!</span>
          <form className="login-form">
            <input type="text" className="login-input" placeholder="ID" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <button className="login-button">로그인 하기</button>
          </form>
        </div>
      </div>
      <div className="login-image" />
    </div>
  );
};

export default SignIn;
