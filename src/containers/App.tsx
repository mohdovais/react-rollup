import React, { Suspense } from 'react';
import { Store } from 'redux';
import PreLoader from '../components/PreLoader';
import Translater from '../components/Translater';

export interface Props {
    store: Store;
}

const Page01 = React.lazy(
    (): Promise<{ default: React.ComponentType }> => import('./Page01')
);

export default function App(props: Props): React.ReactElement {
    return (
        <Translater lang={navigator.language}>
            <Suspense fallback={<PreLoader />}>
                <Page01 />
            </Suspense>
        </Translater>
    );
}
