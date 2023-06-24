import new_words from './words.json';

interface WordListResponse {
    [language: string]: {
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
    };
}

export interface WordDef_old {
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
export interface WordList_old {
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

export interface WordDef {
    [key: string]: string | undefined;
    emoji: string;
    type: string;
    word: string;
    tmWord?: string;
    origin?: string;
    short: string;
    noun?: string;
    verb?: string;
    modifier?: string;
    ipa?: string;
    family?: string;
}

export interface WordList {
    [word: string]: WordDef;
}

// const extraWords: { [language: string]: { [key: string]: WordDef } } = {
//     English: {
//         nula: {
//             emoji: '0️⃣',
//             base: 'numeral',
//             word: 'nula',
//             etymology: '',
//             short: 'zero',
//             numeral: 'zero (UNOFFICIAL) ',
//         },
//         je: {
//             emoji: '🔂',
//             base: 'particle',
//             word: 'je',
//             etymology: '',
//             short: '[relational]',
//             particle: 'immediate-relation (UNOFFICIAL) ',
//         },
//     },
// };

// for response caching
// let wordListPromise: Promise<WordListResponse> | null = null;

// export const fetchWordList_old = async (language: string): Promise<WordList> => {
//     if (!wordListPromise) {
//         wordListPromise = (await fetch('https://toki-ma.com/api/words.php')).json();
//     }
//     const wordList = await wordListPromise;
//     return {
//         labels: (wordList[language] ?? wordList['English']).labels,
//         words: {
//             ...(wordList[language] ?? wordList['English']).words,
//             ...(extraWords[language] ?? extraWords['English']),
//         },
//     };
// };

export const fetchWordList = async (): Promise<WordList> => {
    const wordList = new_words;
    const list = {} as WordList;
    for (const word of wordList) {
        list[word.word] = word;
    }
    return list;
};

export const fetchDictLanguages = async (): Promise<string[]> => {
    return ['English'];
    // if (!wordListPromise) {
    //     wordListPromise = (await fetch('https://toki-ma.com/api/words.php')).json();
    // }
    // return Object.keys(await wordListPromise);
};

export const wordTypes = [
    'Noun',
    'Verb',
    'Modifier+',
    'Modifier-',
    'Modifier0',
    'ModifierC',
    'ModifierG',
    'ModifierO{',
    'Modifier>',
    'Preposition',
    'Quantity',
    'Pronoun',
    'Connect',
];
