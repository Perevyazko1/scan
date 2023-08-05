import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";


interface NavbarProps {
    className?: string
    children?: ReactNode
}


export const DetailsNavbar = memo((props: NavbarProps) => {
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
                className={classNames(cls.Navbar, mods, [className])}
                {...otherProps}
            >
                {children}
            </div>
        </ContentWrapper>
    );
});