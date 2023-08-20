import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss"

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    className?: string
    children?: ReactNode
    empty?: boolean
}


export const Select = memo((props: SelectProps) => {
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
        <select
            className={classNames(cls.Select, mods, [className])}
            {...otherProps}
        >
            {children}
        </select>
    );
});