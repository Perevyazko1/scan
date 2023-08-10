import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchFilter.module.scss"

interface SearchFilterProps {
    className?: string
    children?: ReactNode
}


export const DetailsSearchFilter = memo((props: SearchFilterProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.SearchFilter, mods, [className])}
            {...otherProps}
        >

            {children}
        </div>
    );
});