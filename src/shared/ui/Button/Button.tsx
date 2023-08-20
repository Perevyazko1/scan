import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    children?: ReactNode
    outline?: boolean
}


export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        outline = false,
        ...otherProps
    } = props
    
    const mods: Mods = {
        [cls.outline]: outline,
    };
    
    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});