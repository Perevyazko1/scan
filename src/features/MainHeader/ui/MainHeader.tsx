import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainHeader.module.scss"

interface MainHeaderProps {
    className?: string
    children?: ReactNode
}


export const DetailMainHeader = memo((props: MainHeaderProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.MainHeader, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});