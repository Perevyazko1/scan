import {FC, lazy, Suspense} from "react";
// TODO удалить задержку загрузки в прод
export const UserPageAsync = lazy<FC>(() => import("./UserPage"));

export const DetailsUserComponent = () => (
  <Suspense>
    <UserPageAsync />
  </Suspense>
)