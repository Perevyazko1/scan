import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./TarifsPage.module.scss"

interface TarifsPageProps {
    className?: string
    children?: ReactNode
}


 const TarifsPage = memo((props: TarifsPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.TarifsPage, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
export default TarifsPage