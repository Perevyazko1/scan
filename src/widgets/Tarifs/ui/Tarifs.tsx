import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Tarifs.module.scss"
import {Button} from "../../../shared/ui/Button/Button";
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import lamp from "../../../shared/assets/icons/lamp.svg"
import check from "../../../shared/assets/icons/check-mark.svg"
import target from "../../../shared/assets/icons/target.svg"
import notebook from "../../../shared/assets/icons/notebook.svg"


interface TarifsProps {
    className?: string
    children?: ReactNode
}


export const DetailTarifs = memo((props: TarifsProps) => {
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
                className={classNames(cls.Tarifs, mods, [className])}
                {...otherProps}
            >
                <div className={cls.HeaderTarifs}></div>
                <div className={cls.BlockTarifs}>
                    <div className={cls.UnitTarif}>
                        <div className={cls.HeaderTarifBlockBeginner}>
                            <div className={cls.HeaderTarif}>Beginner</div>
                            <div className={cls.Subtitle}>Для небольшого исследования</div>
                            <img src={lamp} className={cls.Lamp}/>
                        </div>
                        <span className={cls.PriceTarif}>799 ₽</span><span className={cls.OldPrice}><s>1 200 ₽</s></span>
                        <div className={cls.CreditPrice}>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                        <div className={cls.PackageTarif}>
                            <p>В тариф входит:</p>
                            <p><img src={check}/> Безлимитная история запросов</p>
                            <p><img src={check}/> Безопасная сделка</p>
                            <p><img src={check}/> Поддержка 24/7</p>
                        </div>
                        <Button className={cls.ButtonTarif}>Перейти в личный кабинет</Button>
                    </div>


                    <div className={cls.UnitTarif}>
                        <div className={cls.HeaderTarifBlockPro}>
                            <div className={cls.HeaderTarif}>PRO</div>
                            <div className={cls.Subtitle}>Для корпоративных клиентов</div>
                            <img src={target} className={cls.Lamp}/>
                        </div>
                        <span className={cls.PriceTarif}>1 299 ₽</span><span className={cls.OldPrice}><s>2 600 ₽</s></span>
                        <div className={cls.CreditPrice}>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                        <div className={cls.PackageTarif}>
                            <p>В тариф входит:</p>
                            <p><img src={check}/> Все пункты тарифа Beginner</p>
                            <p><img src={check}/> Экспорт истории</p>
                            <p><img src={check}/> Рекомендации по приоритетам</p>
                        </div>
                        <Button className={cls.ButtonTarif}>Подробнее</Button>
                    </div>


                    <div className={cls.UnitTarif}>
                        <div className={cls.HeaderTarifBlockBusiness}>
                            <div className={cls.HeaderTarif}>PRO</div>
                            <div className={cls.Subtitle}>Для HR и фрилансеров</div>
                            <img src={notebook} className={cls.Lamp}/>
                        </div>
                        <span className={cls.PriceTarif}>2 379 ₽</span><span className={cls.OldPrice}><s>3 700 ₽</s></span>
                        <div className={cls.CreditPrice}>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                        <div className={cls.PackageTarif}>
                            <p>В тариф входит:</p>
                            <p><img src={check}/> Все пункты тарифа Pro</p>
                            <p><img src={check}/> Безлимитное количество запросов</p>
                            <p><img src={check}/> Приоритетная поддержка</p>
                        </div>
                        <Button className={cls.ButtonTarif}>Подробнее</Button>
                    </div>


                </div>
                {children}
            </div>
        </ContentWrapper>
    );
});