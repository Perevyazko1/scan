import {FC, lazy,Suspense} from "react";

// TODO удалить задержку загрузки в прод
// export const MainPageAsync = lazy<FC>(() => import('./MainPage'));
 const MainPageAsync = lazy<FC>(() => new Promise(resolve => {import("./MainPage")
}));
export const DetailsMainComponent = () => (
  <Suspense>
    <MainPageAsync />
  </Suspense>
)