import classNames from 'classnames';
import { Section } from '../elements';
import { TOCEntry } from '../Section';

const mapEntry = (entry: TOCEntry) => {
    return (
        <li key={entry.id} className={classNames({ unofficial: entry.unofficial })}>
            <a href={`#${entry.id}`}>{entry.title}</a>
            {entry.children?.length ? <ul>{entry.children?.map((entry) => mapEntry(entry))}</ul> : null}
        </li>
    );
};

export const Contents = ({ entryList }: { entryList: TOCEntry[] }) => {
    console.log(entryList);
    return (
        <div className="toc">
            {entryList.map((entry) => mapEntry(entry))}
        </div>
    );
};

export default Contents;
