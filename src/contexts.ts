import { createContext } from 'react';
import { WordList } from './words';

export const WordListContext = createContext({ labels: {}, words: {} } as WordList);

export const GetDefContext = createContext((word: string, ref: React.MutableRefObject<HTMLSpanElement | null>) => {});

export const BlurContext = createContext(true);

export const UnofficialContext = createContext(true);

export const LanguageContext = createContext('English');
