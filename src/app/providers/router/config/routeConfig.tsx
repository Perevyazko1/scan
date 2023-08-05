import {MainPage} from "../../../../pages/MainPage";
import {TarifsPage} from "../../../../pages/TarifsPage";
import {FAQPage} from "../../../../pages/FAQPage";
import {UserPage} from "../../../../pages/UserPage";


import {
    AppRoutes,
    getRouteMain,
    getRouteNews,
    getRoutePet,
    getRouteUser,
    getRouteNotFound
} from "../../../../shared/consts/routes/routes";
import {AppRoutesProps} from "../../../../shared/types/router";
import {NotFoundPage} from "../../../../pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>,
    },
    [AppRoutes.TARIFS]: {
        path: getRouteNews(),
        element: <TarifsPage/>,
    },
    [AppRoutes.FAQ]: {
        path: getRoutePet(),
        element: <FAQPage/>,
    },
    [AppRoutes.USER]: {
        path: getRouteUser(),
        element: <UserPage/>,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage/>,
        authOnly: true,
    },


};