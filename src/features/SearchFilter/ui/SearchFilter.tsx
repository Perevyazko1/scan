import {memo, ReactNode, useEffect, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./SearchFilter.module.scss"
import {Input} from "../../../shared/ui/Input/Input";
import {Select} from "../../../shared/ui/Select/Select";
import {Button} from "../../../shared/ui/Button/Button"
import {useAppDispatch} from "../../../shared/lib/hook/ReduxHooks/redux";
import {postApi} from "../../../app/providers/services/RtkService";
import {Patch} from "../../../app/providers/StoreProvider/models/Patch";

interface SearchFilterProps {
    className?: string
    children?: ReactNode
}


export const DetailsSearchFilter = memo((props: SearchFilterProps) => {
    const [inn, setInn] = useState(0)
    const [limit, setLimit] = useState(0)
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [isEmpty,setIsEmpty] = useState(false)
    const [tonality, setTonality] = useState("any")
    const [maxFullness, setMaxFullness] = useState(false)
    const [inBusinessNews, setInBusinessNews] = useState(false)
    const [onlyMainRole, setOnlyMainRole] = useState(false)
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false)


    useEffect(()=>{
                if(inn && limit && startDate && endDate){
            setIsEmpty(true)

        }else {
               setIsEmpty(false)
                }
    },[inn,limit, startDate, endDate])

    const dispach = useAppDispatch()
    const [objectSearch,{data,isLoading,error}] =postApi.useObjectSearchMutation()
    // const [documents,{data,isLoading,error}] = postApi.useDocumentsMutation()

    const handleSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const searchObjectsearch: Patch = {
        patch: '/objectsearch',
        inn: inn,
        limit: limit,
        startDate: startDate,
        endDate: endDate,
        tonality: tonality,
        maxFullness: maxFullness,
        inBusinessNews:inBusinessNews,
        onlyMainRole:onlyMainRole,
        onlyWithRiskFactors,
}
        const searchHistograms: Patch = {
        patch: '/objectsearch/histograms',
        inn: inn,
        limit: limit,
        startDate:startDate,
        endDate:endDate,
        tonality: tonality,
        maxFullness: maxFullness,
        inBusinessNews:inBusinessNews,
        onlyMainRole:onlyMainRole,
        onlyWithRiskFactors,
}

        await objectSearch(searchObjectsearch)
        await objectSearch(searchHistograms)





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
                <Input empty={!inn} type={"number"} onChange={(event) => setInn(Number(event.target.value))}/>
                <p>Тональность</p>
                <Select onChange={(event) => setTonality(event.target.value)}>
                    <option value={"any"}>Не проверяется</option>
                    <option value={"negative"}>Негативная</option>
                    <option value={"positive"}>Позитивная</option>
                </Select>
                <p>Количество документов в выдаче *</p>
                <Input empty={!limit} onChange={(event) => setLimit(Number(event.target.value))} />
                <p>Диапазон поиска *</p>
                <span>
                    <Input type={"date"} empty={!startDate} className={cls.DoubleInput} onChange={(event) => setStartDate(event.target.value)} />
                    <Input type={"date"} empty={!endDate} className={cls.DoubleInput} onChange={(event) => setEndDate(event.target.value)} />
                </span>
            </div>
            <div className={cls.ContainerCheckBox}>
                <div className={cls.UnitCheckbox}>
                    <Input onChange={(event) => setMaxFullness(event.target.checked)} className={cls.InputCheckbox} type={"checkbox"}/>
                    Признак максимальной полноты
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} onChange={(event) => setInBusinessNews(event.target.checked)} type={"checkbox"}/>
                    Упоминания в бизнес-контексте
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} onChange={(event)=> setOnlyMainRole(event.target.checked)} type={"checkbox"}/>
                    Главная роль в публикации
                </div>
                <div className={cls.UnitCheckbox}>
                    <Input className={cls.InputCheckbox} onChange={(event)=> setOnlyWithRiskFactors(event.target.checked)} type={"checkbox"}/>
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
                <Button className={cls.Button} disabled={!inn} outline={!isEmpty} onClick={handleSearch}>Поиск</Button>
                <p className={cls.SubtitleButton}>* Обязательные к заполнению поля</p>
            </div>

            {children}
        </div>
    );
});