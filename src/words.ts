import React from "react";

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

export const fetchWordList = async() => {
    const wordList = (await (await fetch('https://toki-ma.com/api/words.php')).json()) as WordListResponse;
    return wordList['English'];
}

export const WordListContext = React.createContext({labels: {}, words: {}} as WordList);