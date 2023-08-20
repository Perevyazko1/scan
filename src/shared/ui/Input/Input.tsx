import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    children?: ReactNode
    empty?: boolean
}


export const Input = memo((props: InputProps) => {
    const {
        className,
        children,
        empty=false,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.empty]:empty,

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