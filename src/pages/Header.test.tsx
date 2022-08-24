/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Pages', () => {
    describe('Header', () => {
        describe('Language Selector', () => {
            it('should be present in the Header', () => {
                const component = render(
                    <BrowserRouter>
                        <Header language={'English'} onChangeLanguage={() => {}} />
                    </BrowserRouter>,
                );

                const element: HTMLElement | null = component.container.querySelector('#lang-select');
                expect(element).not.toBeNull();
                if (element) element.click();
            });
        });
    });
});
