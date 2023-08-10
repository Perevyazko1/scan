import {memo, ReactNode, useState, useEffect} from 'react';
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
import axios from "axios";

interface NavbarProps {
    className?: string
    children?: ReactNode
}


export const DetailsNavbar = memo((props: NavbarProps) => {

        const accessToken = localStorage.getItem('accessToken');
        const [usedCompanyCount, setUsedCompanyCount] = useState('0');
        const [companyLimit, setCompanyLimit] = useState('');
        const [isauthorized, setAuthorized] =useState<string>("")
        const localStorageСlear = () => {
          localStorage.clear()
        }

    useEffect(() => {
        const storedData = localStorage.getItem('accessToken');
        setAuthorized(storedData || '')
    },[])




     axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
          setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount)
          setCompanyLimit(response.data.eventFiltersInfo.companyLimit)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });


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
                    {isauthorized? (<div></div>):(<p>Зарегистрироваться</p>)}
                    {isauthorized? (
                    <div className={cls.Limits}>
                        <div className={cls.RowCompanyLimit}>
                            Использовано компаний : {usedCompanyCount}
                        </div>
                        <div className={cls.RowCompanyLimit}>
                            Лимит по компаниям :
                            <span className={cls.CompanyLimit}>{companyLimit}</span>
                        </div>
                    </div>
                    ):(<div></div>)}
                        {isauthorized? (<Button className={cls.SignButton} onClick={localStorageСlear}>Выйти</Button>):
                            (
                        <Link to={"http://localhost:3000/authorize"}>
                                <Button className={cls.SignButton} >Войти</Button>
                        </Link>

                            )}
                </div>
                <img src={cross} className={cls.Cross} onClick={handleToggleNavbar}/>
                <img src={menu} className={cls.Menu} onClick={handleToggleNavbar}/>
                {children}
            </div>
        </ContentWrapper>
    );
});