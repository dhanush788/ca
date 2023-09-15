import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
                            user,
                            loading,
                            redirectPath = '/',
                            children,
                        }) => {
    if (loading)
        return <>loading...</>
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute