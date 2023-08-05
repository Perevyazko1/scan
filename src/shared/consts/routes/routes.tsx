export enum AppRoutes {
    MAIN = 'main',
    FAQ = 'faq',
    TARIFS = 'tarifs',
    USER = 'user',
    NOT_FOUND = 'not_found',
}

export const routeNames: { [key in AppRoutes]: string } = {
    [AppRoutes.MAIN]: "Главная",
    [AppRoutes.FAQ]: "FAQ",
    [AppRoutes.TARIFS]: "Тарифы",
    [AppRoutes.USER]: "Личный кабинет",
    [AppRoutes.NOT_FOUND]: "Страница не найдена",
}


export const getRouteMain = () => '/';
export const getRouteNews = () => '/faq';
export const getRoutePet = () => '/tarifs';
// export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteUser = () => `/user`;

export const getRouteNotFound = () => '/*';
