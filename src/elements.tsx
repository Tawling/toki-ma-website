import classNames from 'classnames';
import { createContext, useContext, useState } from 'react';
import { NoClickContext } from './TM';

export const BlurContext = createContext(true);
export const UnofficialContext = createContext(true);

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

export const Section = ({
    id,
    children,
    className,
    style,
    unofficial = false,
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string | object;
    style?: object;
    unofficial?: boolean;
}) => (
    <div id={id} className={classNames('section', className, { unofficial })} style={style}>
        {children}
    </div>
);

export const Title = ({ id, children, className, style }: Props) => (
    <NoClickContext.Provider value={true}>
        <a href={`#${id}`} id={id} style={style} className={classNames('title', className)}>
            {children}
        </a>
    </NoClickContext.Provider>
);

export const Examples = divType('examples');
export const Word = spanType('word');
export const B = spanType('bold');
export const P = divType('expos');
export const Ex = divType('example');
export const Eng = spanType('eng');
export const Unofficial = divType('unofficial');
export const TODO = divType('todo');
export const Separator = divType('separator');
export const Transliterated = spanType('transliterated');
export const Foreign = spanType('foreign');
