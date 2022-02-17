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
const Expos = divType('expos');
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
                <Expos>
                    Due to the nature of the language, toki ma is made up of a small set of relatively simple
                    grammatical constructions, but that isn't to say that it is not possible to represent complex ideas.
                    These simple constructions can be used together to great effect. This guide will provide
                    explanations of these constructions and examples of their use in an attempt to document both the
                    general language grammar rules, and more specific, smaller constructions seen in common use.
                </Expos>
                <Expos>
                    <B>
                        This guide will have example sentences in toki ma, and blurred translations in English. Click
                        the translations to reveal them. You are highly encouraged to try translating the examples
                        before peeking!
                    </B>
                </Expos>
                <Expos>
                    If you really don't want the blur, <button onClick={() => setBlur(!blur)}>click here</button> to
                    toggle it on and off for everything.
                </Expos>
                <h2>Basic Sentence Structure</h2>
                <Section>
                    <Title>li</Title>
                    <Expos>
                        The most basic particle <TM>li</TM> <B>marks the verb</B> of a sentence. Without it, you could
                        only talk about nouns and modifiers!
                    </Expos>
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
                    <Expos>
                        It's a bit confusing here just due to how English works, but it's very important not to get
                        confused thinking <TM>li</TM> means <Eng>"to be"</Eng>. That comes from the verb forms of the
                        words <TM>moku</TM>, <TM>jan</TM>, and <TM>lete</TM> themselves. The role of <TM>li</TM> is{' '}
                        <B>only</B> to mark that the following word <B>should be interpreted as a verb</B>.
                    </Expos>
                    <Expos>
                        While these translations are valid, it's important to note that <TM>li</TM> alone does not say
                        anything about the <Word>tense</Word>, meaning <B>past</B> (<Eng>"I was eating"</Eng>),{' '}
                        <B>present</B> (<Eng>"I am eating"</Eng>), or <B>future</B> (<Eng>"I will be eating"</Eng>), or
                        about the <Word>aspect</Word>, meaning <B>perfective</B> (completed action, <Eng>I ate</Eng>),
                        continuous (ongoing action, <Eng>I am eating</Eng>), or repeated (habitual action,{' '}
                        <Eng>I eat</Eng>
                        ). These are all valid translations of the sentence <TM>mi li moku</TM>. Which one is meant must
                        be inferred through context.
                    </Expos>
                    <Expos>
                        Later we will learn more ways to specify tense and aspect to remove this ambiguity. For now,
                        example sentences will just assume one for convenience.
                    </Expos>
                    <Expos>
                        When using <TM>li</TM> <B>without a subject</B>, the sentence usually becomes a statement simply
                        <B>that an action is performed</B>.
                    </Expos>
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
                    <Expos>
                        In English this sounds a bit awkward, but it is a clearly communicated concept and is completely
                        acceptable in toki ma. How often you might say such a thing is a different question.
                    </Expos>
                </Section>
                <Section>
                    <Title>e</Title>
                    <Expos>
                        Verbs can be <Word>intransitive</Word>, meaning they stand on their own, or{' '}
                        <Word>transitive</Word>, meaning they act on something known as the <Word>direct object</Word>.
                        The preposition <TM>e</TM> <B>marks the direct object</B> in the same way that <TM>li</TM> marks
                        the verb.
                    </Expos>
                    <Examples>
                        <Ex>
                            <TM>mi li moku e kili</TM>
                            <Answer>
                                <Eng>"I am eating fruit"</Eng>
                            </Answer>
                        </Ex>
                    </Examples>
                    <Expos>
                        The particle <TM>e</TM> marks <TM>kili</TM> as the object of the verb <TM>moku</TM>. It's
                        important to note that <TM>e</TM> is considered a preposition, not a particle. This is relevant
                        because of word order, which we will discuss in a moment. Here are a few more examples:
                    </Expos>
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
                    <Expos>
                        The particle <TM>o</TM> works the same way as <TM>li</TM>, marking the verb, except that it
                        turns the statement into a <B>recommendation</B>, <B>suggestion</B>, or what the speaker
                        believes <B>should</B> happen.
                    </Expos>
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
                    <Expos>
                        When used <B>without a subject</B>, the statement turns into a <B>command</B> or <B>request</B>{' '}
                        of the listener, or a <B>desire for action</B> to be taken.
                    </Expos>
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
                    <Expos>Moods will be discussed further in a later section.</Expos>
                </Section>
                <Section>
                    <Title>Word Order: SVO and SOV</Title>
                    <Expos>
                        A language such as toki ma is designed to be easy to learn for as many people as possible,
                        regardless of their native language. Because of this,{' '}
                        <B>
                            toki ma supports both <Word>Subject-Object-Verb</Word> and <Word>Subject-Verb-Object</Word>{' '}
                            sentence structures
                        </B>
                        .
                    </Expos>
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
                    <Expos>
                        These two sentences are <B>both allowed</B>. Any <Word>subject</Word> must come first, but the{' '}
                        <Word>verb</Word>, the <Word>object</Word>, and any other <Word>prepositional phrases</Word> may
                        come in <B>any order</B> after it.
                    </Expos>
                </Section>
                <h2>Adding Complexity</h2>
                <Section>
                    <Title>te</Title>
                    <Expos>
                        The particle <TM>te</TM> marks <Word>noun clauses</Word> and <Word>relative clauses</Word>. This
                        is a very powerful tool for sentence construction, so let's start simple to show what that
                        means.
                    </Expos>
                    <Examples>
                        <Ex>
                            <TM>te li moku e kili</TM>
                            <Answer>
                                <Eng>"to eat fruit"</Eng>
                            </Answer>
                        </Ex>
                    </Examples>
                    <Expos>
                        This isn't a complete sentence, it's a <Word>noun clause</Word>. It simply refers to the concept
                        of eating fruit, <B>as an entire noun</B>. This allows it to be used as a <B>subject</B> or{' '}
                        <B>object</B> of a verb. Let's take a look at an example:
                    </Expos>
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
                    <Expos>
                        Notice how <TM>te li moku e kili</TM> is preceded by <TM>e</TM>, making the entire phrase a{' '}
                        <B>noun clause</B>; technically it's a <B>noun clause object of a verb</B> for you linguists out
                        there. Let's look at another example:
                    </Expos>
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
                    <Expos>
                        The phrases <Eng>"to eat fruit"</Eng>, <Eng>"that fruit is eaten"</Eng>, and{' '}
                        <Eng>"eating fruit"</Eng> are all simply <B>noun clauses</B> once again referring to the concept
                        of eating fruit, all marked by <TM>te</TM>, and all valid interpretations of{' '}
                        <TM>te li moku e kili</TM>. In this case, again for you linguists out there, this is a{' '}
                        <B>noun clause subject of a verb</B>.
                    </Expos>
                    <Expos>
                        As previously stated, <TM>te</TM> can also mark <Word>relative clauses</Word>. While noun
                        clauses act as a noun (surprise surprise), relative clauses, also known as{' '}
                        <Word>adjective clauses</Word>, are phrases that act as an <B>adjective</B>.
                    </Expos>
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
                    <Expos>
                        The subject of the sentence is <Eng>"the person"</Eng>, but we have tacked on a descriptive
                        phrase: <Eng>"who eats fruit"</Eng>. This phrase is a <Word>relative clause</Word>. It acts as
                        an adjective, enhancing the description of the person we are talking about. Here are more
                        examples:
                    </Expos>
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
                    <Expos>
                        These relative clauses have one minor difference to the first example: they have a{' '}
                        <Word>dangling preposition</Word> at the end. This happens because the <B>subject</B> of our
                        sentence would normally be the <B>object of a preposition</B> if we were to rearrange the
                        relative clause to stand on its own. Let's analyze the first example further to understand this
                        better.
                    </Expos>
                    <Examples>
                        <Ex>
                            <TM>kili te mi li moku e ...</TM>
                            <Answer className="no-blur">
                                <Eng>"The fruit that I eat ..."</Eng>
                            </Answer>
                        </Ex>
                    </Examples>
                    <Expos>
                        The subject of the sentence is <TM>kili</TM>, <Eng>"the fruit</Eng>. Let's drop the <TM>te</TM>{' '}
                        and rearrange it.
                    </Expos>
                    <Ex>
                        <TM>mi li moku e kili</TM>
                        <Answer className="no-blur">
                            <Eng>"I eat fruit"</Eng>
                        </Answer>
                    </Ex>
                    <Expos>
                        This is now a complete sentence, but the <B>subject has changed</B> to <TM>mi</TM>. We are now
                        talking about ourselves eating the fruit. Without using <TM>te</TM>, we could only ever talk
                        about <B>the thing doing the action</B> as the subject of a sentence. If we ever want to talk
                        about the <B>object of a preposition</B> rather than the subject of the action, we must
                        rearrange the sentence using <TM>te</TM>. In this case{' '}
                        <B>the original preposition must dangle</B> at the end of the relative clause.
                    </Expos>
                    <Expos>
                        There is one last thing to mention about using <TM>te</TM> in a sentence. Whenever <TM>te</TM>{' '}
                        comes after the preposition <TM>e</TM>, the <TM>e</TM> can simply be dropped. Additionally,
                        whenever <TM>te</TM> comes before <TM>li</TM>, the <TM>li</TM> can be dropped. These can combine
                        to cause the construction <TM>... e te li ...</TM> to simply become <TM>... te ...</TM>.
                    </Expos>
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
                    <Expos>
                        This is very commonly used, though not required. There may be cases where it feels more natural
                        to keep one or both in the sentence.
                    </Expos>
                </Section>
                <Section>
                    <Title>Punctuation</Title>
                    <Expos>
                        This is a good time to mention punctuation rules in toki ma, because there are really only two.
                        <ol>
                            <li>Place periods at the ends of sentences</li>
                            <li>
                                Place commas after <TM>te</TM> clauses before moving on to the rest of the sentence
                            </li>
                        </ol>
                        Any other punctuation use is up to you. You can do whatever feels comfortable or clears up
                        ambiguity. Question marks, exclamation points, commas, colons, elipses...Go wild.
                    </Expos>
                </Section>
                <Section>
                    <Title>Modifiers</Title>
                    <Expos>
                        Modifiers act as <Word>adjectives</Word> and <Word>adverbs</Word>, with the modifier coming{' '}
                        <B>after</B> the modified word, not before as it is done in English. These modifiers can affect
                        nouns as <B>adjectives</B>, or verbs as <B>adverbs</B>.
                    </Expos>
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
                    <Expos>
                        Modifiers can also affect <B>other modified phrases</B>, connecting together to form modifier
                        chains. When modifiers are chained, the are interpreted from <B>left-to-right</B>.
                    </Expos>
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
                    <Expos>
                        Wait a second, why does that second sentence say <Eng>"many good people"</Eng> and not{' '}
                        <Eng>"a very good person"</Eng>? Remember that modifiers apply from left to right. <TM>pona</TM>{' '}
                        applies to <TM>jan</TM>, so now <TM>mute</TM> applies to <TM>jan pona</TM>, not just to{' '}
                        <TM>pona</TM>. Think of it like parentheses in math class:{' '}
                        <TM>((((jan pasan) lamo) pona) mute)</TM> - <Eng>many good, tall, happy people</Eng>.
                    </Expos>
                    <Expos>
                        So how <B>do</B> you say <Eng>"a very good person"</Eng>? For that, we need to introduce a new
                        preposition.
                    </Expos>

                    <Section>
                        <Title>pi</Title>
                        <Expos>
                            The preposition <TM>pi</TM> is used for the <Word>genitive case</Word>. Think of the
                            genitive as a relational case, relating one thing to another. The best equivalence in
                            English is the word <Eng>"of"</Eng>. It is very useful for <B>regrouping modifiers</B>{' '}
                            rather than just chaining them endlessly to one noun.
                        </Expos>
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
                        <Expos>
                            By using <TM>pi</TM>, the word <TM>pona</TM> becomes a <B>noun</B> meaning{' '}
                            <Eng>goodness</Eng>, which is modified by <TM>mute</TM>.
                        </Expos>
                        <Expos>
                            It is also good for relating a noun to another noun, as is the standard use of the word{' '}
                            <Eng>"of"</Eng>.
                        </Expos>
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
                        <Expos>
                            This second use is also good for specifying possessives beyond simply using <TM>mi</TM>,{' '}
                            <TM>si</TM>, and <TM>on</TM>.
                        </Expos>
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
                        {/* TODO: li [modifier] pi */}
                    </Section>
                </Section>
                <Section>
                    <Title>Cause and Effect</Title>
                    <Section>
                        <Title>wa</Title>
                        <Expos>
                            As a verb, the word <TM>wa</TM> means <Eng>"to cause"</Eng>, but it can also be used as a{' '}
                            <B>modifier</B> to another verb, to act as a <Word>causative</Word>. In this case, the
                            subject is now the <Word>causer</Word> (the reason for action), causing the{' '}
                            <Word>causee</Word> (the one doing the action) to perform the action. The preposition{' '}
                            <TM>ki</TM> is used to mark the <B>causee</B>. You can think of <TM>ki</TM> in this context
                            as meaning something like <Eng>"from the perspective of"</Eng>, rather than the usual{' '}
                            <Eng>"to"</Eng> or <Eng>"towards"</Eng>.
                        </Expos>
                        <Examples>
                            <Ex>
                                <TM>mi li pasan wa ki si</TM>
                                <Answer>
                                    literally <Eng>"I cause-to-be-happy from the perspective of you"</Eng> or{' '}
                                    <Eng>"I make you happy"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <Expos>
                            Let's break that down: the <B>causer</B>, <TM>mi</TM>, is causing the <B>causee</B>,{' '}
                            <TM>si</TM>, to perform the action of <TM>li pasan</TM>, <Eng>"to be happy"</Eng>.
                        </Expos>
                        <Expos>
                            This could, of course, also be said using <TM>wa</TM> as a normal verb instead of a
                            causative modifier, and using <TM>te si li pasan</TM>, <Eng>"that you be happy"</Eng> as the
                            direct object. You don't always have to use <TM>wa</TM> as a modifier.
                        </Expos>
                        <Examples>
                            <Ex>
                                <TM>mi li wa e te si li pasan</TM>
                                <Answer>
                                    literally <Eng>"I cause that you be happy"</Eng> or <Eng>"I make you happy"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <Expos>
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
                        </Expos>
                        <Examples>
                            <Ex>
                                <TM>mi li moku wa ki si e kili</TM>
                                <Answer>
                                    literally <Eng>"I cause you to eat fruit"</Eng>, or <Eng>"I feed you fruit"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <Expos>
                            The direct object, <TM>kili</TM>, applies to the verb <TM>moku</TM>. It is the object of the{' '}
                            <B>action</B>, not the object of the <B>causation</B> of that action. That would be the{' '}
                            <B>causee</B>.
                        </Expos>
                        <Expos>
                            Because we must use <TM>ki</TM> in this way when using causative <TM>wa</TM>, some sentences
                            may become too confusing for this structure and may require going back to using <TM>wa</TM>{' '}
                            as a verb itself. Try this one:
                        </Expos>
                        <Examples>
                            <Ex>
                                <TM>mi li wa te si li kanti e kanti ki mi</TM>
                                <Answer>
                                    literally <Eng>"I cause that you play music to me"</Eng>, or{' '}
                                    <Eng>"I make you play music for me"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                        <Expos>
                            There simply isn't a good way to phrase this with the causative <TM>wa</TM> modifier. If you
                            try <TM>mi li kanti ki si e kanti ki mi</TM>, it's not clear which <TM>ki</TM> phrase is
                            meant as the <B>causee</B>, and which is meant as the recipient of the music-playing.
                        </Expos>
                    </Section>
                    <Section>
                        <Title>nen</Title>
                        <Expos>
                            Another way to create causative relationships is with the preposition <TM>nen</TM>.
                        </Expos>
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
                        <Expos>
                            Rather than making the <B>subject</B> the causer, as with <TM>wa</TM>, using <TM>nen</TM>{' '}
                            marks an <B>object</B> as the causer.
                        </Expos>
                        <Expos>
                            This was originally introduced for emotions and <TM>wolin</TM> to make things less forceful
                            and/or, for lack of a better word, predatory. Consider:
                        </Expos>
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
                        <Expos>
                            For actions other than feeling emotions, <TM>nen</TM> is also used to deemphasize the{' '}
                            <B>causation</B> in favor of the <B>action</B>. Using <TM>nen</TM> simply states the cause,
                            rather than making the cause be the subject.
                        </Expos>
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
                        <Expos>
                            All of these imply that <TM>si</TM> is their muse, their inspiration for making art, but how
                            much that is a focus of the sentence is changed based on which sentence structure you choose
                            to use.
                        </Expos>
                    </Section>
                </Section>
                <Section>
                    <Title>Conjunctions</Title>
                    <Section>
                        <Title>or</Title>
                        <Expos>
                            The particle <TM>anu</TM> is used to mean <Eng>"or"</Eng> in a very similar way to its use
                            in English. In fact, essentially any place you'd want to use <Eng>"or"</Eng> in English, you
                            can use <TM>anu</TM> in toki ma. Here is a non-exhaustive list of examples:
                        </Expos>
                        <Examples>
                            <Ex>
                                <TM>mi li wile te li moku e kili anu kasi anu pan</TM>
                                <Answer>
                                    <Eng>"I want to eat fruit, or vegetables, or bread"</Eng>
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>mi li wile te li ato, anu te li tawa pelu noka mi</TM>
                                <Answer>
                                    <Eng>"I either want to drive or walk"</Eng>
                                </Answer>
                            </Ex>
                            <Ex>
                                <TM>jan Ken anu jan Tan o pana e mani ki on</TM>
                                <Answer>
                                    <Eng>"Ken or Dan should give them money"</Eng>
                                </Answer>
                            </Ex>
                        </Examples>
                    </Section>
                    <Section>
                        <Title>but</Title>
                        <Expos>
                            The particle <TM>lekin</TM> is also used in almost the exact same way as the English{' '}
                            <Eng>"but"</Eng>. It is mostly placed between complete sentences, used to contrast the two
                            statements.
                        </Expos>
                        <Examples>
                            <Ex></Ex>
                        </Examples>
                    </Section>
                </Section>
                <Section>
                    <Title>Asking Questions</Title>
                    <Expos>
                        There are three kinds of questions you may want to ask: <Word>polar questions</Word> (yes/no),{' '}
                        <Word>open questions</Word> (who/what/why etc), and <Word>alternative questions</Word> (this or
                        that). Let's go over them one by one.
                    </Expos>
                    <Expos>
                        To ask a <Word>polar question</Word>, simply append the statement with <TM>anu no?</TM>. Yes,
                        it's that easy.
                    </Expos>
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
                    <Expos>
                        The response to a polar question should either be <TM>tuntan</TM> or <TM>no</TM>.
                    </Expos>
                    <Expos>
                        To ask an <Word>open question</Word>, the special particle <TM>seme</TM> can be placed as kind
                        of a <B>fill-in-the-blank</B> word. This is best demonstrated with some examples:
                    </Expos>
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
                    <Expos>
                        Simply place <TM>seme</TM> into the sentence where you would normally place the answer, had you
                        known the answer.
                    </Expos>
                    <Expos>
                        Finally, asking an <Word>alternative question</Word>, is kind of a combination of the other two:
                    </Expos>
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
                    <Expos>
                        The construction <TM>seme pi [X] anu [Y] anu [Z] anu ...</TM> is used to list possibilities.
                    </Expos>
                </Section>
                {/*
                TODO:
                    - negation
                    - tense / aspect / mood
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
