import { auth } from '../firebase';
import { firebase } from '../Firebase/Firebase';

export const signIn = () => {
  return async (dispatch) => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      dispatch({
        type: 'SIGN_IN',
        payload: result.user,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch({
        type: 'SIGN_OUT',
      });
    } catch (error) {
      console.error(error);
    }
  };
};
