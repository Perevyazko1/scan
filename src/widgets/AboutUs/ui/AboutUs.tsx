import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./AboutUs.module.scss"
import pictureMan from "../../../shared/assets/picture/picture-man.svg"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

interface AboutUsProps {
    className?: string
    children?: ReactNode
}


export const DetailsAboutUs = memo((props: AboutUsProps) => {
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
                className={classNames(cls.AboutUs, mods, [className])}
                {...otherProps}
            >
                <div className={cls.HeaderBlock}>
                    <div className={cls.HeaderAboutUs}>
                        ПОЧЕМУ ИМЕННО МЫ
                    </div>
                </div>
                <img src={pictureMan} className={cls.PictureBlock}/>
                {children}
            </div>
        </ContentWrapper>
    );
});