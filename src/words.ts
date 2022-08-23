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

const extraWords: { [language: string]: { [key: string]: WordDef } } = {
    English: {
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
    },
};

// for response caching
let wordListPromise: Promise<WordListResponse> | null = null;

export const fetchWordList = async (language: string): Promise<WordList> => {
    if (!wordListPromise) {
        wordListPromise = (await fetch('https://toki-ma.com/api/words.php')).json();
    }
    const wordList = await wordListPromise;
    return {
        labels: (wordList[language] ?? wordList['English']).labels,
        words: {
            ...(wordList[language] ?? wordList['English']).words,
            ...(extraWords[language] ?? extraWords['English']),
        },
    };
};

export const fetchFullDict = async (): Promise<WordListResponse> => {
    if (!wordListPromise) {
        wordListPromise = (await fetch('https://toki-ma.com/api/words.php')).json();
    }
    return await wordListPromise;
};

export const fetchDictLanguages = async (): Promise<string[]> => {
    if (!wordListPromise) {
        wordListPromise = (await fetch('https://toki-ma.com/api/words.php')).json();
    }
    return Object.keys(await wordListPromise);
};

export const simplePartsOfSpeech = ['noun', 'verb', 'modifier', 'preposition', 'particle', 'numeral'];
