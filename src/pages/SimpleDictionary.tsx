import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TwemojiRender } from '../components/Emoji';
import { LanguageContext } from '../contexts';
import { fetchDictLanguages, fetchWordList, simplePartsOfSpeech, WordDef, WordList } from '../words';

import styles from './SimpleDictionary.module.scss';

const TO_LANG = 'TO_LANG';
const TO_TM = 'TO_TM';

export const SimpleDictionary = () => {
    const [wordList, setWordList] = useState<WordList | null>(null);
    const pageLanguage = useContext(LanguageContext);
    const [dictLanguages, setDictLanguages] = useState([pageLanguage]);
    const [language, setLanguage] = useState(pageLanguage);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<WordDef[]>([]);

    const [toTM, setToTM] = useState(false);
    const [exact, setExact] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        fetchDictLanguages().then((langs) => setDictLanguages(langs));
    }, []);

    useEffect(() => {
        setLanguage(dictLanguages.includes(language) ? language : 'English');
        fetchWordList(language).then((list) => setWordList(list));
    }, [dictLanguages, language]);

    useEffect(() => {
        if (toTM) {
            setResults(
                Object.values(wordList?.words ?? {}).filter(
                    (def: WordDef) =>
                        def.short?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
                        simplePartsOfSpeech.some(
                            (pos) => def[pos] && def[pos]?.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
                        ),
                ),
            );
        } else {
            setResults(
                Object.values(wordList?.words ?? {}).filter((def) =>
                    exact
                        ? def.word.toLocaleLowerCase() === query.toLocaleLowerCase()
                        : def.word.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
                ),
            );
        }
    }, [query, toTM, wordList, language, exact]);
    return (
        <div className="page">
            <div className={styles.dictLangControls}>
                {t('Dictionary Language')}{' '}
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    {dictLanguages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
            {!toTM && wordList ? (
                <div className={styles.tmWordList}>
                    <select size={15}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setExact(true);
                        }}
                    >
                        {Object.values(wordList?.words).map((def) => <option key={def.word} value={def.word}>{def.emoji} {def.word}</option>)}
                    </select>
                </div>
            ) : null}
            <div className={styles.searchControls}>
                <select onChange={(e) => setToTM(e.target.value === TO_TM)}>
                    <option value={TO_LANG}>
                        {t('toki ma')} → {language}
                    </option>
                    <option value={TO_TM}>
                        {language} → {t('toki ma')}
                    </option>
                </select>
            </div>
            <div className={styles.searchContainer}>
                <input type="text" value={query} className={styles.searchBox} onChange={(e) => setQuery(e.target.value)} />
                {!toTM && (
                    <label>
                        <input
                            type="checkbox"
                            className={styles.toggle}
                            checked={exact}
                            onChange={() => setExact(!exact)}
                        />{' '}
                        {t('Exact match')}
                    </label>
                )}
            </div>
            <div>
                {!wordList
                    ? t('Loading...')
                    : results.map((def) => <DictEntry labels={wordList?.labels || {}} word={def} />)}
            </div>
        </div>
    );
};

const DictEntry = ({ labels, word }: { labels: { [key: string]: string }; word: WordDef }) => {
    return (
        <div className={styles.simpleDictEntry}>
            <div className={styles.wordHeader}>
                {word.emoji && (
                    <>
                        <TwemojiRender emoji={word.emoji} />{' '}
                    </>
                )}
                {word.word}
            </div>
            <div className={styles.basePOS}>({word.base})</div>
            <div className={styles.etymology}>{word.origin}</div>
            <div className={styles.posContainer}>
                {simplePartsOfSpeech.map((pos) =>
                    word[pos] ? (
                        <div className={classNames(styles.pos, pos)}>
                            <span className={styles.posLabel}>{labels[pos] ?? pos}:</span>{' '}
                            <span className={styles.posDef}>{word[pos]}</span>
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
};

export default SimpleDictionary;
