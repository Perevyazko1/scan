import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import axios from 'axios';
import cls from "./MainHeader.module.scss"
import pictureHeader from "../../../shared/assets/picture/picture-header.svg"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import {Link} from "react-router-dom";

interface MainHeaderProps {
    className?: string
    children?: ReactNode
}


export const DetailsMainHeader = memo((props: MainHeaderProps) => {

    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <ContentWrapper>
            <div
                className={classNames(cls.MainHeader, mods, [className])}
                {...otherProps}
            >
                <div className={cls.LeftBlock}>
                    <div className={cls.BigText}>
                        сервис по поиску публикаций о компании по его ИНН
                    </div>
                    <div className={cls.SmallText}>
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </div>
                    <Link to={"http://localhost:3000/search"}>
                        <Button className={cls.Button}>Запросить данные</Button>
                    </Link>

                </div>
                    <img className={cls.Picture} src={pictureHeader}/>

                {children}
            </div>
        </ContentWrapper>
    );
});
