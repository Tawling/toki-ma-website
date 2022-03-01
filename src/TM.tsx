import classNames from 'classnames';
import React, { createContext, useContext } from 'react';
import TMWord from './TMWord';

export const ClickContext = createContext(false);

interface Props {
    id?: string;
    children?: React.ReactElement | string | Iterable<React.ReactElement | string>;
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
    return element;
};


const TM = ({ id, children, className, style, noclick = false }: Props) => {
    const noclickContext = useContext(ClickContext);
    const key = { key: 0 };
    const click = noclick || noclickContext;
    if (Array.isArray(children)) {
        return (
            <span className={classNames('tm', className)} id={id} style={style}>
                {children.map((item: string | React.ReactElement) => {
                    return typeof item === 'string' ? splitWords(item, click, key) : splitElement(item, click, key);
                })}
            </span>
        );
    } else {
        return (
            <span className={classNames('tm', className)} id={id} style={style}>
                {typeof children === 'string'
                    ? splitWords(children, click, key)
                    : splitElement(children as React.ReactElement, click, key)}
            </span>
        );
    }
};

export default TM;
