import React, { useContext, useState } from 'react';
import './App.scss';
import classNames from 'classnames';

const BlurContext = React.createContext(true);

const spanType =
    (cls: string) =>
    ({ children, className }: { children?: React.ReactNode; className?: string }) =>
        <span className={classNames(cls, className)}>{children}</span>;

const divType =
    (cls: string) =>
    ({ children, className }: { children?: React.ReactNode; className?: string }) =>
        <div className={classNames(cls, className)}>{children}</div>;

const Answer = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    const [hidden, setHidden] = useState(true);
    const blur = useContext(BlurContext);
    return (
        <span
            onClick={() => setHidden(!hidden)}
            className={classNames('answer', className, { hidden: blur && hidden })}
        >
            <span className="spacer"> - </span>
            {children}
        </span>
    );
};

const TM = spanType('tm');
const Examples = divType('examples');
const Word = spanType('word');
const B = spanType('bold');
const P = divType('expos');
const Section = divType('section');
const Title = divType('title');
const Ex = divType('example');
const Eng = spanType('eng');

function App() {
    const [blur, setBlur] = useState(true);
    return (
        <BlurContext.Provider value={blur}>
            <div className="App">
                <h1>Complete Guide to toki ma Grammar</h1>
                <h2>Written by jan Ta</h2>
                <P>
                    Due to the nature of the language, toki ma is made up of a small set of relatively simple
                    grammatical constructions, but that isn't to say that it is not possible to represent complex ideas.
                    These simple constructions can be used together to great effect. This guide will provide
                    explanations of these constructions and examples of their use in an attempt to document both the
                    general language grammar rules, and more specific, smaller constructions seen in common use.
                </P>
                <P>
                    <B>
                        This guide will have example sentences in toki ma, and blurred translations in English. Click
                        the translations to reveal them. You are highly encouraged to try translating the examples
                        before peeking!
                    </B>
                </P>
                <P>
                    If you really don't want the blur, <button onClick={() => setBlur(!blur)}>click here</button> to
                    toggle it on and off for everything.
                </P>
                <h2>Basic Sentence Structure</h2>
                <Section>
                    <Title>li</Title>
                    <P>
                        The most basic particle <TM>li</TM> <B>marks the verb</B> of a sentence. Without it, you could
                        only talk about nouns and adjectives!
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
                        It's a bit confusing here just due to how English works, but it's very important not to get
                        confused thinking <TM>li</TM> means <Eng>"to be"</Eng>. That comes from the verb forms of the
                        words <TM>moku</TM>, <TM>jan</TM>, and <TM>lete</TM> themselves. The role of <TM>li</TM> is{' '}
                        <B>only</B> to mark that the following word <B>should be interpreted as a verb</B>.
                    </P>
                    <P>
                        While these translations are valid, it's important to note that <TM>li</TM> alone does not say
                        anything about the <Word>tense</Word>, meaning <B>past</B> (<Eng>"I was eating"</Eng>),{' '}
                        <B>present</B> (<Eng>"I am eating"</Eng>), or <B>future</B> (<Eng>"I will be eating"</Eng>), or
                        about the <Word>aspect</Word>, meaning <B>perfective</B> (completed action, <Eng>I ate</Eng>),
                        continuous (ongoing action, <Eng>I am eating</Eng>), or repeated (habitual action,{' '}
                        <Eng>I eat</Eng>
                        ). These are all valid translations of the sentence <TM>mi li moku</TM>. Which one is meant must
                        be inferred through context.
                    </P>
                    <P>
                        Later we will learn more ways to specify tense and aspect to remove this ambiguity. For now,
                        example sentences will just assume one for convenience.
                    </P>
                    <P>
                        When using <TM>li</TM> <B>without a subject</B>, the sentence usually becomes a statement simply
                        <B>that an action is performed</B>.
                    </P>
                    <Examples>
                        <Ex>
                            <TM>li moku e kili</TM>
                            <Answer>
                                <Eng>"Fruit is eaten"</Eng> (more on <TM>e</TM> in the next section)
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
                        In English this sounds a bit awkward, but it is a clearly communicated concept and is completely
                        acceptable in toki ma. How often you might say such a thing is a different question.
                    </P>
                </Section>
                <Section>
                    <Title>e</Title>
                    <P>
                        Verbs can be <Word>intransitive</Word>, meaning they stand on their own, or{' '}
                        <Word>transitive</Word>, meaning they act on something known as the <Word>direct object</Word>.
                        The preposition <TM>e</TM> <B>marks the direct object</B> in the same way that <TM>li</TM> marks
                        the verb.
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
                        The particle <TM>e</TM> marks <TM>kili</TM> as the object of the verb <TM>moku</TM>. It's
                        important to note that <TM>e</TM> is considered a preposition, not a particle. This is relevant
                        because of word order, which we will discuss in a moment. Here are a few more examples:
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
                    <Title>o</Title>
                    <P>
                        The particle <TM>o</TM> works the same way as <TM>li</TM>, marking the verb, except that it
                        turns the statement into a <B>recommendation</B>, <B>suggestion</B>, or what the speaker
                        believes <B>should</B> happen.
                    </P>
                    <Examples>
                        <Ex>
                            <TM>on o moku e kili</TM>
                            <Answer>
                                <Eng>"They should eat fruit"</Eng>
                            </Answer>
                        </Ex>
                        <Ex>
                            <TM>jan o pana e moku ki on</TM>
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
                        When used <B>without a subject</B>, the statement turns into a <B>command</B> or <B>request</B>{' '}
                        of the listener, or a <B>desire for action</B> to be taken.
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
                                <Eng>"Be happy!"</Eng> a very common phrase used to mean <Eng>"Welcome!"</Eng>
                            </Answer>
                        </Ex>
                    </Examples>
                    <P>Moods will be discussed further in a later section.</P>
                </Section>
                <Section>
                    <Title>Word Order: SVO and SOV</Title>
                    <P>
                        A language such as toki ma is designed to be easy to learn for as many people as possible,
                        regardless of their native language. Because of this,{' '}
                        <B>
                            toki ma supports both <Word>Subject-Object-Verb</Word> and <Word>Subject-Verb-Object</Word>{' '}
                            sentence structures
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
                        These two sentences are <B>both allowed</B>. Any <Word>subject</Word> must come first, but the{' '}
                        <Word>verb</Word>, the <Word>object</Word>, and any other <Word>prepositional phrases</Word> may
                        come in <B>any order</B> after it.
                    </P>
                </Section>
                <h2>Adding Complexity</h2>
                <Section>
                    <Title>te</Title>
                    <P>
                        The particle <TM>te</TM> marks <Word>noun clauses</Word> and <Word>relative clauses</Word>. This
                        is a very powerful tool for sentence construction, so let's start simple to show what that
                        means.
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
                        This isn't a complete sentence, it's a <Word>noun clause</Word>. It simply refers to the concept
                        of eating fruit, <B>as an entire noun</B>. This allows it to be used as a <B>subject</B> or{' '}
                        <B>object</B> of a verb. Let's take a look at an example:
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
                        Notice how <TM>te li moku e kili</TM> is preceded by <TM>e</TM>, making the entire phrase a{' '}
                        <B>noun clause</B>; technically it's a <B>noun clause object of a verb</B> for you linguists out
                        there. Let's look at another example:
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
                        <Eng>"eating fruit"</Eng> are all simply <B>noun clauses</B> once again referring to the concept
                        of eating fruit, all marked by <TM>te</TM>, and all valid interpretations of{' '}
                        <TM>te li moku e kili</TM>. In this case, again for you linguists out there, this is a{' '}
                        <B>noun clause subject of a verb</B>.
                    </P>
                    <P>
                        As previously stated, <TM>te</TM> can also mark <Word>relative clauses</Word>. While noun
                        clauses act as a noun (surprise surprise), relative clauses, also known as{' '}
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
                        The subject of the sentence is <Eng>"the person"</Eng>, but we have tacked on a descriptive
                        phrase: <Eng>"who eats fruit"</Eng>. This phrase is a <Word>relative clause</Word>. It acts as
                        an adjective, enhancing the description of the person we are talking about. Here are more
                        examples:
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
                            </Answer>
                        </Ex>
                    </Examples>
                    <P>
                        These relative clauses have one minor difference to the first example: they have a{' '}
                        <Word>dangling preposition</Word> at the end. This happens because the <B>subject</B> of our
                        sentence would normally be the <B>object of a preposition</B> if we were to rearrange the
                        relative clause to stand on its own. Let's analyze the first example further to understand this
                        better.
                    </P>
                    <Examples>
                        <Ex>
                            <TM>kili te mi li moku e ...</TM>
                            <Answer className="no-blur">
                                <Eng>"The fruit that I eat ..."</Eng>
                            </Answer>
                        </Ex>
                    </Examples>
                    <P>
                        The subject of the sentence is <TM>kili</TM>, <Eng>"the fruit</Eng>. Let's drop the <TM>te</TM>{' '}
                        and rearrange it.
                    </P>
                    <Ex>
                        <TM>mi li moku e kili</TM>
                        <Answer className="no-blur">
                            <Eng>"I eat fruit"</Eng>
                        </Answer>
                    </Ex>
                    <P>
                        This is now a complete sentence, but the <B>subject has changed</B> to <TM>mi</TM>. We are now
                        talking about ourselves eating the fruit. Without using <TM>te</TM>, we could only ever talk
                        about <B>the thing doing the action</B> as the subject of a sentence. If we ever want to talk
                        about the <B>object of a preposition</B> rather than the subject of the action, we must
                        rearrange the sentence using <TM>te</TM>. In this case{' '}
                        <B>the original preposition must dangle</B> at the end of the relative clause.
                    </P>
                    <P>
                        There is one last thing to mention about using <TM>te</TM> in a sentence. Whenever <TM>te</TM>{' '}
                        comes after the preposition <TM>e</TM>, the <TM>e</TM> can simply be dropped. Additionally,
                        whenever <TM>te</TM> comes before <TM>li</TM>, the <TM>li</TM> can be dropped. These can combine
                        to cause the construction <TM>... e te li ...</TM> to simply become <TM>... te ...</TM>.
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
                        This is very commonly used, though not required. There may be cases where it feels more natural
                        to keep one or both in the sentence.
                    </P>
                </Section>
                <Section>
                    <Title>Punctuation</Title>
                    <P>
                        This is a good time to mention punctuation rules in toki ma, because there are really only two.
                        <ol>
                            <li>Place periods at the ends of sentences</li>
                            <li>
                                Place commas after <TM>te</TM> clauses before moving on to the rest of the sentence
                            </li>
                        </ol>
                        Any other punctuation use is up to you. You can do whatever feels comfortable or clears up
                        ambiguity. Question marks, exclamation points, commas, colons, elipses...Go wild.
                    </P>
                </Section>
                <Section>
                    <Title>Modifiers</Title>
                    <P>
                        Modifiers act as <Word>adjectives</Word> and <Word>adverbs</Word>, with the modifier coming{' '}
                        <B>after</B> the modified word, not before as it is done in English. These modifiers can affect
                        nouns as <B>adjectives</B>, or verbs as <B>adverbs</B>.
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
                                (Yes, the adjective here is <Eng>"my"</Eng>. We don't usually talk about possessives as
                                adjectives, but trust me they are!)
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
                        Modifiers can also affect <B>other modified phrases</B>, connecting together to form modifier
                        chains. When modifiers are chained, the are interpreted from <B>left-to-right</B>.
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
                        Wait a second, why does that second sentence say <Eng>"many good people"</Eng> and not{' '}
                        <Eng>"a very good person"</Eng>? Remember that modifiers apply from left to right. <TM>pona</TM>{' '}
                        applies to <TM>jan</TM>, so now <TM>mute</TM> applies to <TM>jan pona</TM>, not just to{' '}
                        <TM>pona</TM>. Think of it like parentheses in math class:{' '}
                        <TM>((((jan pasan) lamo) pona) mute)</TM> - <Eng>many good, tall, happy people</Eng>.
                    </P>
                    <P>
                        So how <B>do</B> you say <Eng>"a very good person"</Eng>? For that, we need to introduce a new
                        preposition.
                    </P>

                    <Section>
                        <Title>pi</Title>
                        <P>
                            The preposition <TM>pi</TM> is used for the <Word>genitive case</Word>. Think of the
                            genitive as a relational case, relating one thing to another. The best equivalence in
                            English is the word <Eng>"of"</Eng>. It is very useful for <B>regrouping modifiers</B>{' '}
                            rather than just chaining them endlessly to one noun.
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
                            It is also good for relating a noun to another noun, as is the standard use of the word{' '}
                            <Eng>"of"</Eng>.
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
                                    <Eng>"house of food"</Eng>, possibly a restaurant a kitchen
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            This second use is also good for specifying possessives beyond simply using <TM>mi</TM>,{' '}
                            <TM>si</TM>, and <TM>on</TM>.
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
                                    literally <Eng>"house of the mother of my mother"</Eng>, meaning "my grandmother's
                                    house"
                                </Answer>
                            </Ex>
                        </Examples>
                    </Section>
                </Section>
                <Section>
                    <Title>Cause and Effect</Title>
                    <Section>
                        <Title>wa</Title>
                        <P>
                            As a verb, the word <TM>wa</TM> means <Eng>"to cause"</Eng>, but it can also be used as a{' '}
                            <B>modifier</B> to another verb, to act as a <Word>causative</Word>. In this case, the
                            subject is now the <Word>causer</Word> (the reason for action), causing the{' '}
                            <Word>causee</Word> (the one doing the action) to perform the action. The preposition{' '}
                            <TM>ki</TM> is used to mark the <B>causee</B>. You can think of <TM>ki</TM> in this context
                            as meaning something like <Eng>"from the perspective of"</Eng>, rather than the usual{' '}
                            <Eng>"to"</Eng> or <Eng>"towards"</Eng>.
                        </P>
                        <Examples>
                            <Ex>
                                <TM>mi li pasan wa ki si</TM>
                                <Answer>
                                    literally <Eng>"I cause-to-be-happy from the perspective of you"</Eng> or{' '}
                                    <Eng>"I make you happy"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            Let's break that down: the <B>causer</B>, <TM>mi</TM>, is causing the <B>causee</B>,{' '}
                            <TM>si</TM>, to perform the action of <TM>li pasan</TM>, <Eng>"to be happy"</Eng>.
                        </P>
                        <P>
                            This could, of course, also be said using <TM>wa</TM> as a normal verb instead of a
                            causative modifier, and using <TM>te si li pasan</TM>, <Eng>"that you be happy"</Eng> as the
                            direct object. You don't always have to use <TM>wa</TM> as a modifier.
                        </P>
                        <Examples>
                            <Ex>
                                <TM>mi li wa e te si li pasan</TM>
                                <Answer>
                                    literally <Eng>"I cause that you be happy"</Eng> or <Eng>"I make you happy"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            So why can't you say{' '}
                            <TM>
                                mi li pasan wa <B>e</B> si
                            </TM>
                            ? Why does it have to use <TM>ki</TM>? Because the direct object still applies to{' '}
                            <B>the verb being caused</B>, not to the <B>act of causing</B> the other action. In this
                            case, <TM>li pasan</TM> is an <Word>intransitive</Word> verb, meaning it has no direct
                            object. It doesn't make sense to <Eng>"be happy [a thing]"</Eng>, because being happy is
                            just a thing that you...do. Let's look at a <Word>transitive</Word> verb for a better idea
                            of what is going on.
                        </P>
                        <Examples>
                            <Ex>
                                <TM>mi li moku wa ki si e kili</TM>
                                <Answer>
                                    literally <Eng>"I cause you to eat fruit"</Eng>, or <Eng>"I feed you fruit"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            The direct object, <TM>kili</TM>, applies to the verb <TM>moku</TM>. It is the object of the{' '}
                            <B>action</B>, not the object of the <B>causation</B> of that action. That would be the{' '}
                            <B>causee</B>.
                        </P>
                        <P>
                            Because we must use <TM>ki</TM> in this way when using causative <TM>wa</TM>, some sentences
                            may become too confusing for this structure and may require going back to using <TM>wa</TM>{' '}
                            as a verb itself. Try this one:
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
                            There simply isn't a good way to phrase this with the causative <TM>wa</TM> modifier. If you
                            try <TM>mi li kanti ki si e kanti ki mi</TM>, it's not clear which <TM>ki</TM> phrase is
                            meant as the <B>causee</B>, and which is meant as the recipient of the music-playing.
                        </P>
                    </Section>
                    <Section>
                        <Title>nen</Title>
                        <P>
                            Another way to create causative relationships is with the preposition <TM>nen</TM> meaning{' '}
                            <Eng>"because of"</Eng> or <Eng>"caused by"</Eng>.
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
                            Rather than making the <B>subject</B> the causer, as with <TM>wa</TM>, using <TM>nen</TM>{' '}
                            marks an <B>object</B> as the causer.
                        </P>
                        <P>
                            This was originally introduced for emotions and <TM>wolin</TM> to make things less forceful
                            and/or, for lack of a better word, predatory. Consider:
                        </P>
                        <Examples>
                            <Ex>
                                <TM>mi li wolin e si</TM>
                                <Answer>
                                    <Eng>"I love you</Eng>, implying that loving is an action done directly <B>to</B>{' '}
                                    you
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>mi li wolin nen si</TM>
                                <Answer>
                                    <Eng>"I feel love because of you"</Eng>, implying that to love is an experience and
                                    not a forceful action
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            For actions other than feeling emotions, <TM>nen</TM> is also used to deemphasize the{' '}
                            <B>causation</B> in favor of the <B>action</B>. Using <TM>nen</TM> simply states the cause,
                            rather than making the cause be the subject.
                        </P>
                        <Examples>
                            <Ex>
                                <TM>si li wa e te mi li pali e musi</TM>
                                <Answer>
                                    <Eng>"You cause me to make art"</Eng>, strong focus on <Eng>"you"</Eng> being the
                                    cause, and the causation itself
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>si li pali wa e musi ki mi</TM>
                                <Answer>
                                    <Eng>"I make art, and you are the cause"</Eng>, equal focus on the act of{' '}
                                    <Eng>"making art"</Eng>, and on <Eng>"you"</Eng> being the cause
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>mi li pali e musi nen si</TM>
                                <Answer>
                                    <Eng>"I make art because of you"</Eng>, focus on the act of <Eng>"making art"</Eng>{' '}
                                    and simply stating that <Eng>"you"</Eng> are the reason
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            All of these imply that <TM>si</TM> is their muse, their inspiration for making art, but how
                            much that is a focus of the sentence is changed based on which sentence structure you choose
                            to use.
                        </P>
                    </Section>
                </Section>
                <Section>
                    <Title>Conjunctions</Title>
                    <Section>
                        <Title>en / anu / lekin</Title>
                        <P>
                            The particles <TM>en</TM> (<Eng>"and"</Eng>), <TM>anu</TM> (<Eng>"or"</Eng>), and{' '}
                            <TM>lekin</TM> (<Eng>"but"</Eng>) can be used in almost exactly the same way as English. You
                            can use them to separate or join sentences, clauses, individual words, etc. Here is a
                            non-exhaustive list of examples:
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
                                    jan Ken <B>anu</B> jan Tan o pana e mani ki on
                                </TM>
                                <Answer>
                                    <Eng>
                                        "Ken <B>or</B> Dan should give them money"
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
                    <Section>
                        <Title>Sequentiality</Title>
                        <P>
                            Using the particle <TM>en</TM> generally implies <Word>concurrency</Word> of events or
                            states, meaning they occur at the same time.
                        </P>
                        <Examples>
                            <Ex>
                                <TM>
                                    mi li wile te li moku e kasi <B>en</B> pan suwi
                                </TM>
                                <Answer>
                                    <Eng>"I want to eat vegetables and cake"</Eng>, implying eating them together{' '}
                                    <B>in the same course</B>
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>
                                    mi li moku <B>en</B> mi li lukin e sitelen kanpe
                                </TM>
                                <Answer>
                                    <Eng>"I eat and watch a movie"</Eng>, implying eating <B>while</B> watching the
                                    movie
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>
                                    mi li pana e mani ki si <B>en</B> on
                                </TM>
                                <Answer>
                                    <Eng>"I am giving money to you and them"</Eng>, implying <B>one moment</B> of giving
                                    out money to two people
                                </Answer>
                            </Ex>
                        </Examples>
                        <P>
                            In order to convey <Word>sequentiality</Word>, events occuring one after the other, you can
                            instead <B>repeat the related preposition</B> or{' '}
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
                <Section>
                    <Title>Asking Questions</Title>
                    <P>
                        There are three kinds of questions you may want to ask: <Word>polar questions</Word> (yes/no),{' '}
                        <Word>open questions</Word> (who/what/why etc), and <Word>alternative questions</Word> (this or
                        that). Let's go over them one by one.
                    </P>
                    <P>
                        To ask a <Word>polar question</Word>, simply append the statement with <TM>anu no?</TM>. Yes,
                        it's that easy.
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
                        The response to a polar question should either be <TM>tuntan</TM> or <TM>no</TM>.
                    </P>
                    <P>
                        To ask an <Word>open question</Word>, the special particle <TM>seme</TM> can be placed as kind
                        of a <B>fill-in-the-blank</B> word. This is best demonstrated with some examples:
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
                    </Examples>
                    <P>
                        Simply place <TM>seme</TM> into the sentence where you would normally place the answer, had you
                        known the answer.
                    </P>
                    <P>
                        Finally, asking an <Word>alternative question</Word>, is kind of a combination of the other two:
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
                        The construction <TM>seme pi [X] anu [Y] anu [Z] anu ...</TM> is used to list possibilities.
                    </P>
                </Section>
                <Section>
                    <Title>Setting the Scene</Title>
                    <Section>
                        <Title>Tense and Aspect</Title>
                        <P>
                            The <Word>tense</Word> of a verb talks about <B>when</B> the verb happens. The{' '}
                            <Word>aspect</Word> of a verb talks about <B>how</B> the verb happens. Verbs in toki ma are{' '}
                            <Word>tenseless</Word> and <Word>aspectless</Word> by default, so this would all normally be
                            inferred from context.
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
                            But just because you say <TM>mi li moku iputu</TM>, that doesn't mean everything is crystal
                            clear yet. That could mean <Eng>"I am eating"</Eng>, <Eng>"I have eaten"</Eng>, or{' '}
                            <Eng>"I eat (habitually)"</Eng>. All of these translations are in <B>present tense</B>, but
                            they all have{' '}
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
                                <TM>sajo</TM> indicates <B>continuous</B> action, so <TM>mi li moku iputu sajo</TM>{' '}
                                would mean <Eng>"I am eating"</Eng>, spefically stating{' '}
                                <Eng>"I am currently in the process of eating"</Eng>. In this case, the action of{' '}
                                <Eng>eating</Eng> is still ongoing.
                            </Ex>
                            <Ex>
                                <TM>pini</TM> indicates <B>completed</B> actions, so <TM>mi li moku iputu pini</TM>{' '}
                                would mean <Eng>"I have eaten"</Eng>, speficially stating{' '}
                                <Eng>"I am currently in a state of having finished eating"</Eng>. In this case, the
                                action of <Eng>eating</Eng> has now stopped.
                            </Ex>
                            <Ex>
                                <TM>taka</TM> indicates <B>repeated</B> or <B>habitual</B> action, so{' '}
                                <TM>mi li moku iputu taka</TM> would mean <Eng>"I eat"</Eng>, specifically stating{' '}
                                <Eng>"Eating is an activity that I currently habitually partake in"</Eng>. In this case,
                                the action of <Eng>eating</Eng> isn't necessarily happening right now, but it is still a
                                regular occurrence for the speaker.
                            </Ex>
                        </Examples>
                        <P>
                            These words can be used to add specificity to your verbs. To be as specific as possible,
                            you'd have to use <B>both a tense modifier and an aspect modifier</B>. For example, only
                            using <TM>sajo</TM> without a <B>tense</B> modifier results in the same type of amiguity as
                            we saw above: the sentence <TM>mi li moku sajo</TM> could mean any of{' '}
                            <Eng>"I was eating"</Eng>, <Eng>"I am eating"</Eng>, or <Eng>"I will be eating"</Eng>, all
                            of which are <B>continuous</B> actions but have different <B>tense</B>.
                        </P>
                        <P>Here is a list of all possible tense/aspect combinations.</P>
                        <table>
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
                                    </TM>
                                    (<Eng>future</Eng>)
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <TM>
                                        <B>sajo</B>
                                    </TM>
                                    <br />(<Eng>ongoing</Eng>)
                                </th>
                                <td>
                                    <TM>mi li moku pisile sajo</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I was eating"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku iputu sajo</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I am eating"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku akile sajo</TM>
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
                                    <TM>mi li moku pisile pini</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I had eaten"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku iputu pini</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I have eaten"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku akile pini</TM>
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
                                    <TM>mi li moku pisile taka</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I eat (habitually)"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku iputu taka</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I used to eat (habitually)"</Eng>
                                    </Answer>
                                </td>
                                <td>
                                    <TM>mi li moku akile taka</TM>
                                    <Answer className="no-spacer">
                                        <br />
                                        <Eng>"I will eat (habitually)"</Eng>
                                    </Answer>
                                </td>
                            </tr>
                        </table>
                        <P>
                            To reiterate, <B>all of this and more</B> can be often inferred through context without
                            adding these modifiers, but they're here to use as needed to make sure you are properly
                            understood.
                        </P>
                    </Section>
                    <Section>
                        <Title>Units of Time</Title>
                        <P>
                            Without dedicated words for units of time, toki ma has a few conventional phrases to discuss
                            common units of time. They come in short forms, useful for when context makes it very
                            obvious that you are talking about time, and long forms, useful for when context isn't quite
                            enough and you need to be more specific.
                        </P>
                        <table>
                            <tr>
                                <th>Unit</th>
                                <th>Long Form</th>
                                <th>Short Form<br />(informal)</th>
                            </tr>
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
                                    <TM>tenpo</TM>
                                    <br />
                                    <Answer className="no-spacer">
                                        <Eng>"star"</Eng>
                                    </Answer>
                                </td>
                            </tr>
                        </table>
                    </Section>
                    <Section>
                        <Title>la / ita</Title>
                        <P>
                            The particles <TM>la</TM> and <TM>ita</TM> are used to attach <Word>context</Word> phrases
                            to your sentences. With <TM>la</TM>, the context phrase comes before it and the sentence
                            comes after, and with <TM>ita</TM>, the context comes after and the sentence comes before.
                            Yes, that's a pretty vague explanation, but that's kind of the point. "Context" can be a
                            wide variety of things. Among those is specifying a <B>relative time</B> for the entire
                            sentence.
                        </P>
                        <Examples>
                            <Ex>
                                <TM><B>suno pisile la</B> mi li moku e kili</TM>
                                <Answer><Eng>"I ate fruit <B>yesterday</B></Eng><br />This <B>could</B> be interpreted as <Eng>"a few days ago</Eng> or <Eng>"in the past days"</Eng>, interpreting <TM>suno</TM> as a plural, but that is better represented with <TM>suno mute</TM></Answer>
                            </Ex>
                            <Ex></Ex>
                        </Examples>
                    </Section>
                </Section>
                {/*
                TODO:
                    - [verb] pi
                    - li [modifier] pi
                    - pi precedence
                    - negation
                    - mood
                    - conditionals
                    - numbers
                    - other prepositions
                    - lon-pi
                 */}
            </div>
        </BlurContext.Provider>
    );
}

export default App;
