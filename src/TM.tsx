import classNames from 'classnames';
import React, { createContext, useContext } from 'react';
import TMWord from './TMWord';

export const ClickContext = createContext(false);

interface Props {
    id?: string;
    children?: any;
    className?: string | object;
    style?: object;
    noclick?: boolean;
}

const splitWords = (words: string, noclick: boolean, key: { key: number }) => {
    if (noclick) return words;
    const split = words.split(/\b/);
    return split.map((word) => {
        if (/^[a-z]+$/i.test(word)) {
            return <TMWord key={key.key++}>{word}</TMWord>;
        }
        return word;
    });
};

const splitElement = (element: React.ReactElement, noclick: boolean, key: { key: number }) => {
    const children = element.props.children as string;
    if (typeof children === 'string' && !(element.props.noclick || noclick)) {
        element = { ...element, props: { ...element.props, children: splitWords(children, noclick, key) } };
    }
    return element as React.ReactElement;
};

const splitChildren = (children: any, noclick: boolean, key: { key: number }): React.ReactNode => {
    if (!children) return children;
    if (typeof children === 'string') {
        return splitWords(children, noclick, key);
    } else if (typeof children === 'object' && 'props' in children) {
        if ('children' in children.props) {
            return splitElement(children, noclick, key);
        } else {
            return children;
        }
    } else if (Array.isArray(children) || Symbol.iterator in children) {
        return [...children].map((child) => splitChildren(child, noclick, key));
    } else {
        return children;
    }
};

const TM = ({ id, children, className, style, noclick = false }: Props) => {
    const noclickContext = useContext(ClickContext);
    const key = { key: 0 };
    const click = noclick || noclickContext;
    return (
        <span className={classNames('tm', className)} id={id} style={style}>
            {splitChildren(children, click, key)}
        </span>
    );
};

export default TM;
