import {memo, ReactNode, useState, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import {Link} from "react-router-dom";
import {routeConfig} from "../../../app/providers/router/config/routeConfig";
import {AppRoutes, routeNames} from "../../../shared/consts/routes/routes";

import logoDesktop from "../../../shared/assets/icons/logo-desktop.svg"
import logoMobile from "../../../shared/assets/icons/logo.svg"
import menu from "../../../shared/assets/icons/menu-navbar.svg"
import cross from "../../../shared/assets/icons/cross-mobile.svg"
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/ReduxHooks/redux";
import {authPageSlice} from "../../../pages/AuthorizatePage/model/AuthSlice";
import {postApi} from "../../../app/providers/services/RtkService";
import download from "../../../shared/assets/icons/download.svg"
import {CompanyCount} from "../../../app/providers/StoreProvider/models/CompanyCount";
import {isBooleanObject} from "util/types";


interface NavbarProps {
    className?: string
    children?: ReactNode
}


export const DetailsNavbar = memo((props: NavbarProps) => {

        const accessToken = localStorage.getItem('accessToken');
        const [usedCompanyCount, setUsedCompanyCount] = useState('0');
        const [companyLimit, setCompanyLimit] = useState('');
        const [loading, setLoading] = useState(false)
        const {data:count, isLoading, error} = postApi.useCompanyCountQuery(1)
        useEffect(()=>{
            if(accessToken){
               dispach(addauth(true))
            }
        },[])



        // const [isauthorized, setAuthorized] =useState<boolean>(false);
        const {isauthorized} = useAppSelector(state => state.authReducer);
        const {addauth} = authPageSlice.actions;
        const dispach = useAppDispatch()


        // const {auth} = useAppSelector(state => state.authReducer);
        // const {addauth} = authPageSlice.actions;
        // const dispach = useAppDispatch()

        const localStorageСlear = () => {
            localStorage.clear()
            dispach(addauth(false))


        }
        useEffect(()=>{
            if(count){
             setUsedCompanyCount(JSON.stringify(count.eventFiltersInfo.usedCompanyCount))
              setCompanyLimit(JSON.stringify(count.eventFiltersInfo.companyLimit))

            }

            setLoading(loading)
        },[isLoading])

        //  axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`
        //   }
        // })
        //   .then(response => {
        //       if (count){
        //       }
        //
        //     console.log(response.data);
        //       // setAuthorized(true)
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });


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
                        {isLoading? (
                            <img src={download} className={cls.Download}/>
                        ):(
                        <div>
                            <div className={cls.RowCompanyLimit}>
                                Использовано компаний : {usedCompanyCount}
                            </div>
                            <div className={cls.RowCompanyLimit}>
                                Лимит по компаниям :
                            <span className={cls.CompanyLimit}>{companyLimit}</span>
                            </div>
                        </div>
                        )}


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