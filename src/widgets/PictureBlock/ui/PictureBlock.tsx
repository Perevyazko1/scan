import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./PictureBlock.module.scss"

interface PictureBlockProps {
    className?: string
    children?: ReactNode
}


export const DetailPictureBlock = memo((props: PictureBlockProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.PictureBlock, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});