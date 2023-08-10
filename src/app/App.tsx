import React from 'react';
import {Route, Routes} from "react-router-dom";

import {WithWrapper} from "shared/ui/WithWrapper/WithWrapper";
import {useWindowWidth} from "shared/lib/hook/useWindowWidth/useWindowWidth";
import {PageWrapper} from "../shared/ui/PageWrapper/PageWrapper";
import {MainPage} from "../pages/MainPage";
import {TarifsPage} from "../pages/TarifsPage";
import {FAQPage} from "../pages/FAQPage";
import {NavBar} from "../features/NavBar";
import {AuthorizationPage} from "../pages/AuthorizatePage";
import {BottomContact} from "../widgets/BottomContact";
import SearchPage from "../pages/SearchPage/ui/SearchPage";

function App() {
    const pageWidth = useWindowWidth();

    const contentBlock = (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/tarifs" element={<TarifsPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
            <Route path="/authorize" element={<AuthorizationPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
        </Routes>
    )

    const desktopView = (
        <WithWrapper>
            <NavBar/>
            <PageWrapper>
                {contentBlock}
            </PageWrapper>
            <BottomContact/>
        </WithWrapper>
    )

    const mobileView = (
        <WithWrapper>
            <NavBar/>
            <PageWrapper>
                {contentBlock}
            </PageWrapper>
            <BottomContact/>
        </WithWrapper>
    )

    return pageWidth <= 1439 ? mobileView : desktopView;
}

export default App;
