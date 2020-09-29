import React from 'react';
import { LoginUser, getUserByToken } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  async function getUser(token) {
    const { url, options } = getUserByToken(token);
    // const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }
  async function userLogin(email, password) {
    // async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      // const { url, options } = TOKEN_POST({ username, password });
      const { url, options } = LoginUser({ email, password });
      // const { url, options } = getBalance({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
          navigate('/');
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout, navigate]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        userLogout,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
