import React from "react";
import {Navigate} from 'react-router-dom';
import Center from "../components/Center";
import {Rings} from "react-loader-spinner";

const ProtectedRoute = ({
                            user,
                            loading,
                            redirectPath = '/',
                            children,
                            check,
                            checkRedirect,
                            invert = false
                        }) => {
    if(!checkRedirect)
        checkRedirect = redirectPath;

    console.log(checkRedirect)
    const [ch, updateCheck] = React.useState(!check)

    React.useEffect(() => {
        if (typeof check === "function" && !!user)
            Promise.resolve(check(user)).then((val) => {
                updateCheck(!!val)
                console.log("val", val)
            });

    }, [user])

    console.log(loading)

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

    if (!user) {
            return <Navigate to={redirectPath} replace/>;
    }

    console.log(checkRedirect)
    if(!ch)
        return <Navigate to={checkRedirect} replace/>;

    return children;
};

export default ProtectedRoute

