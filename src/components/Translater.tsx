import React from 'react';

export interface Translate {
    lang: string;
    translate?(key: string): string;
}

export interface TranslaterProps {
    lang: string;
    children: JSX.Element;
}

export interface TranslateProps {
    lang?: string;
    code: string;
    children?: string;
}

const map = {};

function getTranslations(lang: string): Promise<void | object> {
    if (map[lang] === undefined) {
        return (map[lang] = fetch(
            `l10n/${lang.split('-')[0]}/translations.json`
        ).then(
            (response: Response): object => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            },
            (error: any): void => {
                throw new Error(error);
            }
        ));
    } else {
        return map[lang];
    }
}

export function translate(code, lang): Promise<string | void> {
    return getTranslations(lang).then(
        (translations: object): string => translations[code],
        (error: Error): string => error.message
    );
}

export const TranslateContext = React.createContext('en-GB');

export default function Translater(props: TranslaterProps): JSX.Element {
    return (
        <TranslateContext.Provider value={navigator.language}>
            {props.children}
        </TranslateContext.Provider>
    );
}

export function Translate(props: TranslateProps): string {
    const language = React.useContext(TranslateContext);
    const { code, children } = props;
    const lang = props.lang || language;
    const [translation, setTranslation] = React.useState(
        children || code || ''
    );

    React.useEffect((): void => {
        translate(code, lang).then(
            (translation: string | undefined): void =>
                translation !== undefined && setTranslation(translation)
        );
    }, [code, lang]);

    return code.length === 0
        ? children === undefined
            ? ''
            : children
        : translation;
}
