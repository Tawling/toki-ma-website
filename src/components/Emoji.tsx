import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export function toCodePoint(unicodeSurrogates: string, sep?: string) {
    const r = [];
    let c = 0,
        p = 0,
        i = 0;
    while (i < unicodeSurrogates.length) {
        c = unicodeSurrogates.charCodeAt(i++);
        if (p) {
            r.push((0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16));
            p = 0;
        } else if (0xd800 <= c && c <= 0xdbff) {
            p = c;
        } else {
            r.push(c.toString(16));
        }
    }
    return r.join(sep || '-');
}

export const SelectionContext = createContext<{ selection: Selection | null }>({ selection: null });
export const TwemojiRender = ({ emoji }: { emoji: string }) => {
    const ref: React.MutableRefObject<HTMLSpanElement | null> = useRef(null);
    const selection = useContext(SelectionContext);
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        setSelected(
            !!(
                selection.selection &&
                !selection.selection.isCollapsed &&
                ref.current &&
                selection.selection.containsNode(ref.current, true)
            ),
        );
    }, [selection, ref, ref.current]);
    return (
        <i
            style={{
                filter: selected ? 'brightness(0.7)' : undefined,
                border: selected ? '1px solid' : undefined,
                borderRadius: selected ? '3px' : undefined,
                display: 'inline-block',
                height: '1em',
                width: '1em',
                margin: '0 0.05em 0 0.1em',
                verticalAlign: '-0.15em',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '1em 1em',
                backgroundImage: `url("https://twemoji.maxcdn.com/v/latest/svg/${toCodePoint(emoji).replace(
                    '-fe0f',
                    '',
                )}.svg")`,
            }}
        >
            <span ref={ref} style={{ opacity: 0, fontSize: '0.1em', verticalAlign: 'top' }}>
                {emoji}
            </span>
        </i>
    );
};
