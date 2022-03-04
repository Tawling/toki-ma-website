export const isIterable = (obj: any) => {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
};

export const isReactElement = (value: any) => {
    if (value == null) {
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