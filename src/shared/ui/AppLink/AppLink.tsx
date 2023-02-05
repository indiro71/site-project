import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {theme = AppLinkTheme.PRIMARY, to, className, children, ...otherProps} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};