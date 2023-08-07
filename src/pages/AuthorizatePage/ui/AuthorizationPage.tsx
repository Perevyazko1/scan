import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./AuthorizationPage.module.scss"

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
            {children}
        </div>
    );
});
export default AuthorizationPage