import React, { Suspense } from 'react';
import PreLoader from '../components/PreLoader';
import Localization, { Translations } from '../components/Localization';

const Page01 = React.lazy(
    (): Promise<{ default: React.ComponentType }> => import('./Page01')
);

function getTranslations(
    lang: string,
    keyword: string
): Promise<void | Translations> {
    return fetch(`l10n/${lang.split('-')[0]}/translations.json`).then(
        (response: Response): Promise<void | Translations> => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        },
        (error: any): void => {
            throw new Error(error);
        }
    );
}

export default function App(): JSX.Element {
    const [lang, setLang] = React.useState('hi');
    return (
        <Localization lang={lang} translations={getTranslations}>
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
