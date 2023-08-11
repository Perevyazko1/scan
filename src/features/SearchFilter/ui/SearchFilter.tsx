import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchFilter.module.scss"
import {Input} from "../../../shared/ui/Input/Input";
import {Button} from "../../../shared/ui/Button/Button"

interface SearchFilterProps {
    className?: string
    children?: ReactNode
}


export const DetailsSearchFilter = memo((props: SearchFilterProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.SearchFilter, mods, [className])}
            {...otherProps}
        >
            <div className={cls.ContainerInput}>
                <p> Инн компании *</p>
                <Input/>
                <p>Тональность</p>
                <Input/>
                <p>Количество документов в выдаче *</p>
                <Input/>
                <p>Диапазон поиска *</p>
                <span>
                    <Input type={"date"} className={cls.DoubleInput}/>
                    <Input type={"date"} className={cls.DoubleInput}/>
                </span>
            </div>
            <div className={cls.ContainerCheckBox}>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Признак максимальной полноты
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Упоминания в бизнес-контексте
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Главная роль в публикации
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Публикации только с риск-факторами
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Включать технические новости рынков
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Включать анонсы и календари
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} type={"checkbox"}/>
                    Включать сводки новостей
                </div>
                <Button className={cls.Button}>Поиск</Button>
                <p className={cls.SubtitleButton}>* Обязательные к заполнению поля</p>
            </div>

            {children}
        </div>
    );
});