import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import {Link, useLocation} from "react-router-dom";
import {routeConfig} from "../../../app/providers/router/config/routeConfig";
import {AppRoutes, routeNames} from "../../../shared/consts/routes/routes";

import logoDesktop from "../../../shared/assets/icons/logo-desktop.svg"
import logoMobile from "../../../shared/assets/icons/logo.svg"
import menu from "../../../shared/assets/icons/menu-navbar.svg"
import cross from "../../../shared/assets/icons/cross-mobile.svg"

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
        const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


    const mods: Mods = {
        [cls.Navbar]: !isNavbarOpen,
        [cls.NavbarOpen]: isNavbarOpen,
    };

        const location = useLocation();
    const combinedClassName = classNames("", mods, [className]);
    const linkComponent =
        <div className={cls.ButtonGroup}>
            {Object.entries(routeConfig)
                .filter(([route, props]) => !props.authOnly)
                .map(([rout, props]) => (

                <div key={rout}>
                        <Link to={props.path || '/'}>
                            <a className={cls.ButtonLink}>
                                {routeNames[rout as AppRoutes]}
                            </a>
                        </Link>
                </div>

            ))
            }

        </div>


    return (
        <ContentWrapper>
            <div
                className={classNames("", mods, [className])}
                {...otherProps}
            >
                <img src={logoDesktop} className={cls.LogoDesktop}/>
                <img src={logoMobile} className={cls.LogoMobile}/>
                {linkComponent}

                <div className={cls.SignGroup}>
                    <p>Зарегистрироваться</p>
                    <Button className={cls.SignButton}>Войти</Button>
                </div>
                <img src={cross} className={cls.Cross} onClick={handleToggleNavbar}/>
                <img src={menu} className={cls.Menu} onClick={handleToggleNavbar}/>
                {children}
            </div>
        </ContentWrapper>
    );
});