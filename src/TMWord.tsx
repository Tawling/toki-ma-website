import React, { useContext, useRef, createContext } from 'react';
import { NoClickContext } from './TM';
import { WordListContext } from './words';

export const GetDefContext = createContext((word: string, ref: React.MutableRefObject<HTMLSpanElement | null>) => {});

const TMWord = ({ children }: { children: string }) => {
    const ref = useRef(null);
    const getDef = useContext(GetDefContext);
    const wordList = useContext(WordListContext);
    const noclick = useContext(NoClickContext);
    return (
        <span
            ref={ref}
            className={wordList?.words[children.toLowerCase()] ? 'tmword' : ''}
            onClick={noclick ? undefined : ((e) => {
                getDef(children, ref);
                e.stopPropagation();
            })}
        >
            {children}
        </span>
    );
};

export default TMWord;
