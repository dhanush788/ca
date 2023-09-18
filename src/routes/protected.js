import React from "react";
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({
                            user,
                            loading,
                            redirectPath = '/',
                            children,
                            check
                        }) => {
    const [ch, updateCheck] = React.useState(!check)

    React.useEffect(() => {
        if (typeof check === "function" && !!user)
            Promise.resolve(check(user)).then((val) => {
                updateCheck(!!val)
            });
    }, [user])

    if (loading)
        return <>loading...</>
    if (!user || !ch) {
        return <Navigate to={redirectPath} replace/>;
    }

    return children;
};

export default ProtectedRoute