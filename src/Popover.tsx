import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { WordList } from './words';

const Popover = ({
    word,
    span,
    app,
    wordList,
}: {
    word: string;
    span: null | React.MutableRefObject<null | HTMLSpanElement>;
    app: null | React.MutableRefObject<null | HTMLDivElement>;
    wordList: WordList;
}) => {
    const ref = useRef(null) as React.MutableRefObject<null | HTMLDivElement>;
    const { t } = useTranslation();
    if (!word || !span || !wordList) {
        return null;
    }
    if (word?.toLowerCase() in wordList.words) {
        const r = span.current?.getBoundingClientRect() ?? { top: 0, bottom: 0, left: 0, right: 0 };
        const rect = {
            top: r.top + window.scrollY,
            left: r.left + window.scrollX,
            bottom: r.bottom + window.scrollY,
            right: r.right + window.scrollX,
        };
        const r2 = app?.current?.getBoundingClientRect() ?? { top: 0, bottom: 0, left: 0, right: 0 };
        const appRect = {
            top: r2.top + window.scrollY,
            left: r2.left + window.scrollX,
            bottom: r2.bottom + window.scrollY,
            right: r2.right + window.scrollX,
        };
        const appWidth = appRect.right - appRect.left;
        const popoverLeft = Math.min(
            rect.left - 10,
            Math.max(appWidth - 5, document.documentElement.clientWidth - 5) -
                Math.min(document.documentElement.clientWidth * 0.5, 400),
        );
        return (
            <div
                ref={ref}
                className="popover"
                style={{
                    top: rect.top + (span?.current?.offsetHeight ?? 0) + 10,
                    left: popoverLeft,
                }}
            >
                <div
                    className="tip"
                    style={{
                        left: (rect.right - rect.left) / 2 - 5 + (rect.left - popoverLeft),
                    }}
                ></div>
                <span className="word-def">{wordList.words[word.toLowerCase()].word}</span>
                {wordList.words[word.toLowerCase()].emoji ? (
                    <span className="emoji" style={{ paddingLeft: '0.5em' }}>
                        {wordList.words[word.toLowerCase()].emoji}
                    </span>
                ) : null}
                <br />
                <span className="base-pos">
                    ({t('Base Part Of Speech')}:{' '}
                    {wordList.labels[wordList.words[word.toLowerCase()].base] || 'Irregular'})
                </span>
                <br />
                <br />
                {['noun', 'verb', 'modifier', 'numeral', 'preposition', 'particle']
                    .filter((pos) => wordList.words[word.toLowerCase()][pos])
                    .map((pos, i) => (
                        <div key={i}>
                            <span className="pos">{wordList.labels[pos]}</span>:{' '}
                            {wordList.words[word.toLowerCase()][pos]}
                        </div>
                    ))}
            </div>
        );
    }
    return null;
};

export default Popover;
