import { FC, lazy, Suspense} from "react";
export const SearchResultsPageAsync = lazy<FC>(()=> import("./SearchResultsPage"));
export const DetailsSearchResultsPage = () => (
    <Suspense>
        <SearchResultsPageAsync/>
    </Suspense>
)