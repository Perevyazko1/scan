import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchPage.module.scss"
import searchPicture from "../../../shared/assets/picture/search-picture.svg"
import piece from "../../../shared/assets/picture/piece.svg"
import folders from "../../../shared/assets/picture/folders.svg"
import {SearchFilter} from "../../../features/SearchFilter";


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
            <div className={cls.HeaderContainer}>
                <div className={cls.Header}>Найдите необходимые данные в пару кликов.</div>
                <div className={cls.Subtitle}>
                Задайте параметры поиска. Чем больше заполните, тем точнее поиск
            </div>
            </div>
            <img src={piece} className={cls.Piece}/>
            <img src={folders} className={cls.Folders}/>
            <SearchFilter/>
            <img src={searchPicture} className={cls.SearchPicture}/>
            {children}
        </div>
    );
});

export default SearchPage