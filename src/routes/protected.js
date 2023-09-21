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
                            invert = false,
                            print = ""
                        }) => {
    if (!checkRedirect)
        checkRedirect = redirectPath;

    const [ch, updateCheck] = React.useState(!check)
    const [chLoading, updateChLoading] = React.useState(!!check)

    console.log(print, !!user, ch, loading, chLoading)

    React.useEffect(() => {
        if (typeof check === "function" && !!user)
            Promise.resolve(check(user)).then((val) => {
                updateCheck(!!val)
                updateChLoading(false)
            });

    }, [user])


    if (loading || (chLoading && user))
        return <Center>
            <Rings
                style={{alignItems: "center"}}
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


    if(invert){
        if(user)
            return <Navigate to={redirectPath} replace/>;
        else
            return children;
    }

    if (!user) {
        return <Navigate to={redirectPath} replace/>;
    }

    if (!!check && !ch) {
        return <Navigate to={checkRedirect} replace/>;
    }

    return children;
};

export default ProtectedRoute

