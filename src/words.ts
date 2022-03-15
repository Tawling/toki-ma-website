import { createContext } from "react";

interface WordListResponse {
    [language: string]: {
        labels: {
            [key: string]: string;
        };
        words: {
            [word: string]: {
                emoji: string;
                base: string;
                word: string;
                etymology: string;
                short: string;
                noun?: string;
                verb?: string;
                modifier?: string;
                preposition?: string;
                particle?: string;
                numeral?: string;
            };
        };
    };
}

export interface WordDef {
    [key: string]: string | undefined;
    emoji: string;
    base: string;
    word: string;
    etymology: string;
    short: string;
    noun?: string;
    verb?: string;
    modifier?: string;
    preposition?: string;
    particle?: string;
    numeral?: string;
}
export interface WordList {
    labels: {
        [key: string]: string;
    };
    words: {
        [word: string]: {
            [key: string]: string | undefined;
            emoji: string;
            base: string;
            word: string;
            etymology: string;
            short: string;
            noun?: string;
            verb?: string;
            modifier?: string;
            preposition?: string;
            particle?: string;
            numeral?: string;
        };
    };
}

const extraWords: { [key: string]: WordDef } = {
    nula: {
        emoji: '0️⃣',
        base: 'numeral',
        word: 'nula',
        etymology: '',
        short: 'zero',
        numeral: 'zero (UNOFFICIAL) ',
    },
    je: {
        emoji: '🔂',
        base: 'particle',
        word: 'je',
        etymology: '',
        short: '[relational]',
        particle: 'immediate-relation (UNOFFICIAL) ',
    },
};

export const fetchWordList = async (): Promise<WordList> => {
    const wordList = (await (await fetch('https://toki-ma.com/api/words.php')).json()) as WordListResponse;
    return { labels: wordList['English'].labels, words: { ...wordList['English'].words, ...extraWords } };
};

export const WordListContext = createContext({labels: {}, words: {}} as WordList);