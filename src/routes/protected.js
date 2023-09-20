import React from "react";
import {Navigate} from 'react-router-dom';
import Center from "../components/Center";
import {Rings} from "react-loader-spinner";

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
        return <Center>
            <Rings
                style={{alignItems:"center"}}
                height="80"
                width="80"
                color="#FF6D2B"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </Center>
    if (!user || !ch) {
        return <Navigate to={redirectPath} replace/>;
    }

    return children;
};

export default ProtectedRoute