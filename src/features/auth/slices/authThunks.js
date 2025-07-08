import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { authenticateUser } from '../services/authService';

export const loginUser = (credentianls) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const user = await authenticateUser(credentianls);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message || 'Error al iniciar sesión'));
  }
};
