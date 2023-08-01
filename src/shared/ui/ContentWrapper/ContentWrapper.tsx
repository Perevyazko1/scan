import {memo, ReactNode, HTMLAttributes} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./ContentWrapper.module.scss"

interface ContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}


export const ContentWrapper = memo((props: ContentWrapperProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {};

    return (
        <div
            className={classNames(cls.ContentWrapper, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});