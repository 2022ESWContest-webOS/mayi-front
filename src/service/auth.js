import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

class AuthService {
  constructor(firebaseApp) {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'google':
        return this.googleProvider;
      default:
        throw new Error('not supported provider');
    }
  }

  signIn(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  signOut() {
    this.firebaseAuth.signOut();
  }
}

export default AuthService;
