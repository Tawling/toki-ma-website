import React, { useContext, useRef, createContext } from 'react';

export const GetDefContext = createContext((word: string, ref: React.MutableRefObject<HTMLSpanElement | null>) => {});

const TMWord = ({ children }: { children: string }) => {
    const ref = useRef(null);
    const getDef = useContext(GetDefContext);
    return (
        <span
            ref={ref}
            className="tmword"
            onClick={(e) => {
                getDef(children, ref);
                e.stopPropagation();
            }}
        >
            {children}
        </span>
    );
};

export default TMWord;
