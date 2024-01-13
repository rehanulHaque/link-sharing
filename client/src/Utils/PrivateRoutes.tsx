import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let isAuthenticated = false;
  const data = localStorage.getItem('userData');

  if (data !== null) {
    const { logedIn } = JSON.parse(data);
    isAuthenticated = logedIn;
  }

  return (
      isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
  );
};

export default PrivateRoutes;
