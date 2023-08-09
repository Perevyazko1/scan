import {FC, lazy,Suspense} from "react";

export const TarifsPageAsync = lazy<FC>(() => import('./TarifsPage'));

export const DetailsTarifsComponent = () => (
  <Suspense>
    <TarifsPageAsync />
  </Suspense>
)
