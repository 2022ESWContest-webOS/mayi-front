import './SignIn.css';
import logo from '../../../resources/images/logo.svg';
import Switch from '@enact/sandstone/Switch';

const SignIn = ({ onIdChange, onPwdChange, onSubmit, onToggle }) => {
  return (
    <div className="login-wrapper">
      <div className="login-area">
        <div className="login-area-header">
          <img src={logo} alt="" />
          <div className="admin">
            <span className="admin-text">관리자 모드</span>
            <Switch onToggle={onToggle} />
          </div>
        </div>
        <div className="login-area-body">
          <span className="text">우리 아이들을 안전사고</span>
          <span className="text">위험행동으로부터 지켜주세요!</span>
          <form className="login-form" onSubmit={onSubmit}>
            <input
              type="text"
              className="login-input"
              placeholder="Id"
              onChange={onIdChange}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              onChange={onPwdChange}
            />
            <button className="login-button" type="submit">
              로그인 하기
            </button>
          </form>
        </div>
      </div>
      <div className="login-image" />
    </div>
  );
};

export default SignIn;
