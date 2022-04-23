import { B, Eng, P, Section, Title } from '../elements';

export const contents = [{ id: 'pronunciation-and-syllable-structure', title: 'Pronunciation and Syllable Structure' }];

export const Pronunciation = () => {
    return (
        <>
            <Section>
                <Title id="pronunciation-and-syllable-structure">Pronunciation and Syllable Structure</Title>
                <P>
                    The phonology of toki ma is designed to be reasonably easy to pronounce for speakers of a wide
                    variety of native languages.
                </P>
                <table>
                    <caption>Vowels</caption>
                    <thead>
                        <tr>
                            <td>Standard Representation</td>
                            <td>
                                Ideal <a href="">IPA</a> Pronunciation
                            </td>
                            <td>English Sound Hint</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td>
                                <a href="">/a/</a>
                            </td>
                            <td>a in father</td>
                        </tr>
                        <tr>
                            <td>e</td>
                            <td>
                                <a href="">/e/</a>
                            </td>
                            <td>ay in may</td>
                        </tr>
                        <tr>
                            <td>i</td>
                            <td>
                                <a href="">/i/</a>
                            </td>
                            <td>ee in meet</td>
                        </tr>
                        <tr>
                            <td>o</td>
                            <td>
                                <a href="">/o/</a>
                            </td>
                            <td>o in more</td>
                        </tr>
                        <tr>
                            <td>u</td>
                            <td>
                                <a href="">/u/</a>
                            </td>
                            <td>oo in food</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table>
                    <caption>Consonants</caption>
                    <thead>
                        <tr>
                            <td>Standard Representation</td>
                            <td>
                                Ideal <a href="">IPA</a> Pronunciation
                            </td>
                            <td>English Sound Hint</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p</td>
                            <td>
                                <a href="">/p/</a>
                            </td>
                            <td>p in spin</td>
                        </tr>
                        <tr>
                            <td>t</td>
                            <td>
                                <a href="">/t/</a>
                            </td>
                            <td>t in stir</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>
                                <a href="">/k/</a>
                            </td>
                            <td>k in sky</td>
                        </tr>
                        <tr>
                            <td>m</td>
                            <td>
                                <a href="">/m/</a>
                            </td>
                            <td>m in map</td>
                        </tr>
                        <tr>
                            <td>n</td>
                            <td>
                                <a href="">/n/</a>
                            </td>
                            <td>n in nap</td>
                        </tr>
                        <tr>
                            <td>l</td>
                            <td>
                                <a href="">/l/</a>
                            </td>
                            <td>l in land</td>
                        </tr>
                        <tr>
                            <td>w</td>
                            <td>
                                <a href="">/w/</a>
                            </td>
                            <td>w in win</td>
                        </tr>
                        <tr>
                            <td>j</td>
                            <td>
                                <a href="">/j/</a>
                            </td>
                            <td>y in year</td>
                        </tr>
                        <tr>
                            <td>s</td>
                            <td>
                                <a href="">/s/</a>
                            </td>
                            <td>s in soap</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <P>
                    Every syllable in toki ma must <B>start with a consonant</B>, with one exception: the first syllable
                    in a word may start with just a vowel. There are no <B>vowel clusters</B> in toki ma, such as the{' '}
                    <Eng>"io"</Eng> in <Eng>"ion"</Eng>, even when they occur in separate syllables like that example.
                    Syllables can optionally end with "n", otherwise they simply end with a vowel.
                </P>
                <P>
                    Additionally there are <B>logographic</B> representations of toki ma, using a different symbol to
                    represent each word. With so few words, this is not as daunting to learn as it is in many other
                    languages. This guide includes a section on using Emoji as a international logography, called Lika
                    Emoji.
                </P>
            </Section>
        </>
    );
};
