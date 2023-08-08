import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
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
                <Input/>
                <p>Пароль</p>
                <Input/>
                <Button className={cls.Button}>Войти</Button>
                <p className={cls.RestorePassword}>Восстановить пароль</p>
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