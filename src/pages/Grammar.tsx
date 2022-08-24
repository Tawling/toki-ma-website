import React, { useContext } from 'react';
import { LanguageContext } from '../contexts';
import English from './grammar/English';

export const Grammar = () => {
    const language = useContext(LanguageContext);
    switch (language) {
        case 'English':
        default:
            return <English />;
    }
};

export default Grammar;
