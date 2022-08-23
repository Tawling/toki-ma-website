import { P } from '../components/elements';
import { Section, Title } from '../components/sections';

export const contents = [{ id: 'introduction', title: 'Introduction' }];

export const Introduction = () => {
    return (
        <div className="page">
            <h1>About Toki Ma</h1>
            <P>
                Toki Ma is an International Auxiliary Language (IAL). It was based on Toki Pona, a minimalist language
                created by Sonja Lang. Much of Toki Ma's vocabulary, grammar, and style also derive from Toki Pona.
            </P>
            <P>
                Toki Ma was created to better serve the goal of being an International Auxiliary Language. It added a
                more definitive and expansive grammar, and many words to Toki Pona, with this goal in mind. In addition,
                the various philosophical goals of Toki Pona, along with the idea of testing the Sapir-Whorf hypothesis,
                are also absent from the idea of Toki Ma.
            </P>
            <P>
                The problem with other IALs, and learning any language in general, is memorizing grammatical quirks and
                thousands of words. The hardest stage of learning any language is moving past the "hello, my name is X"
                stage to fluency.
            </P>
            <P>
                While many IALs solve the grammar part of this conundrum by introducing simpler grammar than natural
                languages, few try to solve the vocabulary problem.
            </P>
            <P>
                Humans are lazy. Expecting us to memorize thousands of words to be fluent in a language is the reason
                why IALs have failed in the past. Toki Ma takes a different approach.
            </P>
            <P>
                There are a total of 290 words in this guide. The grammar is also quite simple. Simple enough that the
                grammar "textbook" would only be about 30 pages. This means that this language can be very easily
                learned but it is also incredibly powerful.
            </P>
            <P>
                Reading this guide will give you a detailed understanding of the language, complete with essentially all
                the grammar quirks, vocabulary, and some common phrases and usage, along with links to further
                resources, guides, and learning/practice tools.
            </P>
        </div>
    );
};

export default Introduction;
