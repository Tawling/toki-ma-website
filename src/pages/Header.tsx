import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavLink, useSearchParams } from 'react-router-dom';

import './Header.scss';

export interface Props {
    availableLanguages?: string[];
    language: string;
    onChangeLanguage: (lang: string) => void;
}

const Header = ({ language, onChangeLanguage, availableLanguages = ['English'] }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { t } = useTranslation();
    return (
        <div className="header">
            <div id="lang-select">
                <select
                    value={language}
                    onChange={(e) => {
                        searchParams.set('language', e.target.value);
                        setSearchParams(searchParams);
                        onChangeLanguage(e.target.value);
                    }}
                >
                    {availableLanguages.map((lang, index) => (
                        <option key={index} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
            <div className="title-text">TOKI MA</div>
            <div className="nav-bar">
                <NavLink
                    className={(active) => classNames('nav-item', { active })}
                    to={`/?language=${language || 'English'}`}
                >
                    {t('navAbout')}
                    <br />
                    sona
                </NavLink>
                <NavLink
                    className={(active) => classNames('nav-item', { active })}
                    to={`/dictionary?language=${language || 'English'}`}
                >
                    {t('navDictionary')}
                    <br />
                    lipu pi sankan
                </NavLink>
                <NavLink
                    className={(active) => classNames('nav-item', { active })}
                    to={`/grammar?language=${language || 'English'}`}
                >
                    {t('navGrammar')}
                    <br />
                    tisi pi toki
                </NavLink>
                <NavLink
                    className={(active) => classNames('nav-item', { active })}
                    to={`/tools?language=${language || 'English'}`}
                >
                    {t('navTools')}
                    <br />
                    ilo
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
