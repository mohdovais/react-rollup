import React from 'react';

export interface Translations {
    [key: string]: string;
}

export interface Translate {
    lang: string;
    translate?(key: string): string;
}

export interface LocalizationProps {
    lang: string;
    children: JSX.Element | JSX.Element[];
}

export interface TranslateProps {
    lang?: string;
    code: string;
    children?: string;
}

export interface FormatNumberProps {
    lang?: string;
    as?: undefined;
    decimal?: number;
    children: number;
}

export interface FormatDateProps {
    lang?: string;
    as?: 'date' | 'time';
    decimal?: undefined;
    children: Date;
}

export type FormatProps = FormatNumberProps | FormatDateProps;

export interface CacheMap {
    [key: string]: Promise<void | Translations>;
}

const map: CacheMap = {};

function getTranslations(lang: string): Promise<void | Translations> {
    const cached = map[lang];
    if (cached === undefined) {
        return (map[lang] = fetch(
            `l10n/${lang.split('-')[0]}/translations.json`
        ).then(
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
        ));
    } else {
        return cached;
    }
}

export function translate(
    code: string,
    lang: string
): Promise<string | undefined> {
    return getTranslations(lang).then(
        (translations: void | Translations): string | undefined => {
            return translations === undefined ? undefined : translations[code];
        },
        (error: Error): undefined => {
            return;
        }
    );
}

export const TranslateContext = React.createContext('en-GB');

export default function Localization(props: LocalizationProps): JSX.Element {
    return (
        <TranslateContext.Provider value={props.lang}>
            {props.children}
        </TranslateContext.Provider>
    );
}

export function Translate(props: TranslateProps): JSX.Element {
    const language = React.useContext(TranslateContext);
    const { code, children } = props;
    const lang = props.lang || language;
    const [translation, setTranslation] = React.useState(
        children || code || ''
    );

    React.useEffect((): void => {
        translate(code, lang).then((translation: string | undefined): void => {
            translation !== undefined && setTranslation(translation);
        });
    }, [code, lang]);

    return (
        <>
            {code.length === 0
                ? children === undefined
                    ? ''
                    : children
                : translation}
        </>
    );
}

export function Format(props: FormatProps): string {
    const language = React.useContext(TranslateContext);
    const children = props.children;
    const lang = props.lang || language;

    if (typeof children === 'number') {
        return children.toLocaleString(lang, {
            minimumFractionDigits: props.decimal,
            //maximumFractionDigits: undefined,
        });
    }

    if (children instanceof Date) {
        switch (props['as']) {
            case 'date':
                return children.toLocaleDateString(lang);
            case 'time':
                return children.toLocaleTimeString(lang);
            default:
                return children.toLocaleString(lang);
        }
    }

    return children;
}
