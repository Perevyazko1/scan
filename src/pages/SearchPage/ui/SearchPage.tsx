import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchPage.module.scss"

interface SearchPageAsyncProps {
    className?: string
    children?: ReactNode
}


 const SearchPage = memo((props: SearchPageAsyncProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.SearchPage, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

export default SearchPage