import {FC, lazy,Suspense} from "react";

// TODO удалить задержку загрузки в прод
export const MainPageAsync = lazy<FC>(() => import('./MainPage'));

export const DetailsMainComponent = () => (
  <Suspense>
    <MainPageAsync />
  </Suspense>
)