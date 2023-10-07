import React, {FunctionComponent, Suspense} from 'react'
import {Outlet} from "react-router-dom";
import '~shared/global/globalStyles.scss';
import '~shared/global/resetStyles.scss';
export const App: FunctionComponent = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    )
}

