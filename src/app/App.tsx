import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage/ui/MainPage";
import {WithWrapper} from "shared/ui/WithWrapper/WithWrapper";
import {useWindowWidth} from "shared/lib/hook/useWindowWidth/useWindowWidth";
import {PageWrapper} from "../shared/ui/PageWrapper/PageWrapper";

function App() {
    const pageWidth = useWindowWidth();

    const contentBlock = (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )

    const desktopView = (
        <WithWrapper>
            <PageWrapper>
                {contentBlock}
            </PageWrapper>
        </WithWrapper>
    )

    const mobileView = (
        <WithWrapper>
            <PageWrapper>
                {contentBlock}
            </PageWrapper>
        </WithWrapper>
    )

    return pageWidth <= 1439 ? mobileView : desktopView;
}

export default App;
