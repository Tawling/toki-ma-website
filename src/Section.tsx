import classNames from 'classnames';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { NoClickContext } from './TM';

export interface TOCEntry {
    id: string;
    unofficial: boolean;
    title: ReactNode;
    children?: TOCEntry[];
}

export const ContentsContext = createContext<[number, (entry: TOCEntry, depth: number) => void, boolean]>([
    0,
    (entry: TOCEntry, depth: number) => {},
    false,
]);

export const X = () => {
    const tocEntries = useState<TOCEntry[]>([])

}

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
}) => {
    const [depth, updateEntry] = useContext(ContentsContext);

    return (
        <ContentsContext.Provider
            value={[depth + 1, (entry: TOCEntry, depth: number) => updateEntry(entry, depth), unofficial]}
        >
            <div id={id} className={classNames('section', className, { unofficial })} style={style}>
                {children}
            </div>
        </ContentsContext.Provider>
    );
};

export const Title = ({
    id,
    children,
    className,
    style,
}: {
    id: string;
    children?: ReactNode;
    className?: string;
    style?: object;
}) => {
    const [depth, updateEntry, unofficial] = useContext(ContentsContext);
    useEffect(() => {
        updateEntry({ id, unofficial, title: children }, depth);
    }, []);
    return (
        <NoClickContext.Provider value={true}>
            <a href={`#${id}`} id={id} style={style} className={classNames('title', className)}>
                {children}
            </a>
        </NoClickContext.Provider>
    );
};
