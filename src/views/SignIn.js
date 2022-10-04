import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignIn from '../components/SignIn';
import { createToast } from '../components/Controllers/createToast';

const SignInPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onPwdChange = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // id, pwd 입력 안했을 시,
      if (!id || !pwd) {
        createToast('Id와 Password를 입력해주세요');
        return;
      }

      // login 요청 후 처리
      // createToast(`ID: ${id}, PWD: ${pwd}`);
      navigate('/video');
    },
    [id, pwd]
  );

  return (
    <SignIn
      onIdChange={onIdChange}
      onPwdChange={onPwdChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignInPage;
