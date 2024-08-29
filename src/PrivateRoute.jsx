// PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

// Status autentikasi (ubah sesuai dengan logika autentikasi sebenarnya)
const isAuthenticated = true;

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
