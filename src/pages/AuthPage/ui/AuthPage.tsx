import React, {useCallback} from 'react';
import classNames from "classnames";
import cls from './authPage.module.scss'
import {useSelector} from "~entities/store";
import {ViewerRegister} from "~widgets/viewerRegister";
import {ViewerLogin} from "~widgets/viewerLogin";
import {ViewAuthMode} from "~entities/viewer";
import {ViewerAuthWelcome} from "~widgets/viewerAuthWelcome";

export const AuthPage = () => {
    const viewMode = useSelector((state) => state.viewer.viewMode);
    const content = useCallback(() => {
        switch (viewMode) {
            case ViewAuthMode.Register:
                return <ViewerRegister/>;
                break;
            case ViewAuthMode.Login:
                return <ViewerLogin/>;
                break;
            default:
                return <ViewerAuthWelcome/>;
        }
    }, [viewMode])
    return (
        <div className={classNames([{[cls.wrapper]: true}])}>
            {content()}
        </div>
    );
}

