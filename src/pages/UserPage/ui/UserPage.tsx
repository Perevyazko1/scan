import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface UserPageProps {
    className?: string
    children?: ReactNode
}


const UserPage = memo((props: UserPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    
    const mods: Mods = {
        
    };
    
    return (
        <div
            className={classNames('', mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
export default UserPage