import classNames from 'classnames';
import React, { createContext, useContext } from 'react';
import TMWord from './TMWord';
import { hasChildren, isIterable } from '../utils';

export const NoClickContext = createContext(false);

interface Props {
    id?: string;
    children?: any;
    className?: string | object;
    style?: object;
    noclick?: boolean;
}

const splitWords = (words: string, key: { key: number }) => {
    const split = words.split(/\b/);
    return split.map((word) => {
        if (/^[a-z]+$/i.test(word)) {
            return <TMWord key={key.key++}>{word}</TMWord>;
        }
        return word;
    });
};

const splitChildren = (children: any, key: { key: number }): React.ReactNode => {
    if (!children) return children;
    if (typeof children === 'string') {
        return splitWords(children, key);
    }
    if (isIterable(children)) {
        return [...children].map((child) => splitChildren(child, key));
    }
    if (hasChildren(children)) {
        // is a ReactNode with children
        return {
            ...children,
            props: { ...children.props, children: splitChildren(children.props.children, key) },
        };
    }
    return children;
};

const TM = ({ id, children, className, style, noclick = false }: Props) => {
    const noclickContext = useContext(NoClickContext);
    const key = { key: 0 };
    const click = noclick || noclickContext;
    return (
        <NoClickContext.Provider value={click}>
            <span className={classNames('tm', className)} id={id} style={style}>
                {splitChildren(children, key)}
            </span>
        </NoClickContext.Provider>
    );
};

export default TM;
