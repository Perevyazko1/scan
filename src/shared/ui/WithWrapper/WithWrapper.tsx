import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./WithWrapper.module.scss"

interface PageWrapperProps {
    className?: string
    children?: ReactNode
}


export const WithWrapper = memo((props: PageWrapperProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.WithWrapper, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});