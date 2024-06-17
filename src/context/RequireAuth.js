import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 

function RequireAuth({ children }) {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/connexion');
        }
    }, [currentUser, navigate]);

    return currentUser ? children : null;
}

export default RequireAuth;
