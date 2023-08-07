import {FC, lazy,Suspense} from "react";

// TODO удалить задержку загрузки в прод
export const AuthorizationPageAsync = lazy<FC>(() => import('./AuthorizationPage'));

export const DetailsAuthorizationPage = () => (
  <Suspense>
    <AuthorizationPageAsync />
  </Suspense>
)