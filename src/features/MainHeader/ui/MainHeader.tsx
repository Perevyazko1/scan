import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainHeader.module.scss"
import pictureHeader from "../../../shared/assets/picture/picture-header.svg"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

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
                    {/*<Button className={cls.Button}>Запросить данные</Button>*/}
                </div>
                <div className={cls.Picture}>
                    <img  src={pictureHeader}/>
                </div>

                {children}
            </div>
        </ContentWrapper>
    );
});
