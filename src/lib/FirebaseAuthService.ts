import auth, { CallbackOrObserver, FirebaseAuthTypes } from '@react-native-firebase/auth';

class AuthService {
  static signOut: any;
  static signUp(email: string, password: string) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

  static login(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password);
  }

  static logout() {
    return auth().signOut();
  }

  static resetPassword(email: string) {
    return auth().sendPasswordResetEmail(email);
  }

  static getCurrentUser() {
    return auth().currentUser;
  }

  static onAuthStateChanged(callback: CallbackOrObserver<FirebaseAuthTypes.AuthListenerCallback>) {
    return auth().onAuthStateChanged(callback);
  }
}

export default AuthService;
