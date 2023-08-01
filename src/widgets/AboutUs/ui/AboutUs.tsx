import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./AboutUs.module.scss"

interface AboutUsProps {
    className?: string
    children?: ReactNode
}


export const DetailAboutUs = memo((props: AboutUsProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.AboutUs, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});