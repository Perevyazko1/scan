import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import axios from 'axios';
import cls from "./AuthorizationPage.module.scss"
import {Button} from "../../../shared/ui/Button/Button";
import {Input} from "../../../shared/ui/Input/Input";
import facebook from "../../../shared/assets/icons/facebook.svg"
import google from "../../../shared/assets/icons/google.svg"
import yandex from "../../../shared/assets/icons/яндекс.svg"
import imageAuth from "../../../shared/assets/picture/image-auth.svg"

interface AuthorizatePageProps {
    className?: string
    children?: ReactNode
}


const AuthorizationPage = memo((props: AuthorizatePageProps) => {

    const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
        const dataUser = {
          login: login,
          password: password
        };
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };

        await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', dataUser, { headers })
          .then(response => {
            console.log(response.data);
            const accessToken = response.data.accessToken
            localStorage.setItem('accessToken', accessToken);
          })
          .catch(error => {
            console.error(error);
          });
        ;


    } catch (error) {
    }
  };

    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.AuthorizatePage, mods, [className])}
            {...otherProps}
        >
            <div className={cls.Header}>
                Для оформления подписки
                на тариф, необходимо авторизоваться.
            </div>
            <div className={cls.ContainerForm}>
                <span className={cls.SignIn}>Войти</span>
                <span className={cls.SignUp}>Зарегистрироваться</span>
                <p>Логин или номер телефона:</p>
                <Input className={cls.Input} onChange={(event) => setLogin(event.target.value)} />
                <p>Пароль</p>
                <Input className={cls.Input} type="password" onChange={(event) => setPassword(event.target.value)} />
                <div>
                  <Button className={cls.Button} onClick={onLogin}>Войти</Button>
                </div>                <p className={cls.RestorePassword}>Восстановить пароль</p>
                <p>Войти через:</p>
                <span>
                    <img src={google} className={cls.IconBrand}/>
                    <img src={facebook} className={cls.IconBrand}/>
                    <img src={yandex} className={cls.IconBrand}/>
                </span>
            </div>
            <img src={imageAuth} className={cls.imageAuth}/>


            {children}
        </div>
    );
});
export default AuthorizationPage