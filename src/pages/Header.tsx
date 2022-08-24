import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import './Header.scss';

export const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
};

const Header = ({ language, setLanguage }: { language: string; setLanguage: (lang: string) => void }) => {
    const location = useLocation();
    const query = useQuery();
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="header">
            <div className="lang-select">
                <select
                    value={language}
                    onChange={(e) => {
                        const url = new URL(location.pathname + location.search);
                        url.searchParams.set('language', e.target.value);
                        setLanguage(e.target.value);
                        navigate(url.toString());
                    }}
                >
                    <option value="English">English</option>
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
