import React from "react";

interface Props {
    children: React.ReactNode;
}

const LazyHeader = React.lazy(() => import("./header"));
const LazyFooter = React.lazy(() => import("./footer"));
const LayoutWrapper: React.FC<Props> = ({children}) => {
    return (
        <div>
            <LazyHeader/>
            <div>
                {children}
                <LazyFooter/>
            </div>
        </div>
    )
}