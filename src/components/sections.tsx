import classNames from 'classnames';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { NoClickContext } from './TM';

export interface TOCEntry {
    id: string;
    unofficial: boolean;
    title: ReactNode;
    children?: TOCEntry[];
}

export const ContentsContext = createContext<[number, (entry: TOCEntry, depth: number) => void, boolean, React.MutableRefObject<TOCEntry[]> | null]>([
    0,
    (entry: TOCEntry, depth: number) => {},
    false,
    null
]);

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
    const [depth, updateEntry, _ , tocRef] = useContext(ContentsContext);

    return (
        <ContentsContext.Provider
            value={[depth + 1, (entry: TOCEntry, depth: number) => updateEntry(entry, depth), unofficial, tocRef]}
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
    const [depth, updateEntry, unofficial, tocRef] = useContext(ContentsContext);
    useEffect(() => {
        updateEntry({ id, unofficial, title: children }, depth);
    }, [tocRef?.current]);
    return (
        <NoClickContext.Provider value={true}>
            <a href={`#${id}`} id={id} style={style} className={classNames('title', className)}>
                {children}
            </a>
        </NoClickContext.Provider>
    );
};
