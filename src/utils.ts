export const isIterable = (obj: any) => {
    if (!obj) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
};

export const isReactElement = (value: any) => {
    if (!value) {
        return false;
    }
    if (typeof value === 'object') {
        return value.$$typeof === Symbol.for('react.element');
    }
    return false;
};

export const hasChildren = (value: any) => {
    return isReactElement(value) && value?.props.children;
};
