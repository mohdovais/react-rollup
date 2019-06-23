import React, { Suspense } from 'react';
import PreLoader from '../components/PreLoader';
import Localization from '../components/Localization';

const Page01 = React.lazy(
    (): Promise<{ default: React.ComponentType }> => import('./Page01')
);

export default function App(): JSX.Element {
    const [lang, setLang] = React.useState('hi');
    return (
        <Localization lang={lang}>
            <select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                    setLang(event.target.value)
                }
                value={lang}
            >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="pl">Polskie</option>
            </select>
            <Suspense fallback={<PreLoader />}>
                <Page01 />
            </Suspense>
        </Localization>
    );
}
