import React, { Suspense } from "react";

interface Props {
    children: React.ReactNode;
}

const LazyHeader = React.lazy(() => import("./nav"));
const LazyFooter = React.lazy(() => import("./footer"));

const LayoutWrapper: React.FC<Props> = ({children}) => {
    return (
        <div className="">
            <Suspense fallback={<div className="h-16"></div>}>
                <LazyHeader/>
            </Suspense>
            <div className="pt-16">
                {children}
                <Suspense fallback={<div className="h-32"></div>}>
                    <LazyFooter/>
                </Suspense>
            </div>
        </div>
    )
}

export { LayoutWrapper };