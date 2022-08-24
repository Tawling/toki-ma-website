import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { TOCEntry } from './sections';

const mapEntry = (entry: TOCEntry) => {
    return (
        <li key={entry.id} className={classNames({ unofficial: entry.unofficial })}>
            <a href={`#${entry.id}`}>{entry.title}</a>
            {entry.children?.length ? <ul>{entry.children?.map((entry) => mapEntry(entry))}</ul> : null}
        </li>
    );
};

export const TableOfContents = ({ entryList }: { entryList: TOCEntry[] }) => {
    console.log(entryList);
    return <div className="toc">{entryList.map((entry) => mapEntry(entry))}</div>;
};

export const useTableOfContents = (): [
    JSX.Element,
    [number, (entry: TOCEntry, depth: number) => void, boolean, React.MutableRefObject<TOCEntry[]>],
    () => void,
] => {
    const tocRef = useRef<TOCEntry[]>([]);
    const [component, setComponent] = useState(<TableOfContents entryList={[]} />);
    const updateToC = (entry: TOCEntry, depth: number) => {
        let arr = tocRef.current;
        for (let i = 0; i < depth; i++) {
            if (!arr[arr.length - 1].children) {
                arr[arr.length - 1].children = [];
            }
            arr = arr[arr.length - 1].children as TOCEntry[];
        }
        arr.push(entry);
        setComponent(<TableOfContents entryList={arr} />);
    };
    return [
        component,
        [0, updateToC, false, tocRef],
        () => {
            tocRef.current = [];
            setComponent(<TableOfContents entryList={[]} />);
        },
    ];
};

export default TableOfContents;
