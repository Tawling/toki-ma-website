import React, { ReactElement, useContext, useEffect, useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import TM, { ClickContext } from './TM';
import { fetchWordList, WordList, WordListContext } from './words';
import { GetDefContext } from './TMWord';
import Popover from './Popover';

const BlurContext = React.createContext(true);
const UnofficialContext = React.createContext(true);

interface Props {
    id?: string;
    children?: React.ReactNode;
    className?: string | object;
    style?: object;
}

const spanType =
    (cls: string) =>
    ({ id, children, className, style }: Props) =>
        (
            <span id={id} style={style} className={classNames(cls, className)}>
                {children}
            </span>
        );

const divType =
    (cls: string) =>
    ({ id, children, className, style }: Props) =>
        (
            <div id={id} style={style} className={classNames(cls, className)}>
                {children}
            </div>
        );

const Answer = ({ id, children, className }: Props) => {
    const [hidden, setHidden] = useState(true);
    const blur = useContext(BlurContext);
    return (
        <span
            id={id}
            onClick={() => setHidden(!hidden)}
            className={classNames('answer', className, { hidden: blur && hidden })}
        >
            <span className="spacer"> - </span>
            {children}
        </span>
    );
};

const See = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <ClickContext.Provider value={true}>
        <a className="see" href={`#${href}`}>
            [See section on <span>{children}</span> for more]
        </a>
    </ClickContext.Provider>
);

const Section = ({
    id,
    children,
    className,
    style,
    unofficial = false,
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string | object;
    style?: object;
    unofficial?: boolean;
}) => (
    <div id={id} className={classNames('section', className, { unofficial })} style={style}>
        {children}
    </div>
);

const Title = ({ id, children, className, style }: Props) => (
    <ClickContext.Provider value={true}>
        <a href={`#${id}`} id={id} style={style} className={classNames('title', className)}>
            {children}
        </a>
    </ClickContext.Provider>
);

// const TM = spanType('tm');
const Examples = divType('examples');
const Word = spanType('word');
const B = spanType('bold');
const P = divType('expos');
const Ex = divType('example');
const Eng = spanType('eng');
const Unofficial = divType('unofficial');
const TODO = divType('todo');
const Separator = divType('separator');

function App() {
    const [blur, setBlur] = useState(true);
    const [showUnofficial, setUnofficial] = useState(true);

    const [popoverRef, setPopoverRef] = useState(null as null | React.MutableRefObject<null | HTMLSpanElement>);
    const [popoverWord, setPopoverWord] = useState('');

    const [wordList, setWordList] = useState({ words: {}, labels: {} } as WordList);

    useEffect(() => {
        fetchWordList().then((list) => setWordList(list));
    }, []);

    useEffect(() => {
        window.addEventListener('click', (event) => {
            setPopoverRef(null);
            setPopoverWord('');
        });
    });
    return (
        <WordListContext.Provider value={wordList}>
            <Popover word={popoverWord} span={popoverRef}></Popover>
            <GetDefContext.Provider
                value={(word: string, ref: React.MutableRefObject<null | HTMLSpanElement>) => {
                    console.log(word);
                    setPopoverRef(ref === popoverRef ? null : ref);
                    setPopoverWord(word);
                }}
            >
                <UnofficialContext.Provider value={showUnofficial}>
                    <BlurContext.Provider value={blur}>
                        <div className={classNames('App', { 'no-unofficial': !showUnofficial })}>
                            <h1 className="header">Complete Guide to toki ma Grammar</h1>
                            <h2>Written by jan Ta</h2>
                            <P>
                                Due to the nature of the language, toki ma is made up of a small set of relatively
                                simple grammatical constructions, but that isn't to say that it is not possible to
                                represent complex ideas. These simple constructions can be used together to great
                                effect. This guide will provide explanations of these constructions and examples of
                                their use in an attempt to document both the general language grammar rules, and more
                                specific, smaller constructions seen in common use.
                            </P>
                            <P>
                                <Eng style={{ display: 'block' }}>
                                    <B>
                                        This guide will have example sentences in toki ma, and blurred translations in
                                        English. Click the translations to reveal them. You are highly encouraged to try
                                        translating the examples before peeking!
                                    </B>
                                    <br />
                                    <br />
                                    If you really don't want the blur,{' '}
                                    <button onClick={() => setBlur(!blur)}>click here</button> to toggle it on and off
                                    for everything.
                                    <br />
                                    <br />
                                    Blur is <B>{blur ? 'on' : 'off'}</B>.
                                </Eng>
                            </P>
                            <P className="unofficial no-hide">
                                <br />
                                This guide also contains some unofficial grammar rules and constructions. These are
                                shown by default, but you can{' '}
                                <button onClick={() => setUnofficial(!showUnofficial)}>click here</button> to show or
                                hide them.
                                <br />
                                <br />
                                Unofficial content is <B>{showUnofficial ? 'on' : 'off'}</B>.
                            </P>
                            <Separator>* * *</Separator>
                            <h2>Table of Contents</h2>
                            <div className="toc">
                                <a href="#word-derivations">Word Derivations</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#base-nouns">Base Nouns</a>
                                    </li>
                                    <li>
                                        <a href="#base-modifiers">Base Modifiers</a>
                                    </li>
                                    <li>
                                        <a href="#base-verbs">Base Verbs</a>
                                    </li>
                                </ul>
                                <a href="#basic-sentence-structure">Basic Sentence Structure</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#li">
                                            <TM noclick>li</TM> - Using Verbs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#parts-of-speech">Parts of Speech</a>
                                    </li>
                                    <li>
                                        <a href="#e">
                                            <TM noclick>e</TM> - Direct Objects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#o">
                                            <TM noclick>o</TM> - Commands and Requests
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#word-order">Word Order: SVO and SOV</a>
                                    </li>
                                    <li>
                                        <a href="#modifiers">Modifiers</a>
                                    </li>
                                    <ul>
                                        <li>
                                            <a href="#pi">
                                                <TM noclick>pi</TM> - Relations and "Of"
                                            </a>
                                        </li>
                                        <li className="unofficial">
                                            <a href="#lu">
                                                <TM noclick>lu</TM> - Shallow Grouping
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#li-lon">
                                                <TM noclick>li lon</TM> - To Exist
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                                <a href="#adding-complexity">Adding Complexity</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#te">
                                            <TM noclick>te</TM> - Subordinate Clauses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#punctuation">Punctuation</a>
                                    </li>
                                    <li>
                                        <a href="#negation">Negation</a>
                                    </li>
                                    <li>
                                        <a href="#cause-and-effect">Cause and Effect</a>
                                    </li>
                                    <ul>
                                        <li>
                                            <a href="#wa">
                                                <TM noclick>wa</TM> - Causatives
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nen">
                                                <TM noclick>nen</TM> - Because Of
                                            </a>
                                        </li>
                                    </ul>
                                    <li>
                                        <a href="#conjunctions">Conjunctions</a>
                                    </li>
                                    <ul>
                                        <li>
                                            <a href="#en-anu-lekin">
                                                <TM noclick>en</TM>/<TM noclick>anu</TM>/<TM noclick>lekin</TM> -
                                                And/Or/But
                                            </a>
                                        </li>
                                        <li className="unofficial">
                                            <a href="#sequentiality">Sequentiality</a>
                                        </li>
                                    </ul>
                                    <li>
                                        <a href="#asking-questions">Asking Questions</a>
                                    </li>
                                </ul>
                                <a href="#setting-the-scene">Setting the Scene</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#tense-and-aspect">Tense and Aspect</a>
                                    </li>
                                    <ul>
                                        <li>
                                            <a href="#open-pini">
                                                <TM noclick>open</TM>/<TM noclick>pini</TM> - Starting and Finishing
                                            </a>
                                        </li>
                                    </ul>
                                    <li>
                                        <a href="#units-of-time">Units of Time</a>
                                    </li>
                                    <li>
                                        <a href="#la-ita">
                                            <TM noclick>la</TM>/<TM noclick>ita</TM> - Marking Context
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#specifying-topics">Specifying Topics</a>
                                    </li>
                                    <li>
                                        <a href="#conditionals">Conditionals</a>
                                    </li>
                                    <li>
                                        <a href="#an">
                                            <TM noclick>an</TM> - In/At/On
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#mood">Mood</a>
                                    </li>
                                </ul>
                                <a href="#taking-action">Taking Action</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#pali">
                                            <TM noclick>pali</TM> - Generic Action
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pelu">
                                            <TM noclick>pelu</TM> - Using
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#kan">
                                            <TM noclick>kan</TM> - With
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#ki">
                                            <TM noclick>ki</TM> - To
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tan">
                                            <TM noclick>tan</TM> - From
                                        </a>
                                    </li>
                                </ul>
                                <a href="#specifying-further">Specifying Further</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#su">
                                            <TM noclick>su</TM> - Comparisons and Similarity
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#superlatives">Superlatives</a>
                                    </li>
                                </ul>
                                <a href="#numbers-and-mathematics">Numbers and Mathematics</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#forming-numbers">Forming Numbers</a>
                                    </li>
                                    <li className="unofficial">
                                        <a href="#zero">Zero</a>
                                    </li>
                                    <li>
                                        <a href="#cardinals-and-ordinals">Cardinals and Ordinals</a>
                                    </li>
                                    <li>
                                        <a href="#fractions-decimals-and-percents">Fractions, Decimals, and Percents</a>
                                    </li>
                                    <li>
                                        <a href="#negative-numbers">Negative Numbers</a>
                                    </li>
                                    <li>
                                        <a href="#mathematical-operations">Mathematical Operations</a>
                                    </li>
                                </ul>
                                <a href="#misc">Miscellaneous</a>
                                <br />
                                <ul>
                                    <li>
                                        <a href="#cardinal-directions">Cardinal Directions</a>
                                    </li>
                                    <li>
                                        <a href="#names-and-foreign-words">Names and Foreign Words</a>
                                    </li>
                                    <li>
                                        <a href="#peko-and-a">
                                            <TM noclick>peko</TM> and <TM noclick>a</TM>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#notes">Notes</a>
                                    </li>
                                </ul>
                                <a href="#conversations">Conversational Examples</a>
                            </div>
                            <Separator>* * *</Separator>
                            <div className="vocab-note">
                                <h3>Vocabulary</h3>
                                This guide assumes you have some familiarity with the toki ma vocabulary. Words that
                                directly affect the grammar are explained here in the guide, but other words used in the
                                example sentences may not be.
                                <br />
                                <br />
                                You can <B>click on any toki ma word</B> to see a definition of the word if you need it.
                                {/* TODO: list words */}
                            </div>
                            <Title id="word-derivations" className="major">
                                Word Derivations
                            </Title>
                            <P>
                                Before we start with grammar, it's important to know how the flexible vocabulary of toki
                                ma can be derived from the base definitions of its words. Aside from a select few
                                irregular words,{' '}
                                <B>any noun, verb, or modifier can be converted to one of the other two word forms</B>{' '}
                                using consistent rules.
                            </P>
                            <Section>
                                <Title id="base-nouns">Base Nouns</Title>
                                <P>
                                    <Word>Base nouns</Word> are very simple to convert into verbs and modifiers. When a{' '}
                                    <B>noun</B> is used as a <B>verb</B>, it just means the verb phrase{' '}
                                    <Eng>"to be [the noun]</Eng>. When used as a <B>modifier</B>, it becomes{' '}
                                    <Eng>"of [the noun]"</Eng> or <Eng>"relating to [the noun]</Eng>.
                                </P>
                                <P>
                                    As a <B>noun</B>, <TM>jan</TM> means <Eng>"person"</Eng>.<br />
                                    As a <B>verb</B> it means <Eng>"is a person"</Eng> or <Eng>"to be a person"</Eng>.
                                    <br />
                                    As a <B>modifier</B> it means <Eng>"of a person"</Eng>.
                                </P>
                            </Section>
                            <Section>
                                <Title id="base-modifiers">Base Modifiers</Title>
                                <P>
                                    <Word>Base modifiers</Word> are also quite easy to convert. When a <B>modifier</B>{' '}
                                    is used as a <B>noun</B>, it becomes the <Word>abstract object</Word> of the
                                    modifier. Think of it like adding <Eng>"-ness"</Eng> to the word. When used as a{' '}
                                    <B>verb</B>, it also just means <Eng>"to be [the modifier]"</Eng> or{' '}
                                    <Eng>"is [the modifier]"</Eng>.
                                </P>
                                <P>
                                    As a <B>modifier</B>, <TM>lete</TM> means <Eng>"cold"</Eng>.<br />
                                    As a <B>noun</B> it means <Eng>"coldness"</Eng>.<br />
                                    As a <B>verb</B> it means <Eng>"is cold"</Eng> or <Eng>"to be cold"</Eng>.
                                </P>
                            </Section>
                            <Section>
                                <Title id="base-verbs">Base Verbs</Title>
                                <P>
                                    <Word>Base verbs</Word> are the trickiest of the three, but still not very tough.
                                    When a <B>verb</B> is used as a <B>noun</B>, it becomes the{' '}
                                    <Word>generic object</Word> of the verb: the{' '}
                                    <B>most basic object you would normally do the verb to</B>. For example, the{' '}
                                    <B>generic object</B> of <Eng>"to sit"</Eng> would be <Eng>"chair"</Eng> or{' '}
                                    <Eng>"seat"</Eng>. The <B>generic object</B> of <Eng>"to use"</Eng> would be{' '}
                                    <Eng>"tool"</Eng>. When used as a <B>modifier</B>, it means{' '}
                                    <Eng>"[generic object]-like"</Eng> or <Eng>"resembling [the generic object]"</Eng>.
                                </P>
                                <P>
                                    As a <B>verb</B>, <TM>moku</TM> means <Eng>"to eat"</Eng> or <Eng>"to consume"</Eng>
                                    .<br />
                                    As a <B>noun</B> it means <Eng>"food"</Eng>.<br />
                                    As a <B>modifier</B> it means <Eng>"food-like"</Eng>, or <Eng>"edible"</Eng>.
                                </P>
                            </Section>
                            <P>
                                These rules apply to <B>almost every</B> word in toki ma, with only a few irregular
                                words such as <B>body parts</B>. Check{' '}
                                <a href="https://toki-ma.com/?page=dictionary">the dictionary</a> for proper definitions
                                of irregulars in all forms.
                            </P>
                            <Title id="basic-sentence-structure" className="major">
                                Basic Sentence Structure
                            </Title>
                            <Section>
                                <Title id="li">
                                    <TM>li</TM> - Using Verbs
                                </Title>
                                <P>
                                    The most basic particle <TM>li</TM> <B>marks the verb</B> of a sentence. Without it,
                                    you could only talk about nouns and adjectives!
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li moku</TM>
                                        <Answer>
                                            <Eng>"I am eating"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>si li jan</TM>
                                        <Answer>
                                            <Eng>"You are a person"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>on li lete</TM>
                                        <Answer>
                                            <Eng>"They are cold"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    It's a bit confusing here just due to how English works, but it's very important not
                                    to get confused thinking <TM>li</TM> means <Eng>"to be"</Eng>. That comes from the
                                    verb forms of the words <TM>moku</TM>, <TM>jan</TM>, and <TM>lete</TM> themselves.
                                    The role of <TM>li</TM> is <B>only</B> to mark that the following word{' '}
                                    <B>should be interpreted as a verb</B>.
                                </P>
                                <P>
                                    While these translations are valid, it's important to note that <TM>li</TM> alone
                                    does not say anything about the <Word>tense</Word>, meaning <B>past</B> (
                                    <Eng>"I was eating"</Eng>), <B>present</B> (<Eng>"I am eating"</Eng>), or{' '}
                                    <B>future</B> (<Eng>"I will be eating"</Eng>), or about the <Word>aspect</Word>,
                                    meaning <B>perfective</B> (completed action, <Eng>I ate</Eng>), continuous (ongoing
                                    action, <Eng>I am eating</Eng>), or repeated (habitual action, <Eng>I eat</Eng>
                                    ). These are all valid translations of the sentence <TM>mi li moku</TM>. Which one
                                    is meant must be inferred through context.
                                </P>
                                <P>
                                    Later we will learn more ways to specify tense and aspect to remove this ambiguity.
                                    For now, example sentences will just assume one for convenience.
                                </P>
                                <P>
                                    When using <TM>li</TM> <B>without a subject</B>, the sentence usually becomes a
                                    statement simply
                                    <B>that an action is performed</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>li moku e kili</TM>
                                        <Answer>
                                            <Eng>"Fruit is eaten"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>li lape</TM>
                                        <Answer>
                                            <Eng>"Sleep is had"</Eng>, <Eng>"Sleeping is done"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    In English this sounds a bit awkward, but it is a clearly communicated concept and
                                    is completely acceptable in toki ma. How often you might say such a thing is a
                                    different question.
                                </P>
                            </Section>
                            <Section>
                                <Title id="ambiguity">Ambiguity</Title>
                                <P>
                                    It has already been said, but it is important to reiterate: with so few words,
                                    communication in toki ma is often driven by context to resolve ambiguities without
                                    having to resort to much longer descriptions of very simple things. Being specific
                                    is often not a major goal of a toki ma speaker in casual conversation, because the
                                    listener can often figure out the details without major problems.
                                </P>
                                <P>
                                    When you read examples in this guide,{' '}
                                    <B>don't worry if you didn't get it exactly the same as the stated translation</B>.
                                    It doesn't mean you were wrong if you read <TM>mi li moku</TM> as{' '}
                                    <Eng>"I am eating"</Eng> and the translation says <Eng>"I eat"</Eng>. Keep this in
                                    mind as you read the rest of this guide.
                                </P>
                            </Section>
                            <Section>
                                <Title id="parts-of-speech">Parts of Speech</Title>
                                <P>
                                    We've learned how to derive words in the different parts of speech, but we haven't
                                    learned how to recognize words in different parts of speech. What makes{' '}
                                    <TM>moku</TM> sometimes mean <Eng>"to eat"</Eng>, sometimes mean <Eng>"food"</Eng>{' '}
                                    and sometimes mean <Eng>"edible"</Eng>? It all has to do with where the word is in
                                    the sentence.
                                </P>
                                <P>
                                    You know now that <TM>li</TM> makes the following word a <B>verb</B>. That is the{' '}
                                    <B>only</B> way that a word acts as a verb. When a word appears on its own, it's a{' '}
                                    <B>noun</B>, such as at the beginning of a sentence or after a <B>preposition</B>. A
                                    word following a noun or verb is a <B>modifier</B>. Modifiers can also follow other
                                    modifiers to stack together. We'll talk more about modifiers later.
                                    <See href="modifiers">Modifiers</See>
                                </P>
                                <P>
                                    <B>Prepositions</B> are words that link other parts of the sentence together,
                                    showing how words relate to each other. These are words like <Eng>"from"</Eng>,{' '}
                                    <Eng>"to"</Eng>, <Eng>"with"</Eng>, etc. There are only a few specific prepositions
                                    in toki ma, and they never act like any other part of speech. There are individual
                                    sections throughout the guide for each of the different prepositions.
                                </P>
                                <P>
                                    Lastly, there are <B>particles</B>. Particles are words that don't have meaning on
                                    their own, but are used to affect other parts of the sentence. For example,{' '}
                                    <TM>li</TM> is a particle because it doesn't mean anything on its own, but it
                                    affects the next word. Toki ma uses particles like <TM>li</TM>, <TM>te</TM> and{' '}
                                    <TM>la</TM> to modify the structure of sentences in various ways. More on those
                                    later, too.
                                </P>
                            </Section>
                            <Section>
                                <Title id="e">
                                    <TM>e</TM> - Direct Objects
                                </Title>
                                <P>
                                    Verbs can be <Word>intransitive</Word>, meaning they stand on their own, or{' '}
                                    <Word>transitive</Word>, meaning they act on something known as the{' '}
                                    <Word>direct object</Word>. The preposition <TM>e</TM>{' '}
                                    <B>marks the direct object</B> in the same way that <TM>li</TM> marks the verb.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li moku e kili</TM>
                                        <Answer>
                                            <Eng>"I am eating fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The particle <TM>e</TM> marks <TM>kili</TM> as the object of the verb <TM>moku</TM>.
                                    It's important to note that <TM>e</TM> is considered a preposition, not a particle.
                                    This is relevant because of word order, which we will discuss in a moment. Here are
                                    a few more examples:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li moku e telo</TM>
                                        <Answer>
                                            <Eng>"You are drinking water"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>on li ato e ato</TM>
                                        <Answer>
                                            <Eng>"They are driving a car"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan Ta li konta e toki ma</TM>
                                        <Answer>
                                            <Eng>"[the person named] Ta is learning toki ma"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="o">
                                    <TM>o</TM> - Commands and Requests
                                </Title>
                                <P>
                                    The particle <TM>o</TM> works the same way as <TM>li</TM>, marking the verb, except
                                    that it turns the statement into a <B>recommendation</B>, <B>suggestion</B>, or what
                                    the speaker believes <B>should</B> happen.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>on o moku e kili</TM>
                                        <Answer>
                                            <Eng>"They should eat fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan o pana e kili ki on</TM>
                                        <Answer>
                                            <Eng>"Someone should give them fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi o moku e kasi...</TM>
                                        <Answer>
                                            <Eng>"I should eat a vegetable..."</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    When used <B>without a subject</B>, the statement turns into a <B>command</B> or{' '}
                                    <B>request</B> of the listener, or a <B>desire for action</B> to be taken.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>o moku e kili</TM>
                                        <Answer>
                                            <Eng>"(you) Eat fruit!"</Eng> or <Eng>"I wish you would eat fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>o pasan</TM>
                                        <Answer>
                                            <Eng>"Be happy!"</Eng> a very common phrase used to mean{' '}
                                            <Eng>"Welcome!"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="word-order">Word Order: SVO and SOV</Title>
                                <P>
                                    A language such as toki ma is designed to be easy to learn for as many people as
                                    possible, regardless of their native language. Because of this,{' '}
                                    <B>
                                        toki ma supports both <Word>Subject-Object-Verb</Word> and{' '}
                                        <Word>Subject-Verb-Object</Word> sentence structures
                                    </B>
                                    .
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li moku e kili</TM>
                                        <Answer>
                                            <Eng>"I am eating fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi e kili li moku</TM>
                                        <Answer>
                                            <Eng>"I am eating fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    These two sentences are <B>both allowed</B>. Any <Word>subject</Word> must come
                                    first, but the <Word>verb</Word>, the <Word>object</Word>, and any other{' '}
                                    <Word>prepositional phrases</Word> may come in <B>any order</B> after it.
                                </P>
                            </Section>
                            <Section>
                                <Title id="modifiers">Modifiers</Title>
                                <P>
                                    Modifiers act as <Word>adjectives</Word> and <Word>adverbs</Word>, with the modifier
                                    coming <B>after</B> the modified word, not before as it is done in English. These
                                    modifiers can affect nouns as <B>adjectives</B>, or verbs as <B>adverbs</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            pawo <B>mi</B> li pona
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>My</B> dog is good"
                                            </Eng>{' '}
                                            (Yes, the adjective here is <Eng>"my"</Eng>. We don't usually talk about
                                            possessives as adjectives, but trust me they are!)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li moku e kili <B>mi</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I am eating <B>my</B> fruit"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            pawo <B>ni</B> li suli
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>This</B> dog is big"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            pawo <B>mi</B> li moku <B>mute</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>My</B> dog eats <B>a lot</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Modifiers can also affect <B>other modified phrases</B>, connecting together to form
                                    modifier chains. When modifiers are chained, each modifier{' '}
                                    <B>adds to the entire set of modifiers so far</B> on the noun.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            pawo <B>suli mi</B> li pona
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>My</B> <B>big</B> dog is good"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            jan <B>pona mute</B> li moku
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Many</B> <B>good</B> people are eating"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Wait a second, why does that second sentence say <Eng>"many good people"</Eng> and
                                    not <Eng>"a very good person"</Eng>? Remember that modifiers chain together{' '}
                                    <B>but apply to the whole noun phrase so far</B>, not just to the previous modifier.{' '}
                                    <TM>pona</TM> applies to <TM>jan</TM>, so now <TM>mute</TM> applies to the entire
                                    phrase <TM>jan pona</TM>, not just to <TM>pona</TM>. Think of it like parentheses in
                                    math class: <TM>((((jan pasan) lamo) pona) mute)</TM> -{' '}
                                    <Eng>many good, tall, happy people</Eng>.
                                </P>
                                <P>
                                    So how <B>do</B> you say <Eng>"a very good person"</Eng>? For that, we need to
                                    introduce a new preposition.
                                </P>

                                <Section>
                                    <Title id="pi">
                                        <TM>pi</TM> - Relations and "Of"
                                    </Title>
                                    <P>
                                        The preposition <TM>pi</TM> is used for the <Word>genitive case</Word>. Think of
                                        the genitive as a relational case, relating one thing to another. The best
                                        equivalence in English is the word <Eng>"of"</Eng>. It is very useful for{' '}
                                        <B>regrouping modifiers</B> rather than just chaining them endlessly to one
                                        noun.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>jan pona mute</TM>
                                            <Answer>
                                                <Eng>"many good people"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>jan pi pona mute</TM>
                                            <Answer>
                                                literally <Eng>"person (or people) of much goodness"</Eng>, or{' '}
                                                <Eng>"a very good person"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        By using <TM>pi</TM>, the word <TM>pona</TM> becomes a <B>noun</B> meaning{' '}
                                        <Eng>goodness</Eng>, which is modified by <TM>mute</TM>.
                                    </P>
                                    <P>
                                        It is also good for relating a noun to another noun, as is the standard use of
                                        the word <Eng>"of"</Eng>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>tomo moku</TM>
                                            <Answer>
                                                <Eng>"edible house</Eng>, maybe a gingerbread house?
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>tomo pi moku</TM>
                                            <Answer>
                                                <Eng>"house of food"</Eng>, possibly a restaurant or a kitchen
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        This second use is also good for specifying possessives beyond simply using{' '}
                                        <TM>mi</TM>, <TM>si</TM>, and <TM>on</TM>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>moku pi jan na</TM>
                                            <Answer>
                                                <Eng>"that person's food"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>pawo pi walala mi</TM>
                                            <Answer>
                                                <Eng>"my sibling's dog"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>tomo pi mama pi mama mi</TM>
                                            <Answer>
                                                literally <Eng>"house of the parent of my parent"</Eng>, meaning "my
                                                grandparent's house"
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        Like modifiers, <TM>pi</TM>-phrases also <B>chain onto each other</B>, making
                                        that last example read as: <TM>((tomo pi mama) pi mama mi)</TM> which would mean{' '}
                                        <Eng>"((parent's house) of my parent)"</Eng>, not{' '}
                                        <Eng>"(house of (the parent of my parent))"</Eng>.
                                    </P>
                                    <P>
                                        When using <TM>pi</TM> after a verb, the <TM>pi</TM>-phrase acts like an{' '}
                                        <B>adverbial phrase</B>, just like any other modifier would on a verb. This
                                        means the <TM>pi</TM>-phrase describes{' '}
                                        <B>the manner in which the verb is done</B>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>
                                                mi li toki <B>pi kalama mute</B>
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I talk <B>loudly</B>"
                                                </Eng>
                                                , literally{' '}
                                                <Eng>
                                                    "I talk <B>of much volume</B>"
                                                </Eng>
                                                <br />
                                                It's important to note that this doesn't say{' '}
                                                <Eng>
                                                    "I talk <B>about</B> much volume"
                                                </Eng>
                                                . The phrase <Eng>"of much volume"</Eng> describes{' '}
                                                <B>the manner in which the talking occurs</B>.
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                </Section>
                                <Section unofficial>
                                    <Title id="lu">
                                        <TM>lu</TM> - Shallow Grouping
                                    </Title>
                                    <P>
                                        The grouping of <TM>pi</TM> from left-to-right isn't an issue for the statement{' '}
                                        <TM>tomo pi mama pi mama mi</TM>, as it still translates to a phrase that means{' '}
                                        <Eng>"my grandparent's house"</Eng>, however there are some cases where it can
                                        cause issues. The variant preposition <TM>lu</TM> can be used to resolve this
                                        problem.
                                    </P>
                                    <P>
                                        <TM>lu</TM> acts the same as <TM>pi</TM>, except that it is used for{' '}
                                        <Word>shallow regrouping</Word>. Unlike <TM>pi</TM> which applies to everything
                                        coming before it, <TM>lu</TM> only applies to <B>the word directly before it</B>
                                        .
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>tomo pi mama lu mama mi</TM>
                                            <Answer>
                                                <Eng>"My grandparent's house"</Eng>, grouped as{' '}
                                                <Eng>"(house of (the parent of my parent))"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        This is mostly used when including compound-<TM>pi</TM> noun phrases in larger
                                        compound-
                                        <TM>pi</TM> constructions, such as common nouns like <TM>tomo pi moku</TM> for{' '}
                                        <Eng>"restaurant"</Eng> or <TM>into pi pali</TM> for <Eng>"office"</Eng>. In a
                                        compound situation, it may be easiest to always use <TM>lu</TM> to ensure that
                                        these compound-
                                        <TM>pi</TM> clauses are never mistakenly grouped wrong.
                                    </P>
                                </Section>
                                <Section>
                                    <Title id="li-lon">
                                        <TM>li lon</TM> - To Exist
                                    </Title>
                                    <P>
                                        As we learned in the very beginning, it's easy enough to say something{' '}
                                        <Eng>"is [a base noun]"</Eng> or <Eng>"is [a base modifier]"</Eng> simply by
                                        using the base noun or base modifier as a verb. However what if you want to say
                                        something <Eng>"is food"</Eng> or <Eng>"is edible"</Eng> using the other
                                        derivations of <TM>moku</TM>? You can't say <TM>li moku</TM>, because that means{' '}
                                        <Eng>"is eating"</Eng>. What do you do?
                                        <See href="word-derivations">Word Derivations</See>
                                    </P>
                                    <P>
                                        The solution is to use the modifier <TM>lon</TM> meaning <Eng>"real"</Eng>,{' '}
                                        <Eng>"true"</Eng>, or <Eng>"existing"</Eng>. As a verb it is used to mean{' '}
                                        <Eng>"to be"</Eng> or <Eng>"to exist"</Eng>. This allows you to use modifiers or{' '}
                                        <TM>pi</TM>-phrases to use modifier or noun forms of any word you please.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>ni li lon moku</TM>
                                            <Answer>
                                                <Eng>"This is edible"</Eng>, literally <Eng>"This exists edibly"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>ni li lon pi moku</TM>
                                            <Answer>
                                                <Eng>"This is food"</Eng>, literally{' '}
                                                <Eng>"This exists [in a manner] of food"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>on li lon pi pona mute</TM>
                                            <Answer>
                                                <Eng>"He is very good"</Eng>, literally{' '}
                                                <Eng>"They exist of much goodness"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                </Section>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="adding-complexity" className="major">
                                Adding Complexity
                            </Title>
                            <Section>
                                <Title id="te">
                                    <TM>te</TM> - Subordinate Clauses
                                </Title>
                                <P>
                                    The particle <TM>te</TM> marks <Word>noun clauses</Word> and{' '}
                                    <Word>relative clauses</Word>. This is a very powerful tool for sentence
                                    construction, so let's start simple to show what that means.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>te li moku e kili</TM>
                                        <Answer>
                                            <Eng>"to eat fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This isn't a complete sentence, it's a <Word>noun clause</Word>. It simply refers to
                                    the concept of eating fruit, <B>as an entire noun</B>. This allows it to be used as
                                    a <B>subject</B> or <B>object</B> of a verb. Let's take a look at an example:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li wile e kili</TM>
                                        <Answer>
                                            <Eng>"I want fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li wile e <B>te li moku e kili</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I want <B>to eat fruit</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Notice how <TM>te li moku e kili</TM> is preceded by <TM>e</TM>, making the entire
                                    phrase a <B>noun clause</B>; technically it's a <B>noun clause object of a verb</B>{' '}
                                    for you linguists out there. Let's look at another example:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            <B>te li moku e kili</B>, li pona
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "It is good <B>to eat fruit</B>"
                                            </Eng>
                                            , or{' '}
                                            <Eng>
                                                "It is good <B>that fruit is eaten</B>"
                                            </Eng>
                                            , or{' '}
                                            <Eng>
                                                "<B>Eating fruit</B> is good"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The phrases <Eng>"to eat fruit"</Eng>, <Eng>"that fruit is eaten"</Eng>, and{' '}
                                    <Eng>"eating fruit"</Eng> are all simply <B>noun clauses</B> once again referring to
                                    the concept of eating fruit, all marked by <TM>te</TM>, and all valid
                                    interpretations of <TM>te li moku e kili</TM>. In this case, again for you linguists
                                    out there, this is a <B>noun clause subject of a verb</B>.
                                </P>
                                <P>
                                    As previously stated, <TM>te</TM> can also mark <Word>relative clauses</Word>. While
                                    noun clauses act as a noun (surprise surprise), relative clauses, also known as{' '}
                                    <Word>adjective clauses</Word>, are phrases that act as an <B>adjective</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            jan <B>te li moku e kili</B>, li pona
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "The person <B>who eats fruit</B> is good"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The subject of the sentence is <Eng>"the person"</Eng>, but we have tacked on a
                                    descriptive phrase: <Eng>"who eats fruit"</Eng>. This phrase is a{' '}
                                    <Word>relative clause</Word>. It acts as an adjective, enhancing the description of
                                    the person we are talking about. Here are more examples:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            kili <B>te mi li moku e</B>, li pona
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "The fruit <B>that I eat</B> is good"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            jan <B>te mi li toki ki</B>, li lamo
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "The person <B>to whom I am talking</B> is tall"
                                            </Eng>
                                            <See href="ki">
                                                <TM>ki</TM>
                                            </See>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    These relative clauses have one minor difference to the first example: they have a{' '}
                                    <Word>dangling preposition</Word> at the end. This happens because the{' '}
                                    <B>subject</B> of our sentence would normally be the <B>object of a preposition</B>{' '}
                                    if we were to rearrange the relative clause to stand on its own. Let's analyze the
                                    first example further to understand this better.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            <B>kili</B> te mi li moku <B>e</B> ...
                                        </TM>
                                        <Answer className="no-blur">
                                            <Eng>"The fruit that I eat ..."</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The subject of the sentence is <TM>kili</TM>, <Eng>"the fruit</Eng>. Let's drop the{' '}
                                    <TM>te</TM> and rearrange it.
                                </P>
                                <Ex>
                                    <TM>
                                        mi li moku <B>e kili</B>
                                    </TM>
                                    <Answer className="no-blur">
                                        <Eng>"I eat fruit"</Eng>
                                    </Answer>
                                </Ex>
                                <P>
                                    This is now a complete sentence, but the <B>subject has changed</B> to <TM>mi</TM>.
                                    We are now talking about ourselves eating the fruit.{' '}
                                </P>
                                <P>
                                    Without using <TM>te</TM>, we could only ever talk about{' '}
                                    <B>the thing doing the action</B> as the subject of a sentence. If we ever want to
                                    talk about the <B>object of a preposition</B> rather than the subject of the action,
                                    we must rearrange the sentence using <TM>te</TM>, and{' '}
                                    <B>the original preposition must dangle</B> at the end of the relative clause.
                                </P>
                                <P>
                                    It is also completely valid to{' '}
                                    <B>
                                        nest a <TM>te</TM> clause inside another <TM>te</TM> clause.
                                    </B>
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li wile e <B>te</B> li jan <B>te</B> li moku e kili na
                                        </TM>
                                        <Answer>
                                            <Eng>"I want to be the person who eats that fruit."</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    There is one last thing to mention about using <TM>te</TM> in a sentence. Whenever{' '}
                                    <TM>te</TM> comes after the preposition <TM>e</TM>, the <TM>e</TM> can simply be
                                    dropped. Additionally, whenever <TM>te</TM> comes before <TM>li</TM>, the{' '}
                                    <TM>li</TM> can be dropped. These can combine to cause the construction{' '}
                                    <TM>... e te li ...</TM> to simply become <TM>... te ...</TM>.
                                </P>
                                <P>
                                    While this is allowed, it is suggested that you only drop the <TM>e</TM> and keep it
                                    as <TM>te li</TM> in many cases, as it can become harder to parse with more complex
                                    sentences.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>jan te moku e kili, li pona</TM>
                                        <Answer>
                                            <Eng>"The person who eats fruit is good"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li wile te moku e kili</TM>
                                        <Answer>
                                            <Eng>"I want to eat fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This is very commonly used, though not required. There may be cases where it feels
                                    more natural to keep one or both in the sentence.
                                </P>
                            </Section>
                            <Section>
                                <Title id="punctuation">Punctuation</Title>
                                <P>
                                    This is a good time to mention punctuation rules in toki ma, because there are
                                    really only two.
                                    <ol>
                                        <li>Place periods to separate sentences</li>
                                        <li>
                                            Place commas after <TM>te</TM> clauses before moving on to the rest of the
                                            sentence
                                        </li>
                                    </ol>
                                    Any other punctuation use is up to you. You can do whatever feels comfortable or
                                    clears up ambiguity. Question marks, exclamation points, commas, colons,
                                    elipses...Go wild.
                                </P>
                            </Section>
                            <Section>
                                <Title id="negation">Negation</Title>
                                <P>
                                    Thus far we have only been able to talk in the <B>positive</B>, but not in the{' '}
                                    <B>negative</B>. How would you say{' '}
                                    <Eng>
                                        "I <B>do not</B> want to eat fruit"
                                    </Eng>
                                    ? That's right, we need a new word: <TM>no</TM>. The word <TM>no</TM> is used for{' '}
                                    <Word>negation</Word>. It can be used like any other modifier to affect a noun,
                                    verb, or other modifier.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li <B>wile no</B> te li moku e kili
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I <B>do not want</B> to eat fruit"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li <B>pasan no</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I am <B>not happy</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li tawa kan <B>no pi mama mi</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I go <B>without my parent</B>
                                            </Eng>
                                            , literally{' '}
                                            <Eng>
                                                "I go with <B>none of my parent</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    As a noun, <TM>no</TM> means <Eng>"none"</Eng> or <Eng>"nothingness"</Eng>.
                                    Currently this is also used to mean <Eng>"zero"</Eng>, but a specific word for the
                                    number 0 may be added in the future.
                                </P>
                            </Section>
                            <Section>
                                <Title id="cause-and-effect" className="minor">
                                    Cause and Effect
                                </Title>
                                <Section>
                                    <Title id="wa">
                                        <TM>wa</TM> - Causatives
                                    </Title>
                                    <P>
                                        As a verb, the word <TM>wa</TM> means <Eng>"to cause"</Eng>, but it can also be
                                        used as a <B>modifier</B> to another verb, to act as a <Word>causative</Word>.
                                        In this case, the subject is now the <Word>causer</Word> (the reason for
                                        action), causing the <Word>agent</Word> (the one doing the action) to perform
                                        the action. The preposition <TM>ki</TM> is used to mark the <B>agent</B>. You
                                        can think of <TM>ki</TM> in this context as meaning something like{' '}
                                        <Eng>"from the perspective of"</Eng>, rather than the usual <Eng>"to"</Eng> or{' '}
                                        <Eng>"towards"</Eng>.
                                        <See href="ki">
                                            <TM>ki</TM>
                                        </See>
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li pasan wa ki si</TM>
                                            <Answer>
                                                literally <Eng>"I cause-to-be-happy from the perspective of you"</Eng>{' '}
                                                or <Eng>"I make you happy"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        Let's break that down: the <B>causer</B>, <TM>mi</TM>, is causing the{' '}
                                        <B>agent</B>, <TM>si</TM>, to perform the action of <TM>li pasan</TM>,{' '}
                                        <Eng>"to be happy"</Eng>.
                                    </P>
                                    <P>
                                        This could, of course, also be said using <TM>wa</TM> as a normal verb instead
                                        of a causative modifier, and using <TM>te si li pasan</TM>,{' '}
                                        <Eng>"that you be happy"</Eng> as the direct object. You don't always have to
                                        use <TM>wa</TM> as a modifier.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li wa e te si li pasan</TM>
                                            <Answer>
                                                literally <Eng>"I cause that you be happy"</Eng> or{' '}
                                                <Eng>"I make you happy"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        So why can't you say{' '}
                                        <TM>
                                            mi li pasan wa <B>e</B> si
                                        </TM>
                                        ? Why does it have to use <TM>ki</TM>? Because the direct object still applies
                                        to <B>the verb being caused</B>, not to the <B>act of causing</B> the other
                                        action. In this case, <TM>li pasan</TM> is an <Word>intransitive</Word> verb,
                                        meaning it has no direct object. It doesn't make sense to{' '}
                                        <Eng>"be happy [a thing]"</Eng>, because being happy is just a thing that
                                        you...do. Let's look at a <Word>transitive</Word> verb for a better idea of what
                                        is going on.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li moku wa ki si e kili</TM>
                                            <Answer>
                                                literally <Eng>"I cause you to eat fruit"</Eng>, or{' '}
                                                <Eng>"I feed you fruit"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        The direct object, <TM>kili</TM>, applies to the verb <TM>moku</TM>. It is the
                                        object of the <B>action</B>, not the object of the <B>causation</B> of that
                                        action. That would be the <B>agent</B>.
                                    </P>
                                    <P>
                                        Because we must use <TM>ki</TM> in this way when using causative <TM>wa</TM>,
                                        some sentences may become too confusing for this structure and may require going
                                        back to using <TM>wa</TM> as a verb itself. Try this one:
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li wa te si li kanti e kanti ki mi</TM>
                                            <Answer>
                                                literally <Eng>"I cause that you play music to me"</Eng>, or{' '}
                                                <Eng>"I make you play music for me"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        There simply isn't a good way to phrase this with the causative <TM>wa</TM>{' '}
                                        modifier. If you try <TM>mi li kanti wa ki si e kanti ki mi</TM>, it's not clear
                                        which <TM>ki</TM> phrase is meant as the <B>agent</B>, and which is meant as the
                                        recipient of the music-playing.
                                    </P>
                                    <P>
                                        If you want to use a causative <TM>wa</TM> anyway, the{' '}
                                        <B>
                                            first <TM>ki</TM> phrase
                                        </B>{' '}
                                        is generally assumed to be the <B>agent</B>, and any other <TM>ki</TM> phrases
                                        apply to the <B>main verb</B>.
                                    </P>
                                    <P>
                                        If context makes it obvious what the <B>agent</B> is and there is no other{' '}
                                        <TM>ki</TM> phrase, the agentive <TM>ki</TM> phrase may be omitted entirely and{' '}
                                        <B>the agent becomes implicit</B>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li jo e ato loje. mi li laso wa pelu telo kule</TM>
                                            <Answer>
                                                <Eng>"I have a red car. I will paint it blue."</Eng>, (literally{' '}
                                                <Eng>"... cause [it] to be blue using color-liquid"</Eng>)
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        Even though <TM>ato</TM> is not a living thing, <B>it is still agent</B> of the
                                        causative. The agent is just <B>the thing doing the main verb</B>, in this case
                                        it's the thing being blue. The causative <TM>wa</TM> just states that the
                                        subject, <TM>mi</TM>, is the cause of that blueness.
                                    </P>
                                </Section>
                                <Section>
                                    <Title id="nen">
                                        <TM>nen</TM> - Because Of
                                    </Title>
                                    <P>
                                        Another way to create causative relationships is with the preposition{' '}
                                        <TM>nen</TM> meaning <Eng>"because of"</Eng> or <Eng>"caused by"</Eng>.
                                    </P>
                                    <Examples>
                                        <TM>
                                            mi li moku e kili <B>nen pesoni</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I eat fruit <B>because of necessity</B>"
                                            </Eng>
                                        </Answer>
                                    </Examples>
                                    <P>
                                        Rather than making the <B>subject</B> the causer, as with <TM>wa</TM>, using{' '}
                                        <TM>nen</TM> marks an <B>object</B> as the causer.
                                    </P>
                                    <P>
                                        This was originally introduced for emotions and <TM>wolin</TM> to make things
                                        less forceful and/or, for lack of a better word, predatory. Consider:
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li wolin e si</TM>
                                            <Answer>
                                                <Eng>"I love you</Eng>, implying that loving is an action done directly{' '}
                                                <B>to</B> you
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>mi li wolin nen si</TM>
                                            <Answer>
                                                <Eng>"I feel love because of you"</Eng>, implying that to love is an
                                                experience and not a forceful action
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        For actions other than feeling emotions, <TM>nen</TM> is also used to
                                        deemphasize the <B>causation</B> in favor of the <B>action</B>. Using{' '}
                                        <TM>nen</TM> simply states the cause, rather than making the cause be the
                                        subject.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>si li wa e te mi li pali e musi</TM>
                                            <Answer>
                                                <Eng>"You cause me to make art"</Eng>, strong focus on <Eng>"you"</Eng>{' '}
                                                being the cause, and the causation itself
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>si li pali wa e musi ki mi</TM>
                                            <Answer>
                                                <Eng>"I make art, and you are the cause"</Eng>, equal focus on the act
                                                of <Eng>"making art"</Eng>, and on <Eng>"you"</Eng> being the cause
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>mi li pali e musi nen si</TM>
                                            <Answer>
                                                <Eng>"I make art because of you"</Eng>, focus on the act of{' '}
                                                <Eng>"making art"</Eng> and simply stating that <Eng>"you"</Eng> are the
                                                reason
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        All of these imply that <TM>si</TM> is their muse, their inspiration for making
                                        art, but how much that is a focus of the sentence is changed based on which
                                        sentence structure you choose to use.
                                    </P>
                                </Section>
                            </Section>
                            <Section>
                                <Title id="conjunctions" className="minor">
                                    Conjunctions
                                </Title>
                                <Section>
                                    <Title id="en-anu-lekin">
                                        <TM>en</TM> / <TM>anu</TM> / <TM>lekin</TM> - And/Or/But
                                    </Title>
                                    <P>
                                        The particles <TM>en</TM> (<Eng>"and"</Eng>), <TM>anu</TM> (<Eng>"or"</Eng>),
                                        and <TM>lekin</TM> (<Eng>"but"</Eng>) can be used in almost exactly the same way
                                        as English. You can use them to separate or join sentences, clauses, individual
                                        words, etc. Here is a non-exhaustive list of examples:
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>
                                                mi li wile te li moku e kili <B>anu</B> kasi <B>anu</B> pan
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I want to eat fruit, <B>or</B> vegetables, <B>or</B> bread"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li wile te li ato, <B>anu</B> te li tawa pelu noka mi
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I either want to drive <B>or</B> walk"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                jan Ken <B>anu</B> jan Susen o pana e mani ki on
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "Ken <B>or</B> Susen should give them money"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li pasan nen pawo <B>en</B> meja
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I like dogs <B>and</B> cats"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li pasan nen pawo <B>en</B> si li pasan nen meja
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I like dogs <B>and</B> you like cats"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li pasan nen pawo <B>lekin</B> si li pasan nen meja
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I like dogs <B>but</B> you like cats"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li tini <B>lekin</B> wiki
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I am short <B>but</B> fast"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                </Section>
                                <Section unofficial>
                                    <Title id="sequentiality">Sequentiality</Title>
                                    <P>
                                        Using the particle <TM>en</TM> generally implies <Word>concurrency</Word> of
                                        events or states, meaning they occur at the same time.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>
                                                mi li wile te li moku e kasi <B>en</B> pan suwi
                                            </TM>
                                            <Answer>
                                                <Eng>"I want to eat vegetables and cake"</Eng>, implying eating them
                                                together <B>in the same course</B>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li moku <B>en</B> mi li lukin e sitelen kanpe
                                            </TM>
                                            <Answer>
                                                <Eng>"I eat and watch a movie"</Eng>, implying eating <B>while</B>{' '}
                                                watching the movie
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li pana e mani ki si <B>en</B> on
                                            </TM>
                                            <Answer>
                                                <Eng>"I am giving money to you and them"</Eng>, implying{' '}
                                                <B>one moment</B> of giving out money to two people
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        In order to convey <Word>sequentiality</Word>, events occuring one after the
                                        other, you can instead <B>repeat the related preposition</B> or{' '}
                                        <B>
                                            repeat <TM>li</TM>
                                        </B>
                                        . Think of it like <Eng>"and then"</Eng>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>
                                                mi li wile te li moku <B>e</B> kasi <B>e</B> pan suwi
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I want to eat vegetables <B>and then</B> cake"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi <B>li</B> moku <B>li</B> lukin e sitelen kanpe
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I eat <B>and then</B> watch a movie"
                                                </Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>
                                                mi li pana e mani <B>ki</B> si <B>ki</B> on
                                            </TM>
                                            <Answer>
                                                <Eng>
                                                    "I am giving money to you <B>and then</B> to them"
                                                </Eng>
                                                , implying <B>two separate moments</B> of giving out money
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                </Section>
                            </Section>
                            <Separator className="small">* * *</Separator>
                            <Section>
                                <Title id="asking-questions">Asking Questions</Title>
                                <P>
                                    There are three kinds of questions you may want to ask: <Word>polar questions</Word>{' '}
                                    (yes/no), <Word>open questions</Word> (who/what/why etc), and{' '}
                                    <Word>alternative questions</Word> (this or that). Let's go over them one by one.
                                </P>
                                <P>
                                    To ask a <Word>polar question</Word>, simply append the statement with{' '}
                                    <TM>anu no?</TM>. Yes, it's that easy.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li wile li moku, anu no?</TM>
                                        <Answer>
                                            <Eng>"Do you want to eat?"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li lamo, anu no?</TM>
                                        <Answer>
                                            <Eng>"Am I tall?"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi o moku e kili, anu no?</TM>
                                        <Answer>
                                            <Eng>"Should I eat fruit?"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The response to a polar question should usually be either <TM>tuntan</TM>,{' '}
                                    <TM>isala</TM>, or <TM>no</TM>.
                                </P>
                                <P>
                                    To ask an <Word>open question</Word>, the special particle <TM>seme</TM> can be
                                    placed as kind of a <B>fill-in-the-blank</B> word. This is best demonstrated with
                                    some examples:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            si li wile te li moku e <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>What</B> do you want to eat?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            <B>seme</B> li toki e na
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Who</B> said that?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li pali pelu <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>How</B> did you do that?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li pali pelu <B>tisi seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>How</B> did you do that?"
                                            </Eng>{' '}
                                            specifically asking <Eng>"using what method?"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li pilin su <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>How</B> are you feeling?"
                                            </Eng>{' '}
                                            asking <Eng>"in what manner?"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li tawa ki <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Where</B> are you going?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li solu nen <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Why</B> are you asking?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si li tawa an tenpo <B>seme</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>When</B> do you go?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Simply place <TM>seme</TM> into the sentence where you would normally place the
                                    answer, had you known the answer.
                                </P>
                                <P>
                                    Finally, asking an <Word>alternative question</Word>, is kind of a combination of
                                    the other two:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            si li wile te li moku e <B>seme</B> pi kili anu kasi anu pan
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Which</B> do you want: fruit, vegetables, or bread?"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The construction <TM>seme pi [X] anu [Y] anu [Z] anu ...</TM> is used to list
                                    possibilities.
                                </P>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="setting-the-scene" className="major">
                                Setting the Scene
                            </Title>
                            <Section>
                                <Title id="tense-and-aspect">Tense and Aspect</Title>
                                <P>
                                    The <Word>tense</Word> of a verb talks about <B>when</B> the verb happens. The{' '}
                                    <Word>aspect</Word> of a verb talks about <B>how</B> the verb happens. Verbs in toki
                                    ma are <Word>tenseless</Word> and <Word>aspectless</Word> by default, so this would
                                    all normally be inferred from context.
                                </P>
                                <P>
                                    Verbs don't always have to be tenseless, though. If it's important that you{' '}
                                    <B>
                                        specify the <Word>tense</Word>
                                    </B>{' '}
                                    of a verb, you can use one of three modifiers: <TM>pisile</TM>, <TM>iputu</TM>, or{' '}
                                    <TM>akile</TM> for <Eng>"past"</Eng>, <Eng>"present"</Eng>, and <Eng>"future"</Eng>.
                                </P>
                                <P>
                                    But just because you say <TM>mi li moku iputu</TM>, that doesn't mean everything is
                                    crystal clear yet. That could mean <Eng>"I am eating"</Eng>,{' '}
                                    <Eng>"I have eaten"</Eng>, or <Eng>"I eat (habitually)"</Eng>. All of these
                                    translations are in <B>present tense</B>, but they all have{' '}
                                    <B>
                                        different <Word>aspect</Word>
                                    </B>
                                    .
                                </P>
                                <P>
                                    To{' '}
                                    <B>
                                        specify <Word>aspect</Word>
                                    </B>
                                    , you can use one of three modifiers. Let's use the example sentence{' '}
                                    <TM>mi li moku iputu</TM> to see what they are and how they work:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>sajo</TM> indicates <B>continuous</B> action, so{' '}
                                        <TM>mi li moku iputu sajo</TM> would mean <Eng>"I am eating"</Eng>, spefically
                                        stating <Eng>"I am currently in the process of eating"</Eng>. In this case, the
                                        action of <Eng>eating</Eng> is still ongoing.
                                    </Ex>
                                    <Ex>
                                        <TM>pini</TM> indicates <B>completed</B> actions, so{' '}
                                        <TM>mi li moku iputu pini</TM> would mean <Eng>"I have eaten"</Eng>, speficially
                                        stating <Eng>"I am currently in a state of having finished eating"</Eng>. In
                                        this case, the action of <Eng>eating</Eng> has now stopped.
                                    </Ex>
                                    <Ex>
                                        <TM>taka</TM> indicates <B>repeated</B> or <B>habitual</B> action, so{' '}
                                        <TM>mi li moku iputu taka</TM> would mean <Eng>"I eat"</Eng>, specifically
                                        stating{' '}
                                        <Eng>"Eating is an activity that I currently habitually partake in"</Eng>. In
                                        this case, the action of <Eng>eating</Eng> isn't necessarily happening right
                                        now, but it is still a regular occurrence for the speaker.
                                    </Ex>
                                </Examples>
                                <P>
                                    These words can be used to add specificity to your verbs. To be as specific as
                                    possible, you'd have to use <B>both a tense modifier and an aspect modifier</B>. For
                                    example, only using <TM>sajo</TM> without a <B>tense</B> modifier results in the
                                    same type of amiguity as we saw above: the sentence <TM>mi li moku sajo</TM> could
                                    mean any of <Eng>"I was eating"</Eng>, <Eng>"I am eating"</Eng>, or{' '}
                                    <Eng>"I will be eating"</Eng>, all of which are <B>continuous</B> actions but have
                                    different <B>tense</B>.
                                </P>
                                <P>Here is a list of all possible tense/aspect combinations.</P>
                                <table>
                                    <thead>
                                        <tr>
                                            <td style={{ border: 'none' }}></td>
                                            <th>
                                                <TM>
                                                    <B>pisile</B>
                                                </TM>{' '}
                                                (<Eng>past</Eng>)
                                            </th>
                                            <th>
                                                <TM>
                                                    <B>iputu</B>
                                                </TM>{' '}
                                                (<Eng>present</Eng>)
                                            </th>
                                            <th>
                                                <TM>
                                                    <B>akile</B>
                                                </TM>{' '}
                                                (<Eng>future</Eng>)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <TM>
                                                    <B>sajo</B>
                                                </TM>
                                                <br />(<Eng>ongoing</Eng>)
                                            </th>
                                            <td>
                                                <TM>mi li moku sajo pisile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I was eating"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku sajo iputu</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I am eating"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku sajo akile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I will be eating"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <TM>
                                                    <B>pini</B>
                                                </TM>
                                                <br />(<Eng>completed</Eng>)
                                            </th>
                                            <td>
                                                <TM>mi li moku pini pisile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I had eaten"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku pini iputu</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I have eaten"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku pini akile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I will have eaten"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <TM>
                                                    <B>taka</B>
                                                </TM>
                                                <br />(<Eng>repeated</Eng>)
                                            </th>
                                            <td>
                                                <TM>mi li moku taka pisile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I used to eat (habitually)"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku taka iputu</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I eat (habitually)"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mi li moku taka akile</TM>
                                                <Answer className="no-spacer">
                                                    <br />
                                                    <Eng>"I will eat (habitually)"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <P>
                                    It is possible to use multiple aspect or tense markers at once to suggest even more
                                    specific verbs. For example, <TM>li moku pini sajo</TM> implies thay you are in the
                                    process of finishing eating.
                                </P>
                                <P>
                                    To reiterate, <B>all of this and more</B> can be often inferred through context
                                    without adding these modifiers, but they're here to use as needed to make sure you
                                    are properly understood. Most of the time, people will not use tense and aspect
                                    modifiers when it is clear enough through context, especially in informal speech.
                                </P>
                                <Section>
                                    <Title id="open-pini">
                                        <TM>open</TM>/<TM>pini</TM> - Starting and Finishing
                                    </Title>
                                    <P>
                                        The aspect modifier <TM>pini</TM> is also used to modify a verb into a
                                        "finishing" action. Similarly, <TM>open</TM> can be used to create a "starting"
                                        action. If <TM>li moku</TM> is <Eng>"to eat"</Eng>, then <TM>li moku open</TM>{' '}
                                        is <Eng>"to start to eat"</Eng>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li moku open e kili</TM>
                                            <Answer>
                                                <Eng>"I start eating fruit"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>mi li moku pini e kili</TM>
                                            <Answer>
                                                <Eng>"I finish eating fruit"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        The latter phrase is often interpreted to mean the same thing as{' '}
                                        <B>completed aspect</B>, even though it's not exactly the same in English.
                                        Context can clarify further whether the speaker is talking about a{' '}
                                        <B>completed state</B> or the <B>act of finishing</B> an action.
                                    </P>
                                </Section>
                            </Section>
                            <Separator className="small">* * *</Separator>
                            <Section>
                                <Title id="units-of-time">Units of Time</Title>
                                <P>
                                    Without dedicated words for units of time, toki ma has a few conventional phrases to
                                    discuss common units of time. They come in short forms, useful for when context
                                    makes it very obvious that you are talking about time, and long forms, useful for
                                    when context isn't quite enough and you need to be more specific.
                                </P>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Unit</th>
                                            <th>Long Form</th>
                                            <th>
                                                Short Form
                                                <br />
                                                (informal)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Eng>second</Eng>
                                            </td>
                                            <td>
                                                <TM>lamo penke</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"length of an instant"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>penke</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"instant"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Eng>minute</Eng>
                                            </td>
                                            <td>
                                                <TM>osa tenpo</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"time segment"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>tenpo</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"time"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Eng>hour</Eng>
                                            </td>
                                            <td>
                                                <TM>osa suno</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"sun segment"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>osa</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"segment"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Eng>day</Eng>
                                            </td>
                                            <td>
                                                <TM>sike suno</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"sun cycle"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>suno</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"sun"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Eng>month</Eng>
                                            </td>
                                            <td>
                                                <TM>sike mun</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"moon cycle"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>mun</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"moon"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Eng>year</Eng>
                                            </td>
                                            <td>
                                                <TM>sike wetu</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"star cycle"</Eng>
                                                </Answer>
                                            </td>
                                            <td>
                                                <TM>wetu</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    <Eng>"star"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <P>
                                    When talking about times, it is common to start the time phrase with{' '}
                                    <TM>tenpo pi</TM>, though not always necessary.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tenpo seme li sajo</TM>
                                        <Answer>
                                            <Eng>"How much time is ongoing?"</Eng>
                                            <br />
                                            This could also be <TM>tenpo seme li pisile</TM>, literally{' '}
                                            <Eng>"how much time has passed?"</Eng>, or <TM>tenpo li seme (an) iputu</TM>
                                            , <Eng>"what time is it now?"</Eng>, the <TM>an</TM> is optional
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>3 tenpo akile pi osa 18 li sajo</TM>
                                        <Answer>
                                            <Eng>"It is 18:03"</Eng>, literally{' '}
                                            <Eng>"3 minutes after the 18th hour have passed"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    When speaking informally, there may be shorter ways to tell the time. If someone
                                    asks <TM>tenpo seme li sajo</TM>, one might simply respond <TM>18 pi 3</TM>.
                                </P>
                                <P>
                                    To talk about a duration the unit comes after the number.
                                    <See href="numbers-and-counting">Numbers and Counting</See>
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li pali ki pini pi 5 osa</TM>
                                        <Answer>
                                            <Eng>"I worked for 5 hours"</Eng>, literally{' '}
                                            <Eng>"I worked until the end of 5 hours"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Days of the week are also done through numbers, with <Eng>Monday</Eng> being{' '}
                                    <TM>suno 1</TM> and <Eng>Friday</Eng>
                                    being <TM>suno 6</TM>. <Eng>Sunday</Eng> is therefore either <TM>suno 0</TM> or{' '}
                                    <TM>suno 7</TM>, depending on how you think about the order of days, so the standard
                                    term is <TM>suno suno</TM> to make it less confusing. The same is done for months,
                                    with <Eng>January</Eng> being <TM>mun 1</TM>.
                                </P>
                            </Section>
                            <Section>
                                <Title id="la-ita">
                                    <TM>la</TM> / <TM>ita</TM> - Marking Context
                                </Title>
                                <P>
                                    The particles <TM>la</TM> and <TM>ita</TM> are used to attach <Word>context</Word>{' '}
                                    phrases to your sentences. With <TM>la</TM>, the context phrase comes before it and
                                    the sentence comes after, and with <TM>ita</TM>, the context comes after and the
                                    sentence comes before.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            [context phrase] <B>la</B> [main sentence]
                                        </TM>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            [main sentence] <B>ita</B> [context phrase]
                                        </TM>
                                    </Ex>
                                </Examples>
                                <P>
                                    Yes, that's a pretty vague explanation, but that's kind of the point. "Context" can
                                    be a wide variety of things. Among those is specifying a <B>relative time</B> for
                                    the entire sentence.
                                </P>
                                <P>
                                    All of these example sentences will use <TM>la</TM>, placing the context before the
                                    main sentence, but they could all just as well use <TM>ita</TM> and place the
                                    context at the end. The meaning wouldn't change, this is simply for convenience of
                                    whatever feels more comfortable.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            <B>suno pisile la</B> mi li moku e kili
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I ate fruit <B>yesterday</B>"
                                            </Eng>
                                            <br />
                                            This <B>could</B> be interpreted as <Eng>"a few days ago"</Eng> or{' '}
                                            <Eng>"in the past days"</Eng>, interpreting <TM>suno</TM> as a plural, but
                                            that is often better represented with <TM>suno mute</TM>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            <B>tenpo pimeja ni la</B> mi li moku e kili
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>Tonight</B> I will eat fruit"
                                            </Eng>
                                            , literally <Eng>"this dark time"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    When time is stated through context, the rest of the verbs are then relative to that
                                    time.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            <B>tenpo pimeja ni la</B> mi li moku pisile pini pi ten taka e kili
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>By tonight</B> I will have eaten fruit ten times"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    In that example, it doesn't say <Eng>"tonight I have eaten fruit ten times"</Eng>,
                                    which wouldn't make sense because tonight hasn't happened yet. Instead the verb{' '}
                                    <TM>moku pisile pini</TM> is interpreted as if it is already in the future context
                                    of <Eng>"tonight"</Eng>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tenpo pimeja pisile la mi li tawa ki tomo pi moku</TM>
                                        <Answer>
                                            <Eng>"Last night I went to the store"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Times are not always relative to simple ideas like <Eng>"today"</Eng>,{' '}
                                    <Eng>"tomorrow"</Eng>, or <Eng>"in three days"</Eng> sometimes you need to talk
                                    about something <B>relative to a specific event</B>. For this, we state the context
                                    as literally <Eng>"time that [event] occurred"</Eng> using{' '}
                                    <TM>
                                        <B>tenpo te [event] an</B>, la ...
                                    </TM>
                                    , with the <TM>an</TM> preposition dangling. Another option is to use{' '}
                                    <TM>
                                        <B>tenpo pi te [event]</B>, la
                                    </TM>{' '}
                                    meaning literally <Eng>"time of [event]"</Eng>
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tenpo te mi li moku e kili an, la mi li pasan</TM>
                                        <Answer>
                                            <Eng>"When I eat fruit, I am happy"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tenpo te mi li moku pisile e kili an, la mi li pasan</TM>
                                        <Answer>
                                            <Eng>"When I ate fruit, I was happy"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    See how when the context is put in the past, the main verb is also interpreted as
                                    being past tense, just like the earlier example with <TM>tenpo pimeja ni la</TM>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            tenpo te mi li tawa akile ki tomo esun pi moku an, la mi li lanpan esun e
                                            kili
                                        </TM>
                                        <Answer>
                                            <Eng>"When I go to the grocery store later, I will buy fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            tenpo pi te mi li tawa akile ki tomo esun pi moku, la mi li lanpan esun e
                                            kili
                                        </TM>
                                        <Answer>
                                            <Eng>"When I go to the grocery store later, I will buy fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="specifying-topics">Specifying Topics</Title>
                                <P>
                                    If providing time as context makes a <B>when-clause</B>, what happens when you
                                    provide something that isn't a time? You end up simply specifying a{' '}
                                    <Word>topic</Word>. This can be used to <B>introduce a new topic</B>, to{' '}
                                    <B>specify a relative concept</B> in which to frame the following sentence, or to{' '}
                                    <B>change topics</B> similar to the English phrase <Eng>"speaking of which..."</Eng>
                                    .
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>pawo la mi li jo e wan, lekin jan pona mi li jo e po!</TM>
                                        <Answer>
                                            <Eng>"Speaking of dogs, I have one but my friend has four!"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tana mi la si li pona</TM>
                                        <Answer>
                                            literally <Eng>"In the context of my thoughts, you are good"</Eng>, or
                                            roughly <Eng>"I think you are good"</Eng>
                                            <br />
                                            This is a somewhat awkward example, as it is more clearly stated using{' '}
                                            <TM>mi li tana te si li pona</TM>, but it is still correct
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>te li toki tuntan pi toki ma, la si o lukin e lipu ni tan jan Ta!</TM>
                                        <Answer>
                                            This one is a bit harder to translate into English, but it's roughly{' '}
                                            <Eng>"On the topic of toki ma grammar, read this guide by jan Ta!"</Eng>
                                            <br />
                                            More literally, it's{' '}
                                            <Eng>
                                                "In the context of speaking toki ma correctly, you should read this
                                                guide from jan Ta!"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>ato te li loje pisile, la mi li laso wa pelu telo kule</TM>
                                        <Answer>
                                            <Eng>"About the car that was red, I paint it blue"</Eng>
                                            <br />
                                            Again, tense is fairly ambiguous here.
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="conditionals">Conditionals</Title>
                                <P>
                                    When providing an <B>entire event</B> as context, it is usually interpreted as a{' '}
                                    <Word>conditional</Word> (<Eng>"if [event] occurs, ...</Eng>). The main sentence is
                                    then interpreted as what <B>will/would happen</B> if that condition were true. By
                                    "entire event", I mean a statement that would be complete on its own such as{' '}
                                    <TM>
                                        <B>mi li moku e kili</B> la ...
                                    </TM>{' '}
                                    or{' '}
                                    <TM>
                                        <B>ato li loje</B> la ...
                                    </TM>
                                    .
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ato li loje la mi li laso wa pelu telo kule</TM>
                                        <Answer>
                                            <Eng>"If the car is red, I will paint it blue"</Eng>
                                            <br />
                                            The tense of this sentence is ambiguous.
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>ato li loje pisile la mi li laso wa pelu telo kule</TM>
                                        <Answer>
                                            <Eng>"If the car was red, I would have painted it blue"</Eng>
                                            <br />
                                            Because the context is past tense, the main sentence is interpreted as what
                                            would have happened in that hypothetical past.
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>si li wile te li tawa ki tomo pi moku, la mi li wile te li tawa kan si</TM>
                                        <Answer>
                                            <Eng>"If you want go to the restaurant, then I want to go with you"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="an">
                                    <TM>an</TM> - In/At/On
                                </Title>
                                <P>
                                    The preposition <TM>an</TM> meaning <Eng>in</Eng>, <Eng>at</Eng>, or <Eng>on</Eng>{' '}
                                    is used to state both <Word>times</Word> and <Word>locations</Word>, adding yet
                                    another way to talk about time in toki ma.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li moku e kili <B>an tomo pi moku</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I eat fruit <B>at the restaurant</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li moku e kili <B>an suno pisile</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I ate fruit <B>yesterday</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            pawo li lon <B>an soto pi meja</B>
                                        </TM>
                                        <Answer>
                                            "The dog is <B>to the left of the cat</B>"
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li lakima sajo mute <B>an akile pi te on li tawa weka pisile</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I have been very sad <B>ever since she left</B>"
                                            </Eng>
                                            , more literally{' '}
                                            <Eng>
                                                "I am very sad <B>in the future of her leaving</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li awen wa ki sike <B>an insa pi tapa</B>
                                        </TM>
                                        <Answer>
                                            <Eng>"I place the ball inside the box"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="multiple-contexts">Multiple Contexts</Title>
                                <P>
                                    It is possible to have multiple context phrases on one sentence. They combine
                                    together in a logical manner, usually from left-to-right in the way they are
                                    presented. This is often avoidable, but in spoken toki ma you may not have fully
                                    thought through your sentence by the time you've started speaking and you realize
                                    you want to add more context.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            pawo la, iputu la, on li pasan wa ki mi, lekin munkin la, akile la, on li
                                            lakima wa ki mi ita on li kuton wa ki mi
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "As for dogs, currently, I like them, but in maybe, in the future, I
                                                will dislike them, if they hurt me.
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This sentence is very awkward in writing, but in spoken language this kind of thing
                                    is reasonably common.
                                </P>
                            </Section>
                            <Section>
                                <Title id="mood">Mood</Title>
                                <P>
                                    <Word>Grammatical mood</Word> is the term for how a sentence is structured to
                                    reflect different ideas. There are many possible moods, each with technical names,
                                    and each used for different ways of speaking: stating facts, asking questions,
                                    talking about wishes, discussing hypotheticals, the list goes on.
                                </P>
                                <P>
                                    You've already learned how to use quite a few of these moods so far: you can state
                                    commands, requests, and desires with <TM>o</TM>, you can ask questions with{' '}
                                    <TM>seme</TM>, you can create conditionals with <TM>la</TM> or <TM>ita</TM> to talk
                                    about hypotheticals, and more. Not every grammatical mood that grammarians have
                                    defined have unique equivalents in toki ma, but there are creative ways to
                                    approximate many of them to either directly state or heavily imply a specific mood.
                                </P>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Mood</th>
                                            <th>What is it?</th>
                                            <th>English</th>
                                            <th>toki ma</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Indicative</td>
                                            <td>Used to talk about what is real</td>
                                            <td>
                                                <Eng>"I am eating"</Eng>
                                            </td>
                                            <td>
                                                <TM>mi li moku</TM>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Conditional</td>
                                            <td>Used to talk about events that rely on another condition</td>
                                            <td>
                                                <Eng>"If I start getting hungry, I will eat"</Eng>
                                            </td>
                                            <td>
                                                <TM>mi li wile open e moku la mi li moku</TM>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Subjunctive</td>
                                            <td>
                                                Used to talk about possible events, often events considered unlikely
                                            </td>
                                            <td>
                                                <Eng>"If I were hungry, I would eat"</Eng>
                                            </td>
                                            <td>
                                                <TM>mi li wile e moku la mi li moku</TM>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Imperative</td>
                                            <td>Used to issue commands or requests</td>
                                            <td>
                                                <Eng>"(You), Eat fruit"</Eng>
                                            </td>
                                            <td>
                                                <TM>o moku e kili</TM>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Optative</td>
                                            <td>Used to talk about things that one hopes for</td>
                                            <td>
                                                <Eng>"Safe travels!</Eng>
                                            </td>
                                            <td>
                                                <TM>o tawa pona!</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    literally <Eng>"Travel well!"</Eng>
                                                </Answer>
                                                <br />
                                                This is not imperative only because of the context of the statement. It
                                                is clearly a wish and not a command.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jussive</td>
                                            <td>Used to state what is desired or suggested</td>
                                            <td>
                                                <Eng>"Someone should give them food"</Eng>
                                            </td>
                                            <td>
                                                <TM>jan o pana e moku ki on</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    literally <Eng>"A person should give food to them"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hypothetical</td>
                                            <td>Used to talk about hypothetical or possible events</td>
                                            <td>
                                                <Eng>"I might be able to find food"</Eng>
                                            </td>
                                            <td>
                                                <TM>mi li alasa munkin e moku</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    literally <Eng>"I possibly find food"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Permissive</td>
                                            <td>Used to express that an action is allowed by the speaker</td>
                                            <td>
                                                <Eng>"You may eat"</Eng>
                                            </td>
                                            <td>
                                                <TM>li lon pi oke te si li moku</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    literally <Eng>"It is ok that you eat food"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inferential</td>
                                            <td>Used when the event is unwitnessed and unconfirmed</td>
                                            <td>
                                                <Eng>"They say you eat fruit"</Eng>
                                            </td>
                                            <td>
                                                <TM>li toki te si li moku e kili</TM>
                                                <br />
                                                <Answer className="no-spacer">
                                                    literally <Eng>"it is said that you eat fruit"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Interrogative</td>
                                            <td>Used to ask a question</td>
                                            <td>
                                                <Eng>"What are you eating?"</Eng>
                                            </td>
                                            <td>
                                                <TM>si li moku e seme</TM>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="taking-action" className="major">
                                Taking Action
                            </Title>
                            <Section>
                                <Title id="pali">
                                    <TM>pali</TM> - Generic Action
                                </Title>
                                <P>
                                    The verb <TM>pali</TM>, meaning <Eng>"to make"</Eng>, <Eng>"to work"</Eng>, or{' '}
                                    <Eng>"to do"</Eng> is considered to be the <B>generic verb</B> in toki ma, similar
                                    to how <TM>sa</TM> meaning <Eng>"object"</Eng> or <Eng>"thing</Eng> is the generic
                                    noun. When used to mean <Eng>"to do"</Eng>, <TM>pali</TM> is rarely seen in
                                    statements on its own, usually appearing in questions, or when accompanied by
                                    demonstrating an action.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li pali su ni</TM>
                                        <Answer>
                                            <Eng>"I do it like this"</Eng>, usually followed by a demonstration of the
                                            action you're doing
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>si li pali e seme</TM>
                                        <Answer>
                                            <Eng>"What are you doing?"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>si li pali pona!</TM>
                                        <Answer>
                                            <Eng>"You are doing well!"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    When used to mean <Eng>"to make"</Eng>, the word is much more descriptive, acting
                                    the same as any other verb.
                                </P>
                            </Section>
                            <Section>
                                <Title id="pelu">
                                    <TM>pelu</TM> - Using
                                </Title>
                                <P>
                                    The preposition <TM>pelu</TM> means <Eng>"using"</Eng>, <Eng>"with the use of"</Eng>
                                    , or <Eng>"with the help of"</Eng>. This is used to demonstrate <B>use of tools</B>{' '}
                                    or materials, or <B>assistance</B> from other objects or individuals.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li kama wisaja pelu palisa kela ilo sankan mi</TM>
                                        <Answer>
                                            <Eng>"I won using my special bat"</Eng>, literally{' '}
                                            <Eng>"I become victorious using my special stick-game tool"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li kama wisaja pelu walala mi</TM>
                                        <Answer>
                                            <Eng>"I won with the help of my sibling"</Eng>, implying you did the winning
                                            and they only provided assistance, as opposed to winning "along with" your
                                            sibling as if they were on the same team.
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="kan">
                                    <TM>kan</TM> - With
                                </Title>
                                <P>
                                    The preposition <TM>kan</TM> means <Eng>"together with"</Eng>, <Eng>"among"</Eng>,
                                    or <Eng>"in the company of"</Eng>. This is used to denote <B>accompaniment</B> by
                                    another object or individual. This is used for doing actions <B>along with</B> a
                                    person or group.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li tawa ki tomi pi moku kan mama mi</TM>
                                        <Answer>
                                            <Eng>"I am going to the restaurant with my parents"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li awen kan jan pona mi</TM>
                                        <Answer>
                                            <Eng>"I am staying with my friends"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="ki">
                                    <TM>ki</TM> - To
                                </Title>
                                <P>
                                    The preposition <TM>ki</TM> means <Eng>"to"</Eng>,<Eng>"in order to"</Eng>, or{' '}
                                    <Eng>"until [a time]"</Eng>. This is used to indicate <B>motion towards</B> an
                                    object or place, to mark <B>the recipient</B> of an action, or to specify the end of
                                    a time range. It is this recipient marking that is the reason we use <TM>ki</TM> for
                                    causative-<TM>wa</TM> phrases, as previously explained.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li pali ki osa 18</TM>
                                        <Answer>
                                            <Eng>"I am busy until 18:00"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li tawa ki tomo pi moku</TM>
                                        <Answer>
                                            <Eng>"I go to the restaurant"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>o tawa open ki nasin pi nasin suli pi ato</TM>
                                        <Answer>
                                            <Eng>"Start heading toward the freeway/motorway"</Eng>, literally{' '}
                                            <Eng>"... to the direction of the big road of cars"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li pesoni te li konta sata, ki te li konta e ni</TM>
                                        <Answer>
                                            <Eng>"I need to learn more in order to understand this"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li pana pisile e kili ki si</TM>
                                        <Answer>
                                            <Eng>"I gave you a fruit"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="tan">
                                    <TM>tan</TM> - From
                                </Title>
                                <P>
                                    The preposition <TM>tan</TM> means <Eng>"from"</Eng>, or{' '}
                                    <Eng>"starting at [a time]"</Eng>. This is used to indicate <B>motion away from</B>{' '}
                                    an object, or to specify the end of a time range.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li pali tan osa 18</TM>
                                        <Answer>
                                            <Eng>"I have been busy since 18:00"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li tawa tan tomo mi</TM>
                                        <Answer>
                                            <Eng>"I am leaving my house"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li lanpan pisile e kili tan si</TM>
                                        <Answer>
                                            <Eng>"I received a fruit from you"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="specifying-further" className="major">
                                Specifying Further
                            </Title>
                            <Section>
                                <Title id="su">
                                    <TM>su</TM> - Comparisons and Similarity
                                </Title>
                                <P>
                                    The preposition <TM>su</TM> means <Eng>"than"</Eng>, <Eng>"as"</Eng>, or{' '}
                                    <Eng>"compared to"</Eng>. This is most often used with <TM>sata</TM> and{' '}
                                    <TM>kata</TM> to create <Word>comparatives</Word>. Comparatives are phrases like{' '}
                                    <Eng>"bigger than"</Eng>, <Eng>"less cold than"</Eng>, etc., stating relative
                                    comparisons between things.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            pawo si li <B>suli sata su</B> pawo mi
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "Your dog is <B>bigger than</B> my dog"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM> mi li wile sata e te li moku su te li lape</TM>
                                        <Answer>
                                            <Eng>"I would rather eat than sleep"</Eng>, literally{' '}
                                            <Eng>"I want more to eat than to sleep"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Unlike other prepositions in toki ma, <TM>su</TM> can be directly followed by
                                    another preposition in comparative sentences.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li pasan kata nen pawo su nen meja</TM>
                                        <Answer>
                                            <Eng>"I like dogs less than cats"</Eng>, literally{' '}
                                            <Eng>"I am less happy because of dogs than because of cats"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li tawa pi taka sata ki tomo pi moku kan si su kan mama mi</TM>
                                        <Answer>
                                            <Eng>"I go to the restaurant more often with you than with my parents"</Eng>
                                            , literally{' '}
                                            <Eng>
                                                "I go of more repetitions to the restaurant with you than with my
                                                parents"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Another use of <TM>su</TM> is with <TM>sama</TM> and <TM>ante</TM> to talk about
                                    similarity. This can be combined with <TM>poka</TM> and <TM>suti</TM>,{' '}
                                    <Eng>"near"</Eng> and <Eng>"specific"</Eng>, to differentiate between things being
                                    exactly the same or just similar. Without them, the degree of similarity is implied
                                    through context, as is true of so much of toki ma.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            na li <B>sama su</B> ni
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "That is the <B>same as</B> this"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            na li <B>ante mute su</B> ni
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "That is <B>very different than</B> this"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            pawo na li lon lukin pi <B>sama suti su</B> pawo mi
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "That dog looks <B>exactly like</B> mine"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            si en on li lukin pi <B>sama poka</B> a!
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "You and him look <B>similar</B>!"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="superlatives">Superlatives</Title>
                                <P>
                                    Unlike comparatives, <Word>superlatives</Word> state <B>absolute</B> comparisons:{' '}
                                    <Eng>"best"</Eng>, <Eng>"most enjoyable"</Eng>, <Eng>"fastest"</Eng>. For this, you
                                    can use the phrase <TM>sata su ali</TM>, meaning <Eng>"more than all"</Eng>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li jan te li wiki sata su ali</TM>
                                        <Answer>
                                            <Eng>"I am the fastest person"</Eng>, literally{' '}
                                            <Eng>"I am the person that is faster than all"</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li moku pisile sata su ali</TM>
                                        <Answer>
                                            <Eng>"I ate the most"</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="numbers-and-counting" className="major">
                                Numbers and Mathematics
                            </Title>
                            <Section>
                                <Title id="forming-numbers">Forming Numbers</Title>
                                <P>
                                    It's simple enough to talk about the base number words that toki ma provides: (
                                    <TM>wan</TM>, <TM>tu</TM>, <TM>san</TM>, ..., <TM>ten</TM>, <TM>kenta</TM>, etc.),
                                    but how do you put these words together to form other numbers? It's actually very
                                    much like you would do it in English! There is no such thing as a modifier form of a
                                    number, they all act as connected nouns. Let's look at examples and it will all be
                                    clear.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ten tu</TM>
                                        <Answer>
                                            <Eng>12</Eng> (ten and two)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>oto ten</TM>
                                        <Answer>
                                            <Eng>80</Eng> (eight tens)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>san ten tu</TM>
                                        <Answer>
                                            <Eng>32</Eng> (three tens and two)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>lima kenta sesi</TM>
                                        <Answer>
                                            <Eng>506</Eng> (five hundreds and six)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>po ten san kilo</TM>
                                        <Answer>
                                            <Eng>43,000</Eng> ([four tens and three] thousands)
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>po ten san kilo wan</TM>
                                        <Answer>
                                            <Eng>43,001</Eng> ([four tens and three] thousands, and [one])
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>san meka po kenta po ten sesi kilo sepen ten oto</TM>
                                        <Answer>
                                            <Eng>3,446,078</Eng> ([three] millions, [four hundreds and ten fours and
                                            six] thousands, [seven tens and eight])
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Unlike other words which would be considered modifiers after the first one, no
                                    matter how many number words you put together{' '}
                                    <B>it always counts as a single noun.</B>
                                </P>
                            </Section>
                            <Section unofficial>
                                <Title id="zero">Zero</Title>
                                <P>
                                    The word <TM>nula</TM> is used for <Eng>"zero"</Eng>, though, like in English, it
                                    doesn't often appear in compound whole number words. You don't find yourself saying{' '}
                                    <Eng>"four thousand, zero hundred, and fifty six"</Eng>, do you? That said, zero is
                                    still a very important concept. Until this becomes official, the word <TM>no</TM>{' '}
                                    can be used as a number word to mean <Eng>"zero"</Eng>.
                                </P>
                            </Section>
                            <Section>
                                <Title id="cardinals-and-ordinals">Cardinals and Ordinals</Title>
                                <P>
                                    <Word>Cardinal</Word> numbers are placed <B>before the noun</B>. These are used for
                                    counting <B>how many</B> or <B>how much</B> of something there is.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li jo e <B>san pawo</B>
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "I have <B>three dogs</B>"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pali tan <B>ten oto osa</B> pisile
                                        </TM>{' '}
                                        <Answer>
                                            <Eng>
                                                "I have been working for <B>eighteen hours</B>
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    <Word>Ordinal</Word> numbers are placed <B>after the noun</B>. These are used to
                                    specify the position of an item in a series, like <Eng>"fourth"</Eng> or{' '}
                                    <Eng>"seventeenth"</Eng>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            <B>pawo tu</B> li pona sata pi ali
                                        </TM>
                                        <Answer>
                                            <Eng>
                                                "<B>The second dog</B> is the best"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            <B>san tenpo</B> akile pi <B>osa ten oto</B> li sajo
                                        </TM>
                                        <Answer>
                                            <Eng>It is 18:03</Eng>, literally{' '}
                                            <Eng>
                                                "<B>three minutes</B> after the <B>eighteenth hour</B> have passed"
                                            </Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This is why when telling times, we say <TM>san osa</TM> to mean{' '}
                                    <Eng>"three hours"</Eng>, and <TM>"osa san"</TM> to mean <Eng>"three o'clock"</Eng>,
                                    literally <Eng>"third hour"</Eng>.
                                </P>
                                <See href="units-of-time">Units of Time</See>
                            </Section>
                            <Section>
                                <Title id="fractions-decimals-and-percents">Fractions, Decimals, and Percents</Title>
                                <P>
                                    It's pretty straight forward to talk about whole numbers, but it gets a bit more
                                    complicated when you need to discuss numbers with fractional components.
                                </P>
                                <P>
                                    To talk about <B>fractions</B> we use <TM>[numerator] osa pi [denominator]</TM>,
                                    literally <Eng>"[numerator] parts of [denominator]</Eng>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>san osa pi lima</TM>
                                        <Answer>
                                            <Eng>3/5</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tu ten po osa pi tu kenta san ten wan</TM>
                                        <Answer>
                                            <Eng>24/231</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    To talk about <B>decimals</B> we use <TM>[whole number] suti [decimal digits]</TM>.
                                    Decimal digits are stated one by one using single digit number words.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ten tu suti san tu po po</TM>
                                        <Answer>
                                            <Eng>12.3244</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>san suti wan po wan lima newen tu ...</TM>
                                        <Answer>
                                            <Eng>3.141592...</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    To talk about <B>percentages</B> we add the word <TM>senti</TM> to the end of the
                                    number. This can be combined with decimal notation to specify decimal percentages.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tu ten lima senti</TM>
                                        <Answer>
                                            <Eng>25%</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>po ten suti oto sepen wan senti</TM>
                                        <Answer>
                                            <Eng>40.871%</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="negative-numbers">Negative Numbers</Title>
                                <P>
                                    <B>Negative numbers</B> are stated using <TM>ta pi [number]</TM> meaning{' '}
                                    <Eng>"reflection of [number]"</Eng> or <Eng>"opposite of [number]"</Eng>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ta pi san</TM>
                                        <Answer>
                                            <Eng>-3</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>ta pi po osa pi ten</TM>
                                        <Answer>
                                            <Eng>-4/10</Eng>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>ta pi sesi suti newen newen</TM>
                                        <Answer>
                                            <Eng>-6.99</Eng>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section>
                                <Title id="mathematical-operations">Mathematical Operations</Title>
                                <P>
                                    While there are no specific words for mathematical operations such as{' '}
                                    <Eng>"addition"</Eng> or <Eng>"multiplication"</Eng>, other descriptions can be used
                                    to talk about the operations in a mathematical context.
                                </P>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Operation</th>
                                            <th>toki ma</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Addition
                                                <br />2 + 3
                                            </td>
                                            <td>
                                                <TM>[te] li tewe wa ki tu kan san </TM>
                                                <Answer>
                                                    literally <Eng>"to join 2 with 3"</Eng>
                                                </Answer>
                                                <br />
                                                <TM>[te] li pana e san ki tu </TM>
                                                <Answer>
                                                    literally <Eng>"to give 3 to 2"</Eng>
                                                </Answer>
                                                <br />
                                                <TM>[te] li unja wa ki tu kan san </TM>
                                                <Answer>
                                                    literally <Eng>"to combine 2 with 3"</Eng>
                                                </Answer>
                                                <br />
                                                (informal) <TM>tu en san</TM>
                                                <Answer>
                                                    literally <Eng>"2 and 3"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Subtraction
                                                <br />7 - 4
                                            </td>
                                            <td>
                                                <TM>[te] li weka wa ki po tan sepen</TM>
                                                <Answer>
                                                    literally <Eng>"to make-absent 4 from 7"</Eng>
                                                </Answer>
                                                <br />
                                                <TM>[te] li lanpan e po tan sepen</TM>
                                                <Answer>
                                                    literally <Eng>"to take 4 from 7"</Eng>
                                                </Answer>
                                                <br />
                                                <TM>[te] li papon wa ki sepen e po</TM>
                                                <Answer>
                                                    literally <Eng>"to cause 7 to emit 4"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Multiplication
                                                <br />2 * 5
                                            </td>
                                            <td>
                                                <TM>[te] li mute wa ki tu kan lima</TM>
                                                <Answer>
                                                    literally <Eng>"to make-many 2 with 5"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Division
                                                <br />9 / 4
                                            </td>
                                            <td>
                                                <TM>[te] li kipisi ki newen pelu po</TM>
                                                <Answer>
                                                    literally <Eng>"to cut 9 using 4</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="unofficial">
                                                Absolute Value
                                                <br />
                                                |-5|
                                            </td>
                                            <td className="unofficial">
                                                <TM>[te] li sata wa ki ta pi lima su nula</TM>
                                                <Answer>
                                                    literally <Eng>"to make -5 more than 0"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Exponentiation
                                                <br />6<sup>3</sup>
                                            </td>
                                            <td>
                                                <TM>[te] li mute wa ki sesi kan sama an san taka</TM>
                                                <Answer>
                                                    literally <Eng>"to make-many 6 with itself 3 times"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Nth Root
                                                <br />∛<span style={{ borderTop: '1px solid' }}>16</span>
                                            </td>
                                            <td>
                                                <TM>[te] li alasa e open tu pi kenta tu ten lima</TM>
                                                <Answer>
                                                    literally <Eng>"to find the 3rd origin of 125</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="misc" className="major">
                                Miscellaneous
                            </Title>
                            <Section>
                                <Title id="cardinal-directions">Cardinal Directions</Title>
                                <P>
                                    There are no dedicated words for the cardinal directions in toki ma. As such, the
                                    words for <Eng>"north"</Eng>, <Eng>"south"</Eng>, <Eng>"east"</Eng>, and{' '}
                                    <Eng>"west"</Eng> are defined relative to something that is constant regardless of
                                    your first language: the motion of the Sun. We talk about the directions{' '}
                                    <B>from the Sun's perspective</B>, meaning <Eng>"west"</Eng> is considered foreward,
                                    and <Eng>"north"</Eng> is considered to the right.
                                </P>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Direction</th>
                                            <th>toki ma</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>West</td>
                                            <td>
                                                <TM>sinpin suno</TM>
                                                <Answer>
                                                    literally <Eng>"to the front of the Sun"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>East</td>
                                            <td>
                                                <TM>monsi suno</TM>
                                                <Answer>
                                                    literally <Eng>"to the back of the Sun"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>North</td>
                                            <td>
                                                <TM>jupa suno</TM>
                                                <Answer>
                                                    literally <Eng>"to the right of the Sun"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>South</td>
                                            <td>
                                                <TM>soto suno</TM>
                                                <Answer>
                                                    literally <Eng>"to the left of the Sun"</Eng>
                                                </Answer>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Section>
                            <Section>
                                <Title id="names-and-foreign-words">Names and Foreign Words</Title>
                                <P>
                                    In order to fulfill the goal of an international language, it is best to try to use
                                    toki ma words to describe the things you are talking about. However, there are times
                                    when you will want to use names or words from outside toki ma in the interest of
                                    clarity, accuracy, or just general ease of use.
                                </P>
                                <P>
                                    When using external names or words, you have a few options. You may choose to either
                                    use the Latin script spelling of the word or name, or you can transliterate it into
                                    the sounds that toki ma has to offer. So the name <Eng>"Angela"</Eng> could be
                                    spelled <TM>Angela</TM>, <TM>Ankela</TM>, <TM>Anjela</TM>, etc. Any of these are
                                    acceptable. If you choose not to transliterate the name into toki ma, there is no
                                    guarantee how someone else may pronounce it based on their native language.
                                </P>
                                <P>
                                    Additionally, you can prefix the word or name with the toki ma word for the type of
                                    thing it is. If you're naming a person, it's common to say <TM>jan Ankela</TM>,
                                    making it clear that this is the name of a <TM>jan</TM>. If you're naming a food,
                                    you might prefix it with <TM>moku</TM>, such as <TM>moku Topu</TM> for{' '}
                                    <Eng>"tofu"</Eng>.
                                </P>
                                <P>All of the following examples are valid ways to say New York City:</P>
                                <Examples>
                                    <Ex>
                                        <TM>New York City</TM>
                                    </Ex>
                                    <Ex>
                                        <TM>naka New York City</TM>
                                    </Ex>
                                    <Ex>
                                        <TM>Nu Joka Siti</TM>
                                    </Ex>
                                    <Ex>
                                        <TM>naka Nu Joka Siti</TM>
                                    </Ex>
                                </Examples>
                                <P>
                                    Which way you choose to phrase a name or foreign word might depend on who you're
                                    talking to and how likely it is that they recognize the word you are saying.
                                </P>
                            </Section>
                            <Section>
                                <Title id="peko-and-a">
                                    <TM>peko</TM> and <TM>a</TM>
                                </Title>
                                <P>
                                    There are two words in toki ma that don't really fit into any other group nicely:{' '}
                                    <TM>peko</TM> and <TM>a</TM>. They are both used as <B>interjections</B> rather than
                                    standard words.
                                </P>
                                <P>
                                    Use <TM>peko</TM> to show <B>humility</B> and <B>politeness</B>. It is used for
                                    phrases like <Eng>"please"</Eng>, <Eng>"excuse me"</Eng>,{' '}
                                    <Eng>"you're welcome"</Eng>, <Eng>"hello"</Eng>, <Eng>"welcome"</Eng>, and many
                                    other polite phrases.
                                </P>
                                <P>
                                    Use <TM>a</TM> to show <B>emphasis</B> or <B>emotion</B> in your sentences. It
                                    usually goes at the beginning or end of the sentence, acting as something of an
                                    exclamation point. It can be used for both positive and negative emotion. It can
                                    also be repeated as <TM>a a</TM> to show laughter (<Eng>"ha ha"</Eng>).
                                </P>
                            </Section>
                            <Section>
                                <Title id="notes">Notes</Title>
                                <P>
                                    Many words and/or common constructions have some specifics in their use or meaning
                                    that may not be obvious in the definition. This chart contains notes about specific
                                    constructions and how they are used.
                                </P>
                                <table className="notes-table">
                                    <thead>
                                        <tr>
                                            <th>Word/Construction</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <TM>on</TM>
                                                <br />
                                                <Eng>he/she/it/they</Eng>
                                            </td>
                                            <td>
                                                This third person pronoun is generally only used to refer to{' '}
                                                <B>animate objects</B>. You wouldn't often use it to refer to a previous
                                                subject as "it" like you would in English. For that you'd probably use{' '}
                                                <TM>ni</TM> and <TM>na</TM> for <Eng>this</Eng> and <Eng>that</Eng>.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <TM>[li] pali</TM>
                                                <br />
                                                <Eng>to make, to do, to work</Eng>
                                            </td>
                                            <td>
                                                In this definition, <Eng>"to make"</Eng> always means{' '}
                                                <Eng>"to create"</Eng>, <B>never</B> <Eng>"to cause"</Eng>. English uses
                                                the word for both meanings, but for causation in toki ma you can only
                                                use <TM>wa</TM>.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Section>
                            <Separator>* * *</Separator>
                            <Title id="conversations" className="major">
                                Conversational Examples
                            </Title>
                            <TODO>Coming Soon!</TODO>
                        </div>
                    </BlurContext.Provider>
                </UnofficialContext.Provider>
            </GetDefContext.Provider>
        </WordListContext.Provider>
    );
}

export default App;
