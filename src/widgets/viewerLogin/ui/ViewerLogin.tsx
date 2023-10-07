import React, {useState} from 'react';
import cls from './viewerLogin.module.scss';
import {Button, Checkbox, Form, Input} from "antd";
import classNames from "classnames";
import {signInWithEmail, signInWithGoogle} from "../model";
import {SignInMode} from "../model/types";
import {useNavigate} from "react-router-dom";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const ViewerLoginWidget = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const signIn = async (type: SignInMode) => {
        if (type === SignInMode.Google) {
            signInWithGoogle()
                .then(() => {
                    navigate('/main');
                })
        } else if (type === SignInMode.Email) {
            signInWithEmail({email, password}).then(() => {
                navigate('/main');
            })
        }
    }

    return (
        <div>
            <Form
                name="basic"
                initialValues={{remember: true}}
                onFinish={() => signIn(SignInMode.Email)}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Логин"
                    name="username"
                    className={classNames(cls.input)}
                    rules={[{required: true, message: 'E-mail является обязательным!'}]}
                >
                    <Input onChange={(e) => setEmail(e.target.value)} type={'email'}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    className={classNames(cls.input)}
                    rules={[{required: true, message: 'Пароль является обязательным!'}]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Button onClick={() => signIn(SignInMode.Google)} className={classNames(cls.btn)} type={"dashed"}>
                        Войти с google
                    </Button>
                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        style={{margin: '10px'}}
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                </div>

                <div className={classNames(cls.btns)}>
                    <Form.Item style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button htmlType="submit">
                            Забыли пароль?
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export const ViewerLogin = React.memo(ViewerLoginWidget);