/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from '../i18n/locales/en/translations.json';

describe('Pages', () => {
    describe('Header', () => {
        describe('Language Selector', () => {
            beforeAll(() => {
                i18n.use(initReactI18next).init({
                    fallbackLng: 'en',
                    lng: 'en',
                    resources: {
                        en: {
                            translations: englishTranslation,
                        },
                    },
                    ns: ['translations'],
                    defaultNS: 'translations',
                });

                i18n.languages = ['en'];
            });
            it('should be present in the Header', () => {
                const component = render(
                    <BrowserRouter>
                        <Header language={'English'} onChangeLanguage={() => {}} />
                    </BrowserRouter>,
                );

                const element: HTMLElement | null = component.container.querySelector('#lang-select');
                expect(element).not.toBeNull();
            });
        });
    });
});
