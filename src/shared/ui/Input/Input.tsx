import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    children?: ReactNode
}


export const Input = memo((props: InputProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <input
            className={classNames(cls.Input, mods, [className])}
            {...otherProps}
        >
            {children}
        </input>
    );
});