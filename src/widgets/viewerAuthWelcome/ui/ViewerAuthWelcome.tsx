import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import cls from './viewerAuthWelcome.module.scss';
import classNames from "classnames";
import {Button} from "antd";
import {useDispatch} from "~entities/store";
import {setViewMode, ViewAuthMode} from "~entities/viewer";

const ViewerAuthWelcomeWidget: FunctionComponent = () => {
    const [continueBtnVisible, setContinueBtnVisible] = useState<Boolean>(false);
    const textRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const textContent = textRef.current
        if (textContent) {
            const text = 'Добро пожаловать в наше приложение для изучения ПДД!'
            const letters = text.split('');
            const delay = 10;
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    const letterElement = document.createElement('span');
                    letterElement.textContent = letter;
                    letterElement.className = 'viewer-auth-welcome-letter';
                    textRef.current?.appendChild(letterElement);
                    index === letters.length - 1 && setContinueBtnVisible(true)
                }, index * delay);
            });
        }
    }, []);
    const swithAuthViewModeHandler = (viewMode: ViewAuthMode) => {
        dispatch(setViewMode(viewMode))
    }
    return (
        <div className={classNames(cls.container)}>
            <div ref={textRef} className={classNames([{[cls.title]: true}])}>
            </div>
            {
                   <div className={classNames({[cls.continueBtns]: continueBtnVisible}, {[cls.continueBtnsHide]: !continueBtnVisible})}>
                       <Button onClick={() => swithAuthViewModeHandler(ViewAuthMode.Login)} type={'primary'} className={classNames(cls.btn)}>
                           Войти
                       </Button>
                       <Button onClick={() => swithAuthViewModeHandler(ViewAuthMode.Register)} className={classNames(cls.btn)}>
                           Зарегистрироваться
                       </Button>
                   </div>
            }
        </div>
    );
};

export const ViewerAuthWelcome = React.memo(ViewerAuthWelcomeWidget);
