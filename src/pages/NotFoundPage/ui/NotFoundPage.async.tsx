import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
    className?: string
    children?: ReactNode
}


export const DetailsNotFoundComponent = memo((props: NotFoundPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames('', mods, [className])}
            {...otherProps}
        >Страница не найдена
            {children}
        </div>
    );
});
