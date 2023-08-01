import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Tarifs.module.scss"

interface TarifsProps {
    className?: string
    children?: ReactNode
}


export const DetailTarifs = memo((props: TarifsProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.Tarifs, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});