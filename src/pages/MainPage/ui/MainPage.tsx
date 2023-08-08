import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss"
import {MainHeader} from "../../../features/MainHeader";
import {AboutUs} from "../../../widgets/AboutUs";
import {BottomContact} from "../../../widgets/BottomContact";
import {Tarifs} from "../../../widgets/Tarifs";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props




    const mods: Mods = {
        
    };
    
    return (
        <div
            className={classNames(cls.MainPage, mods, [className])}
            {...otherProps}
        >
            <MainHeader/>
            <AboutUs/>
            <Tarifs/>
            {/*<BottomContact/>*/}
        </div>
    );
});
export default MainPage