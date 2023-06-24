import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { fetchWordList, WordList } from './words';
import Popover from './Popover';
import { GetDefContext, LanguageContext, WordListContext } from './contexts';
import Grammar from './pages/Grammar';
import Header from './pages/Header';
import Introduction from './pages/Introduction';
import SimpleDictionary from './pages/SimpleDictionary';

function App() {
    const [popoverRef, setPopoverRef] = useState(null as null | React.MutableRefObject<null | HTMLSpanElement>);
    const [popoverWord, setPopoverWord] = useState('');

    const [wordList, setWordList] = useState({} as WordList); //useState({ words: {}, labels: {} } as WordList);

    const appRef = useRef<HTMLDivElement>(null);

    const [language, setLanguage] = useState('English');

    // useEffect(() => {
    //     fetchWordList(language).then((list) => setWordList(list));
    // }, [language]);

    useEffect(() => {
        const event = () => {
            setPopoverRef(null);
            setPopoverWord('');
        };
        window.addEventListener('click', event);
        return () => window.removeEventListener('click', event);
    });

    return (
        <LanguageContext.Provider value={language}>
            <WordListContext.Provider value={wordList}>
                <Popover word={popoverWord} span={popoverRef} app={appRef} wordList={wordList} />
                <GetDefContext.Provider
                    value={(word: string, ref: React.MutableRefObject<null | HTMLSpanElement>) => {
                        console.log(word);
                        setPopoverRef(ref === popoverRef ? null : ref);
                        setPopoverWord(word);
                    }}
                >
                    <div ref={appRef} className={classNames('App', language)}>
                        <Header language={language} onChangeLanguage={setLanguage} />
                        <Routes>
                            <Route path="/tokima" element={<Introduction />} />
                            <Route path="/tokima/dictionary" element={<SimpleDictionary />} />
                            <Route path="/tokima/grammar" element={<Grammar />} />
                            <Route path="/tokima/tools" element={<></>} />
                        </Routes>
                    </div>
                </GetDefContext.Provider>
            </WordListContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
