import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchFilter.module.scss"
import {Input} from "../../../shared/ui/Input/Input";
import {Button} from "../../../shared/ui/Button/Button"
import {useAppDispatch} from "../../../shared/lib/hook/ReduxHooks/redux";
import {postApi} from "../../../app/providers/services/RtkService";
import {Token} from "../../../app/providers/StoreProvider/models/Token";
import {Patch} from "../../../app/providers/StoreProvider/models/Patch";

interface SearchFilterProps {
    className?: string
    children?: ReactNode
}


export const DetailsSearchFilter = memo((props: SearchFilterProps) => {
    const dispach = useAppDispatch()
    // const [objectSearch,{data,isLoading,error}] =postApi.useObjectSearchMutation()
    const [documents,{data,isLoading,error}] = postApi.useDocumentsMutation()

    const handleSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
            const patch =`/objectsearch`
            const patch2 =`/objectsearch/histograms`
        const searchRequest: Patch = {
        patch: '/objectsearch'
}

        const searchRequest2: Patch = {
        patch: '/objectsearch/histograms'
}

            // await objectSearch(searchRequest)
            // await objectSearch(searchRequest2)
        const ids = "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="
            await documents(ids)





      };
useEffect(()=>{
        console.log(`search data${JSON.stringify(JSON.stringify(data))}`)
        console.log(`search isLoading${JSON.stringify(isLoading)}`)
        console.log(`search error${JSON.stringify(error)}`)
},[isLoading])

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
                <Button className={cls.Button} onClick={handleSearch}>Поиск</Button>
                <p className={cls.SubtitleButton}>* Обязательные к заполнению поля</p>
            </div>

            {children}
        </div>
    );
});