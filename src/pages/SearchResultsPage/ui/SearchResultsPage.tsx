import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchResultsPage.module.scss"
import {Button} from "../../../shared/ui/Button/Button";
import pictureTarget from "../../../shared/assets/picture/target-picture.svg"

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
            className={classNames(cls.SearchResultsPage, mods, [className])}
            {...otherProps}
        >
            <div className={cls.ContainerHeader}>
                <div className={cls.Header}>Ищем. Скоро будут результаты</div>
                <div className={cls.Subtitle}>Поиск может занять некоторое время, просим сохранять терпение.</div>
            </div>
            <img src={pictureTarget} className={cls.Picture}/>
            <div className={cls.ContainerResult}>
               <div className={cls.HeaderResult}>Общая сводка</div>
                <div className={cls.SubtitleResult}>Найдено 4 221 вариантов</div>
                <div className={cls.Period}></div>
            </div>
            <div className={cls.ContainerListDocument}>
                <div className={cls.HeaderResult}>Список документов</div>
                <div className={cls.ContainerDocument}>
                    <div className={cls.UnitDocument}>
                </div>

            </div>
                <Button className={cls.Button}>Показать больше</Button>
            </div>

            {children}
        </div>
    );
});
export default SearchResultsPage