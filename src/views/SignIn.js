import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignIn from '../components/SignIn';
import { createToast } from '../components/Controllers/createToast';

const SignInPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [isAdminMode, setAdminMode] = useState(false);

  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onPwdChange = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  const onToggle = useCallback(() => {
    setAdminMode((prev) => !prev);
  }, [setAdminMode]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // id, pwd 입력 안했을 시,
      if (!id || !pwd) {
        createToast('Id와 Password를 입력해주세요');
        return;
      }

      // TODO: login 요청 후 처리 (id, pwd, isAdminMode)
      console.log(id, pwd, isAdminMode);

      // TODO: 관리자모드 로그인 성공 시
      if (isAdminMode) {
        navigate('/camera');
        return;
      }

      // TODO: 일반 모드 로그인 성공 시
      if (!isAdminMode) {
        // navigate('/')
        return;
      }

      // 로그인 실패 시
      createToast('로그인에 실패하였습니다.');
    },
    [id, pwd, isAdminMode]
  );

  return (
    <SignIn
      onIdChange={onIdChange}
      onPwdChange={onPwdChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
    />
  );
};

export default SignInPage;
