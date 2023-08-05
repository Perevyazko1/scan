import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./FAQPage.module.scss"

interface FaqProps {
    className?: string
    children?: ReactNode
}


export const DetailsFaqPage = memo((props: FaqProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.FAQ, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});