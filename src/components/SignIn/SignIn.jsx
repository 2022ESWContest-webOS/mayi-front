import AuthService from '../../service/auth';
import { firebaseApp } from '../../service/firebase';

const SignIn = () => {
  const handleGoogleSignIn = () => {
    try {
      const AuthService2 = new AuthService(firebaseApp);
      AuthService2.signIn('google'); // google login
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <button
        type="button"
        className="sign-social-btn google-login"
        onClick={handleGoogleSignIn}
      >
        Google Login
      </button>
    </section>
  );
};

export default SignIn;
