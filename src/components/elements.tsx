import React from 'react';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { BlurContext } from '../contexts';
import { NoClickContext } from './TM';

interface Props {
    id?: string;
    children?: React.ReactNode;
    className?: string | object;
    style?: object;
}

export const spanType =
    (cls: string) =>
    ({ id, children, className, style }: Props) =>
        (
            <span id={id} style={style} className={classNames(cls, className)}>
                {children}
            </span>
        );

export const divType =
    (cls: string) =>
    ({ id, children, className, style }: Props) =>
        (
            <div id={id} style={style} className={classNames(cls, className)}>
                {children}
            </div>
        );

export const Answer = ({
    id,
    children,
    className,
    noblur = false,
    nospacer = false,
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string | object;
    style?: object;
    nospacer?: boolean;
    noblur?: boolean;
}) => {
    const [hidden, setHidden] = useState(true);
    const blur = useContext(BlurContext);
    return (
        <span
            id={id}
            onClick={() => setHidden(!hidden)}
            className={classNames('answer', className, {
                hidden: blur && hidden,
                'no-spacer': nospacer,
                'no-blur': noblur,
            })}
        >
            <span className="spacer"> - </span>
            {children}
        </span>
    );
};

export const See = ({ children, href, style }: { children: React.ReactNode; href: string; style?: object }) => (
    <NoClickContext.Provider value={true}>
        <a className="see" href={`#${href}`} style={style}>
            [See section on <span>{children}</span> for more]
        </a>
    </NoClickContext.Provider>
);

export const Examples = divType('examples');
export const Word = spanType('word');
export const B = spanType('bold');
export const P = divType('expos');
export const Ex = divType('example');
export const Loc = spanType('localized');
export const Unofficial = divType('unofficial');
export const TODO = divType('todo');
export const Separator = divType('separator');
export const Transliterated = spanType('transliterated');
export const Foreign = spanType('foreign');
