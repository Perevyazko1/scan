import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./BottomContact.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import logo from "../../../shared/assets/icons/logo.svg"

interface BottomContactProps {
    className?: string
    children?: ReactNode
}


export const DetailBottomContact = memo((props: BottomContactProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <ContentWrapper>
            <footer
                className={classNames(cls.BottomContact, mods, [className])}
                {...otherProps}
            >
                <img src={logo} className={cls.Logo}/>
                <div className={cls.Contact}>
                    г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru
                </div>
                <div className={cls.Copyright}>
                    Copyright. 2022
                </div>
                {children}
            </footer>
        </ContentWrapper>
    );
});