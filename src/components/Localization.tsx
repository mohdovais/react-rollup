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
    translations(lang: string, keyword: string): Promise<void | Translations>;
    children: JSX.Element | JSX.Element[];
}

export interface TranslateProps {
    lang?: string;
    keyword: string;
    children?: string | string[];
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
let translationsSrc: (
    lang: string,
    keyword: string
) => Promise<void | Translations>;

function getTranslations(
    lang: string,
    keyword: string
): Promise<void | Translations> {
    const cached = map[lang];
    const src: Promise<void | Translations> = translationsSrc(lang, keyword);

    if (cached === undefined) {
        return (map[lang] = src);
    } else {
        return cached;
    }
}

export function translate(
    keyword: string,
    lang: string
): Promise<string | undefined> {
    return getTranslations(lang, keyword).then(
        (translations: void | Translations): string | undefined => {
            return translations === undefined
                ? undefined
                : translations[keyword];
        },
        (error: Error): undefined => {
            return;
        }
    );
}

export const TranslateContext = React.createContext(navigator.language);

export default function Localization(props: LocalizationProps): JSX.Element {
    translationsSrc = props.translations;
    return (
        <TranslateContext.Provider value={props.lang}>
            {props.children}
        </TranslateContext.Provider>
    );
}

export const Translate = React.memo(function Translate(
    props: TranslateProps
): JSX.Element {
    const language = React.useContext(TranslateContext);
    const { keyword, children } = props;
    const lang = props.lang || language;
    const [translation, setTranslation] = React.useState(
        children || keyword || ''
    );

    React.useEffect((): void => {
        translate(keyword, lang).then(
            (translation: string | undefined): void => {
                translation !== undefined && setTranslation(translation);
            }
        );
    }, [keyword, lang]);

    return (
        <>
            {keyword.length === 0
                ? children === undefined
                    ? ''
                    : children
                : translation}
        </>
    );
});

export const Format = React.memo(function Format(
    props: FormatProps
): JSX.Element {
    const language = React.useContext(TranslateContext);
    const children = props.children;
    const lang = props.lang || language;

    if (typeof children === 'number') {
        return (
            <>
                {children.toLocaleString(lang, {
                    minimumFractionDigits: props.decimal,
                    //maximumFractionDigits: undefined,
                })}
            </>
        );
    }

    if (children instanceof Date) {
        switch (props['as']) {
            case 'date':
                return <>{children.toLocaleDateString(lang)}</>;
            case 'time':
                return <>{children.toLocaleTimeString(lang)}</>;
            default:
                return <>{children.toLocaleString(lang)}</>;
        }
    }

    return children;
});
