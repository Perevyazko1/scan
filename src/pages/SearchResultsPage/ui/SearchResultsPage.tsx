import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchResultsPage.module.scss"

interface SearchResultsPageProps {
    className?: string
    children?: ReactNode
}


 const SearchResultsPage = memo((props: SearchResultsPageProps) => {
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
export default SearchResultsPage