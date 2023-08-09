import {FC, lazy, Suspense} from "react";

export const SearchPageAsync = lazy<FC>(() => import("./SearchPage"));

export const DetailsSearchPageComponent = () => (
    <Suspense>
        <SearchPageAsync/>
    </Suspense>
)