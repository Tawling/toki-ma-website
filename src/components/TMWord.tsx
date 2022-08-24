import React, { useContext, useRef } from 'react';
import { GetDefContext, WordListContext } from '../contexts';
import { NoClickContext } from './TM';

const TMWord = ({ children }: { children: string }) => {
    const ref = useRef(null);
    const getDef = useContext(GetDefContext);
    const wordList = useContext(WordListContext);
    const noclick = useContext(NoClickContext);
    return (
        <span
            ref={ref}
            className={wordList?.words[children.toLowerCase()] ? 'tmword' : ''}
            onClick={
                noclick
                    ? undefined
                    : (e) => {
                          getDef(children, ref);
                          e.stopPropagation();
                      }
            }
        >
            {children}
        </span>
    );
};

export default TMWord;
