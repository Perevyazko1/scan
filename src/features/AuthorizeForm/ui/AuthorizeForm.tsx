import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface AuthorizeFormProps {
    className?: string
    children?: ReactNode
}


export const DetailsAuthorizeForm = memo((props: AuthorizeFormProps) => {
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
        >
            {children}
        </div>
    );
});