import TM from '../../components/TM';
import {
    B,
    Loc,
    P,
    Separator,
    Word,
    Examples,
    Ex,
    Answer,
    See,
    Transliterated,
    Foreign,
    Unofficial,
    TODO,
} from '../../components/elements';
import { ContentsContext, Section, Title } from '../../components/sections';
import { useTableOfContents } from '../../components/Contents';
import { useState } from 'react';
import { BlurContext, UnofficialContext } from '../../contexts';
import classNames from 'classnames';

export const English = () => {
    const [blur, setBlur] = useState(true);
    const [showUnofficial, setUnofficial] = useState(true);

    const [tableOfContents, tocProviderValue, refreshToC] = useTableOfContents();

    return (
        <UnofficialContext.Provider value={showUnofficial}>
            <BlurContext.Provider value={blur}>
                <div className={classNames('page', { 'no-unofficial': !showUnofficial })}>
                    <h1>Complete Guide to toki ma Grammar</h1>
                    <P>
                        Due to the nature of the language, toki ma is made up of a small set of relatively simple
                        grammatical constructions, but that isn't to say that it is not possible to represent complex
                        ideas. These simple constructions can be used together to great effect. This guide will provide
                        explanations of these constructions and examples of their use in an attempt to document both the
                        general language grammar rules, and more specific, smaller constructions seen in common use.
                    </P>
                    <P>
                        <Loc style={{ display: 'block' }}>
                            <B>
                                This guide will have example sentences in toki ma, and blurred translations in English.
                                Click the translations to reveal them. You are highly encouraged to try translating the
                                examples before peeking!
                            </B>
                            <br />
                            <br />
                            If you really don't want the blur,{' '}
                            <button onClick={() => setBlur(!blur)}>click here</button> to toggle it on and off for
                            everything.
                            <br />
                            <br />
                            Blur is <B>{blur ? 'on' : 'off'}</B>.
                        </Loc>
                    </P>
                    <P className="unofficial no-hide">
                        <br />
                        This guide also contains some unofficial grammar rules and constructions. These are shown by
                        default, but you can <button onClick={() => setUnofficial(!showUnofficial)}>
                            click here
                        </button>{' '}
                        to show or hide them.
                        <br />
                        <br />
                        Unofficial content is <B>{showUnofficial ? 'on' : 'off'}</B>.
                    </P>

                    <Separator>* * *</Separator>
                    <h2>Table of Contents</h2>
                    {tableOfContents}

                    <Separator>* * *</Separator>
                    <div className="vocab-note">
                        <h3>Vocabulary</h3>
                        This guide assumes you have some familiarity with the toki ma vocabulary. Words that directly
                        affect the grammar are explained here in the guide, but other words used in the example
                        sentences may not be.
                        <br />
                        <br />
                        You can <B>click on any toki ma word</B> to see a definition of the word if you need it.
                    </div>
                    <ContentsContext.Provider value={tocProviderValue}>
                        <Title id="rules-vs-conventions" className="major">
                            Rules vs Conventions
                        </Title>
                        <P>
                            Any language has <Word>rules</Word> that govern the basic features of the language and what
                            is considered "correct" or "incorrect". For example, in English you put adjectives{' '}
                            <B>before</B> nouns. That's just a rule. However, languages also have{' '}
                            <Word>conventions</Word> which determine what sounds "normal" to say. For example, in
                            English you would say <Loc>"I am happy about that"</Loc> rather than{' '}
                            <Loc>"I am happy toward that"</Loc> or <Loc>"I am happy because of that"</Loc>. All of these
                            sentences are equally correct as far as the rules of English go, but the second two sound
                            awkward, because, <B>by convention</B>, you wouldn't use <Loc>"towards"</Loc> or{' '}
                            <Loc>"because of"</Loc> to describe the cause of your happiness.
                        </P>
                        <P>
                            In this guide you will find both <B>rules</B> and <B>conventions</B> to help you understand
                            how to communicate as effectively as possible. Not everything is a hard-and-fast rule, and
                            not every <B>implication</B> that is explained in this guide applies 100% of the time.
                            Context matters a lot in toki ma, so be sure to check out the{' '}
                            <a href="#conversations">
                                <B>Conversational Examples</B>
                            </a>{' '}
                            section to see examples of formal and informal speech in different situations.
                        </P>
                        <Title id="word-derivations" className="major">
                            Word Derivations
                        </Title>
                        <P>
                            Before we start with grammar, it's important to know how the flexible vocabulary of toki ma
                            can be derived from the base definitions of its words. Aside from a select few irregular
                            words,{' '}
                            <B>any noun, verb, or modifier can be converted to one of the other two word forms</B> using
                            consistent rules.
                        </P>
                        <Section>
                            <Title id="base-nouns">Base Nouns</Title>
                            <P>
                                <Word>Base nouns</Word> are very simple to convert into verbs and modifiers. When a{' '}
                                <B>noun</B> is used as a <B>verb</B>, it just means the verb phrase{' '}
                                <Loc>"to be [the noun]</Loc>. When used as a <B>modifier</B>, it becomes{' '}
                                <Loc>"of [the noun]"</Loc> or <Loc>"relating to [the noun]</Loc>.
                            </P>
                            <P>
                                As a <B>noun</B>, <TM>jan</TM> means <Loc>"person"</Loc>.<br />
                                As a <B>verb</B> it means <Loc>"is a person"</Loc> or <Loc>"to be a person"</Loc>.
                                <br />
                                As a <B>modifier</B> it means <Loc>"of a person"</Loc>.
                            </P>
                        </Section>
                        <Section>
                            <Title id="base-modifiers">Base Modifiers</Title>
                            <P>
                                <Word>Base modifiers</Word> are also quite easy to convert. When a <B>modifier</B> is
                                used as a <B>noun</B>, it becomes the <Word>abstract object</Word> of the modifier.
                                Think of it like adding <Loc>"-ness"</Loc> to the word. When used as a <B>verb</B>, it
                                also just means <Loc>"to be [the modifier]"</Loc> or <Loc>"is [the modifier]"</Loc>.
                            </P>
                            <P>
                                As a <B>modifier</B>, <TM>lete</TM> means <Loc>"cold"</Loc>.<br />
                                As a <B>noun</B> it means <Loc>"coldness"</Loc>.<br />
                                As a <B>verb</B> it means <Loc>"is cold"</Loc> or <Loc>"to be cold"</Loc>.
                            </P>
                        </Section>
                        <Section>
                            <Title id="base-verbs">Base Verbs</Title>
                            <P>
                                <Word>Base verbs</Word> are the trickiest of the three, but still not very tough. When a{' '}
                                <B>verb</B> is used as a <B>noun</B>, it becomes the <Word>generic object</Word> of the
                                verb: the <B>most basic object you would normally do the verb to</B>. For example, the{' '}
                                <B>generic object</B> of <Loc>"to sit-on"</Loc> would be <Loc>"chair"</Loc> or{' '}
                                <Loc>"seat"</Loc>. The <B>generic object</B> of <Loc>"to use"</Loc> would be{' '}
                                <Loc>"tool"</Loc>. When used as a <B>modifier</B>, it means{' '}
                                <Loc>"[generic object]-like"</Loc> or <Loc>"resembling [the generic object]"</Loc>.
                            </P>
                            <P>
                                As a <B>verb</B>, <TM>moku</TM> means <Loc>"to eat"</Loc> or <Loc>"to consume"</Loc>
                                .<br />
                                As a <B>noun</B> it means <Loc>"food"</Loc>.<br />
                                As a <B>modifier</B> it means <Loc>"food-like"</Loc>, or <Loc>"edible"</Loc>.
                            </P>
                            <P>
                                When used as a modifier, the idea of <Loc>"resembling [the generic object]"</Loc>{' '}
                                doesn't necessarily mean resembling in looks. Rather, it requires considering{' '}
                                <B>what quality or qualities make that object unique</B> in the context of its base
                                verb. For example, the thing that makes food be food-like is that it is able to be
                                eaten, regardless of how it looks. Something that is seat-like simply means that it can
                                be sat upon (or maybe that it is <B>intended</B> to be sat upon), not that it has four
                                legs and a back and looks like the stereotypical idea of a chair.
                            </P>
                        </Section>
                        <P>
                            These rules apply to <B>almost every</B> word in toki ma, with only a few irregular words
                            such as <B>body parts</B>. Check{' '}
                            <a href="https://toki-ma.com/?page=dictionary">the dictionary</a> for proper definitions of
                            irregulars in all forms.
                        </P>
                        <Title id="basic-sentence-structure" className="major">
                            Basic Sentence Structure
                        </Title>
                        <Section>
                            <Title id="li">
                                <TM>li</TM> - Using Verbs
                            </Title>
                            <P>
                                The most basic particle <TM>li</TM> <B>marks the verb</B> of a sentence. Without it, you
                                could only talk about nouns and adjectives!
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li moku</TM>
                                    <Answer>
                                        <Loc>"I am eating"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>si li jan</TM>
                                    <Answer>
                                        <Loc>"You are a person"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>on li lete</TM>
                                    <Answer>
                                        <Loc>"They are cold"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                It's a bit confusing here just due to how English works, but it's very important not to
                                get confused thinking <TM>li</TM> means <Loc>"to be"</Loc>. That comes from the verb
                                forms of the words <TM>moku</TM>, <TM>jan</TM>, and <TM>lete</TM> themselves. The role
                                of <TM>li</TM> is <B>only</B> to mark that the following word{' '}
                                <B>should be interpreted as a verb</B>.
                            </P>
                            <P>
                                While these translations are valid, it's important to note that <TM>li</TM> alone does
                                not say anything about the <Word>tense</Word>, meaning <B>past</B> (
                                <Loc>"I was eating"</Loc>), <B>present</B> (<Loc>"I am eating"</Loc>), or <B>future</B>{' '}
                                (<Loc>"I will be eating"</Loc>), or about the <Word>aspect</Word>, meaning{' '}
                                <B>perfective</B> (completed action, <Loc>I ate</Loc>), continuous (ongoing action,{' '}
                                <Loc>I am eating</Loc>), or repeated (habitual action, <Loc>I eat</Loc>
                                ). These are all valid translations of the sentence <TM>mi li moku</TM>. Which one is
                                meant must be inferred through context.
                            </P>
                            <P>
                                Later we will learn more ways to specify tense and aspect to remove this ambiguity. For
                                now, example sentences will just assume one for convenience.
                            </P>
                            <P>
                                When using <TM>li</TM> <B>without a subject</B>, the sentence usually becomes a
                                statement simply <B>that an action is performed</B>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>li moku e kili</TM>
                                    <Answer>
                                        <Loc>"Fruit is eaten"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>li lape</TM>
                                    <Answer>
                                        <Loc>"Sleep is had"</Loc>, <Loc>"Sleeping is done"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                In English this sounds a bit awkward, but it is a clearly communicated concept and is
                                completely acceptable in toki ma. How often you might say such a thing is a different
                                question.
                            </P>
                        </Section>
                        <Section>
                            <Title id="ambiguity">Ambiguity</Title>
                            <P>
                                It has already been said, but it is important to reiterate: with so few words,
                                communication in toki ma is often driven by context to resolve ambiguities without
                                having to resort to much longer descriptions of very simple things. Being specific is
                                often not a major goal of a toki ma speaker in casual conversation, because the listener
                                can often figure out the details without major problems.
                            </P>
                            <P>
                                When you read examples in this guide,{' '}
                                <B>don't worry if you didn't get it exactly the same as the stated translation</B>. It
                                doesn't mean you were wrong if you read <TM>mi li moku</TM> as <Loc>"I am eating"</Loc>{' '}
                                and the translation says <Loc>"I eat"</Loc>. Keep this in mind as you read the rest of
                                this guide.
                            </P>
                        </Section>
                        <Section>
                            <Title id="parts-of-speech">Parts of Speech</Title>
                            <P>
                                We've learned how to derive words in the different parts of speech, but we haven't
                                learned how to recognize words in different parts of speech. What makes <TM>moku</TM>{' '}
                                sometimes mean <Loc>"to eat"</Loc>, sometimes mean <Loc>"food"</Loc> and sometimes mean{' '}
                                <Loc>"edible"</Loc>? It all has to do with where the word is in the sentence.
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
                                <B>Prepositions</B> are words that link other parts of the sentence together, showing
                                how words relate to each other. These are words like <Loc>"from"</Loc>, <Loc>"to"</Loc>,{' '}
                                <Loc>"with"</Loc>, etc. There are only a few specific prepositions in toki ma, and they
                                never act like any other part of speech. There are individual sections throughout the
                                guide for each of the different prepositions.
                            </P>
                            <P>
                                Lastly, there are <B>particles</B>. Particles are words that don't have meaning on their
                                own, but are used to affect other parts of the sentence. For example, <TM>li</TM> is a
                                particle because it doesn't mean anything on its own, but it affects the next word. Toki
                                ma uses particles like <TM>li</TM>, <TM>te</TM> and <TM>la</TM> to modify the structure
                                of sentences in various ways. More on those later, too.
                            </P>
                        </Section>
                        <Section>
                            <Title id="e">
                                <TM>e</TM> - Direct Objects
                            </Title>
                            <P>
                                Verbs can be <Word>intransitive</Word>, meaning they stand on their own, or{' '}
                                <Word>transitive</Word>, meaning they act on something known as the{' '}
                                <Word>direct object</Word>. The preposition <TM>e</TM> <B>marks the direct object</B> in
                                the same way that <TM>li</TM> marks the verb.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li moku e kili</TM>
                                    <Answer>
                                        <Loc>"I am eating fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                The particle <TM>e</TM> marks <TM>kili</TM> as the object of the verb <TM>moku</TM>.
                                It's important to note that <TM>e</TM> is considered a preposition, not a particle. This
                                is relevant because of word order, which we will discuss in a moment. Here are a few
                                more examples:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>si li moku e telo</TM>
                                    <Answer>
                                        <Loc>"You are drinking water"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>on li ato e ato</TM>
                                    <Answer>
                                        <Loc>"They are driving a car"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        jan <Transliterated>Ta</Transliterated> li konta e toki ma
                                    </TM>
                                    <Answer>
                                        <Loc>"[the person named] Ta is learning toki ma"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="o">
                                <TM>o</TM> - Commands and Requests
                            </Title>
                            <P>
                                The particle <TM>o</TM> works the same way as <TM>li</TM>, marking the verb, except that
                                it turns the statement into a <B>recommendation</B>, <B>suggestion</B>, or what the
                                speaker believes <B>should</B> happen.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>on o moku e kili</TM>
                                    <Answer>
                                        <Loc>"They should eat fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>jan o pana e kili ki on</TM>
                                    <Answer>
                                        <Loc>"Someone should give them fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi o moku e kasi...</TM>
                                    <Answer>
                                        <Loc>"I should eat a vegetable..."</Loc>
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
                                        <Loc>"(you) Eat fruit!"</Loc> or <Loc>"I wish you would eat fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>o pasan</TM>
                                    <Answer>
                                        <Loc>"Be happy!"</Loc> a very common phrase used to mean <Loc>"Welcome!"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                When using <TM>o</TM> followed by simply a specific <B>animate</B> noun, it can be used
                                as a <Word>vocative</Word> expression, calling for someone's attention.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>o jan Ken</TM>
                                    <Answer>
                                        <Loc>"Hey, [person named] Ken!"</Loc>
                                        <See href="names-and-foreign-words">Names and Foreign Words</See>
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
                                        <Loc>"I am eating fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi e kili li moku</TM>
                                    <Answer>
                                        <Loc>"I am eating fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                These two sentences are <B>both allowed</B>. Any <Word>subject</Word> must come first,
                                but the <Word>verb</Word>, the <Word>object</Word>, and any other{' '}
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
                                        <Loc>
                                            "<B>My</B> dog is good"
                                        </Loc>{' '}
                                        (Yes, the adjective here is <Loc>"my"</Loc>. We don't usually talk about
                                        possessives as adjectives, but trust me they are!)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li moku e kili <B>mi</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I am eating <B>my</B> fruit"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        pawo <B>ni</B> li suli
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>This</B> dog is big"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        pawo <B>mi</B> li moku <B>mute</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>My</B> dog eats <B>a lot</B>"
                                        </Loc>
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
                                        <Loc>
                                            "<B>My</B> <B>big</B> dog is good"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        jan <B>pona mute</B> li moku
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Many</B> <B>good</B> people are eating"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Wait a second, why does that second sentence say <Loc>"many good people"</Loc> and not{' '}
                                <Loc>"a very good person"</Loc>? Remember that modifiers chain together{' '}
                                <B>but apply to the whole noun phrase so far</B>, not just to the previous modifier.{' '}
                                <TM>pona</TM> applies to <TM>jan</TM>, so now <TM>mute</TM> applies to the entire phrase{' '}
                                <TM>jan pona</TM>, not just to <TM>pona</TM>. Think of it like parentheses in math
                                class: <TM>((((jan pasan) lamo) pona) mute)</TM> -{' '}
                                <Loc>many good, tall, happy people</Loc>.
                            </P>
                            <P>
                                So how <B>do</B> you say <Loc>"a very good person"</Loc>? For that, we need to introduce
                                a new preposition.
                            </P>

                            <Section>
                                <Title id="pi">
                                    <TM>pi</TM> - Relations and "Of"
                                </Title>
                                <P>
                                    The preposition <TM>pi</TM> is used for the <Word>genitive case</Word>. Think of the
                                    genitive as a relational case, relating one thing to another. The best equivalence
                                    in English is the word <Loc>"of"</Loc>. It is very useful for{' '}
                                    <B>regrouping modifiers</B> rather than just chaining them endlessly to one noun.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>jan pona mute</TM>
                                        <Answer>
                                            <Loc>"many good people"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan pi pona mute</TM>
                                        <Answer>
                                            literally <Loc>"person (or people) of much goodness"</Loc>, or{' '}
                                            <Loc>"a very good person"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    By using <TM>pi</TM>, the word <TM>pona</TM> becomes a <B>noun</B> meaning{' '}
                                    <Loc>goodness</Loc>, which is modified by <TM>mute</TM>.
                                </P>
                                <P>
                                    It is also good for relating a noun to another noun, as is the standard use of the
                                    word <Loc>"of"</Loc>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tomo moku</TM>
                                        <Answer>
                                            <Loc>"edible house</Loc>, maybe a gingerbread house?
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tomo pi moku</TM>
                                        <Answer>
                                            <Loc>"house of food"</Loc>, possibly a restaurant or a kitchen
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
                                            <Loc>"that person's food"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>pawo pi walala mi</TM>
                                        <Answer>
                                            <Loc>"my sibling's dog"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tomo pi mama pi mama mi</TM>
                                        <Answer>
                                            literally <Loc>"house of the parent of my parent"</Loc>, meaning "my
                                            grandparent's house"
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Like modifiers, <TM>pi</TM>-phrases also <B>chain onto each other</B>, making that
                                    last example read as: <TM>((tomo pi mama) pi mama mi)</TM> which would mean{' '}
                                    <Loc>"((parent's house) of my parent)"</Loc>, not{' '}
                                    <Loc>"(house of (the parent of my parent))"</Loc>.
                                </P>
                                <P>
                                    When using <TM>pi</TM> after a verb, the <TM>pi</TM>-phrase acts like an{' '}
                                    <B>adverbial phrase</B>, just like any other modifier would on a verb. This means
                                    the <TM>pi</TM>-phrase describes <B>the manner in which the verb is done</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li toki <B>pi kalama mute</B>
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I talk <B>loudly</B>"
                                            </Loc>
                                            , literally{' '}
                                            <Loc>
                                                "I talk <B>of much volume</B>"
                                            </Loc>
                                            <br />
                                            It's important to note that this doesn't say{' '}
                                            <Loc>
                                                "I talk <B>about</B> much volume"
                                            </Loc>
                                            . The phrase <Loc>"of much volume"</Loc> describes{' '}
                                            <B>the manner in which the talking occurs</B>.
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section unofficial>
                                <Title id="je">
                                    <TM>je</TM> - Immediate Relation
                                </Title>
                                <P>
                                    The way <TM>pi</TM>chains isn't an issue for the statement{' '}
                                    <TM>tomo pi mama pi mama mi</TM>, as it still translates to a phrase that roughly
                                    means <Loc>"my grandparent's house"</Loc>, however there are some cases where it can
                                    cause issues.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tomo pi moku</TM>
                                        <Answer>
                                            <Loc>"restaurant"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>into pi jaki</TM>
                                        <Answer>
                                            <Loc>"bathroom"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>into pi jaki pi tomo pi moku</TM>
                                        <Answer>
                                            <Loc>"the food-related home bathroom"</Loc>...? That's about the best
                                            translation possible.
                                            <br />
                                            Grouped as <Loc>"(((place of dirtiness) of home) of food)"</Loc>; see how{' '}
                                            <Loc>"food"</Loc> applies to the entire thing, not just the{' '}
                                            <Loc>"house"</Loc>.
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    The variant preposition <TM>je</TM> can be used to resolve this problem. <TM>je</TM>{' '}
                                    acts the same as <TM>pi</TM>, except that it is used for{' '}
                                    <Word>immediate relationship</Word>. Unlike <TM>pi</TM> which applies to everything
                                    coming before it, <TM>je</TM> only applies to <B>the noun directly before it</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tomo pi mama je mama mi</TM>
                                        <Answer>
                                            <Loc>"My grandparent's house"</Loc>, grouped as{' '}
                                            <Loc>"(house of (the parent of my parent))"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tomo je moku pi walala je mama je mama mi</TM>
                                        <Answer>
                                            <Loc>"My great-aunt's restaurant"</Loc>, grouped as{' '}
                                            <Loc>"((house of food) of (the sibling of (the parent of my parent)))"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>into je jaki pi tomo je moku</TM>
                                        <Answer>
                                            <Loc>"restaurant bathroom"</Loc>, grouped as{' '}
                                            <Loc>"((place of dirtiness) of (the house of food))"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    With this addition, <TM>je</TM> becomes the more common preposition to combine words
                                    that represent a <B>single concept</B>, such as <Loc>"bathroom"</Loc>,{' '}
                                    <Loc>"restaurant"</Loc>, or <Loc>"grandmother"</Loc>. If all you wanted to say was{' '}
                                    <Loc>"restaurant"</Loc>, you could use either <TM>pi</TM> or <TM>je</TM> to get the
                                    point across, but <TM>je</TM> would be the preferred term, as it keeps the
                                    individual relationships <B>closely tied into one single concept</B>. This way, when
                                    you do end up using <TM>tomo je moku</TM> within a larger phrase, it's already in
                                    the same form you're used to hearing. This improves understanding and speeds up
                                    communication.
                                </P>
                                <P>
                                    This idea of <TM>je</TM> implying closer relationships may not <B>always</B> hold
                                    true in more complex <TM>pi</TM>/<TM>je</TM> phrases, but it may have some
                                    implications in more isolated cases.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>tapa pi moku</TM>
                                        <Answer>
                                            <Loc>"container of food"</Loc>, implying a container that is holding food
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>tapa je moku</TM>
                                        <Answer>
                                            <Loc>"food container"</Loc>, implying a container designed for holding food,
                                            such as a lunchbox, regardless of whether it has food in it right now
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    These are likely interchangeable in most contexts, but the implication is still
                                    there in times when it may be more important.
                                </P>
                            </Section>
                            <Section>
                                <Title id="li-lon">
                                    <TM>li lon</TM> - To Exist
                                </Title>
                                <P>
                                    As we learned in the very beginning, it's easy enough to say something{' '}
                                    <Loc>"is [a base noun]"</Loc> or <Loc>"is [a base modifier]"</Loc> simply by using
                                    the base noun or base modifier as a verb, but this only works{' '}
                                    <B>if the word is already a base noun or base modifier</B>. What if it's a base
                                    verb? How do you say something <Loc>"is food"</Loc> or <Loc>"is edible"</Loc> using
                                    the other derivations of <TM>moku</TM>? You can't say <TM>li moku</TM>, because that
                                    means <Loc>"is eating"</Loc>. What do you do?
                                    <See href="word-derivations">Word Derivations</See>
                                </P>
                                <P>
                                    The solution is to use the modifier <TM>lon</TM> meaning <Loc>"real"</Loc>,{' '}
                                    <Loc>"true"</Loc>, or <Loc>"existing"</Loc>. As a verb it is used to mean{' '}
                                    <Loc>"to be"</Loc> or <Loc>"to exist"</Loc>. This allows you to use modifiers or{' '}
                                    <TM>pi</TM>-phrases to use modifier or noun forms of any word you please.
                                </P>
                                <P>
                                    In linguistics, this <Loc>"to be"</Loc> construction is called the{' '}
                                    <Word>copula</Word>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ni li lon moku</TM>
                                        <Answer>
                                            <Loc>"This is edible"</Loc>, literally <Loc>"This exists edibly"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>ni li lon pi moku</TM>
                                        <Answer>
                                            <Loc>"This is food"</Loc>, literally{' '}
                                            <Loc>"This exists [in a manner] of food"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>na li kipisi</TM>
                                        <Answer>
                                            <Loc>"That is divided"</Loc>, referring to the object that has been split
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>na li lon pi kipisi</TM>
                                        <Answer>
                                            <Loc>"That is a division"</Loc>, literally <Loc>"that is dividedness"</Loc>{' '}
                                            referring to the split in the object.
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This allows you to use the <B>noun</B> or <B>modifier</B> form of <B>any word</B>{' '}
                                    when saying the phrase <Loc>"is [word]"</Loc>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>li lon [word]</TM>
                                        <Answer noblur>
                                            always uses <TM>[word]</TM> as a <B>modifier</B>, regardless of its base
                                            part of speech
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>li lon pi [word]</TM>
                                        <Answer noblur>
                                            always uses <TM>[word]</TM> as a <B>noun</B>, regardless of its base part of
                                            speech
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Because nouns derived from base modifiers are the <B>abstract object</B> of the
                                    modifier, it's uncommon that you'd use <TM>li lon pi [base modifier]</TM> to talk
                                    about a base modifier as a noun in most cases. You'd much more likely say{' '}
                                    <TM>ni li suli</TM>, <Loc>"this is large"</Loc>, than you'd say{' '}
                                    <TM>ni li lon pi suli</TM>, <Loc>"this is largeness"</Loc>. In general this is most
                                    useful for using <B>base verbs</B> in their noun or modifier forms.
                                </P>
                                <Section unofficial>
                                    <Title id="implicit-lon">
                                        Implicit <TM>lon</TM>
                                    </Title>
                                    <P>
                                        It does feel a bit clunky to be forced to use <TM>li lon pi</TM> to talk about
                                        noun forms all the time, so why not cut out a word? The particle <TM>pi</TM> can
                                        never be a verb itself, but when it comes immediately after <TM>li</TM> it can
                                        be assumed that the verb is implicity <TM>lon</TM>. This shortens{' '}
                                        <TM>li lon pi</TM> to simply <TM>li pi</TM>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>ni li lon moku</TM>
                                            <Answer>
                                                <Loc>"This is edible"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>ni li pi moku</TM>
                                            <Answer>
                                                <Loc>"This is food"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>on li pona mute</TM>
                                            <Answer>
                                                <Loc>"He is very good"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>on li pi pona mute</TM>
                                            <Answer>
                                                <Loc>"He is the embodiment of much goodness"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>na li kipisi</TM>
                                            <Answer>
                                                <Loc>"That is divided"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>na li lon pi kipisi</TM>
                                            <Answer>
                                                <Loc>"That is a division"</Loc>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        This property of implicit <TM>lon</TM> is also useful when using prepositions.
                                        Instead of saying <TM>na li lon polo si</TM>, <Loc>"that is for you"</Loc>, you
                                        could just say <TM>na li polo si</TM> and the verb <TM>lon</TM> is simply
                                        implied.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mama mi li an esun</TM>
                                            <Answer>
                                                <Loc>"My parent is at the store"</Loc>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>lakima mi li nen si</TM>
                                            <Answer>
                                                <Loc>"My sadness is because of you"</Loc>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        If these prepositional phrases don't make sense yet, that's ok. More about
                                        prepositions in later sections.
                                    </P>
                                </Section>
                            </Section>
                            <Section>
                                <Title id="li-kama">
                                    <TM>li kama</TM> - Changing State
                                </Title>
                                <P>
                                    Many words in toki ma, especially modifiers, represent <B>states</B> rather than{' '}
                                    <B>actions</B>. As seen in the section on{' '}
                                    <a href="#word-derivations">word derivations</a>, the usual verb derivation of a
                                    modifier is <Loc>"to be [modifier]"</Loc>, such as <TM>li lape</TM>:{' '}
                                    <Loc>"to be sleeping"</Loc>. This allows us to talk about{' '}
                                    <B>whether something is or is not in a certain state</B>, but it doesn't let us talk
                                    about <B>the act of transitioning into that state</B>. For this we need the verb{' '}
                                    <TM>kama</TM>.
                                </P>
                                <P>
                                    When using <TM>kama</TM> with a modifier, the modifier can simply modify the verb{' '}
                                    <TM>kama</TM>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi <B>li kama lape</B>
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I <B>fall asleep</B>"
                                            </Loc>
                                            , literally{' '}
                                            <Loc>
                                                "I <B>become sleeply</B>"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    If you want to say that something <B>becomes something else</B>, using a noun, you
                                    can use <TM>kama e [noun]</TM>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>ni li kama e kiwen</TM>
                                        <Answer>
                                            <Loc>"This turns to stone"</Loc>, literally{' '}
                                            <Loc>"This becomes of stone"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Lastly, when using it with a verb, you must use a <TM>te</TM> clause.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi <B>li kama e te li konta e na</B>
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I <B>learn that</B>"
                                            </Loc>
                                            , literally{' '}
                                            <Loc>
                                                "I <B>come to understand that</B>"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    How does this magical <TM>te</TM> clause work? Keep reading to find out!
                                </P>
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
                                <Word>relative clauses</Word>. This is a very powerful tool for sentence construction,
                                so let's start simple to show what that means.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>te li moku e kili</TM>
                                    <Answer>
                                        <Loc>"to eat fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                This isn't a complete sentence, it's a <Word>noun clause</Word>. It simply refers to the
                                concept of eating fruit, <B>as an entire noun</B>. This allows it to be used as a{' '}
                                <B>subject</B> or <B>object</B> of a verb. Let's take a look at an example:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li wile e kili</TM>
                                    <Answer>
                                        <Loc>"I want fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li wile e <B>te li moku e kili</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I want <B>to eat fruit</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Notice how <TM>te li moku e kili</TM> is preceded by <TM>e</TM>, making the entire
                                phrase a <B>noun clause</B>; technically it's a <B>noun clause object of a verb</B> for
                                you linguists out there. Let's look at another example:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <B>te li moku e kili</B>, li pona
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "It is good <B>to eat fruit</B>"
                                        </Loc>
                                        , or{' '}
                                        <Loc>
                                            "It is good <B>that fruit is eaten</B>"
                                        </Loc>
                                        , or{' '}
                                        <Loc>
                                            "<B>Eating fruit</B> is good"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                The phrases <Loc>"to eat fruit"</Loc>, <Loc>"that fruit is eaten"</Loc>, and{' '}
                                <Loc>"eating fruit"</Loc> are all simply <B>noun clauses</B> once again referring to the
                                concept of eating fruit, all marked by <TM>te</TM>, and all valid interpretations of{' '}
                                <TM>te li moku e kili</TM>. In this case, again for you linguists out there, this is a{' '}
                                <B>noun clause subject of a verb</B>.
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
                                        <Loc>
                                            "The person <B>who eats fruit</B> is good"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                The subject of the sentence is <Loc>"the person"</Loc>, but we have tacked on a
                                descriptive phrase: <Loc>"who eats fruit"</Loc>. This phrase is a{' '}
                                <Word>relative clause</Word>. It acts as an adjective, enhancing the description of the
                                person we are talking about. Here are more examples:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        kili <B>te mi li moku e</B>, li pona
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "The fruit <B>that I eat</B> is good"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        jan <B>te mi li toki ki</B>, li lamo
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "The person <B>to whom I am talking</B> is tall"
                                        </Loc>
                                        <See href="ki">
                                            <TM>ki</TM>
                                        </See>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                These relative clauses have one minor difference to the first example: they have a{' '}
                                <Word>dangling preposition</Word> at the end. This happens because the <B>subject</B> of
                                our sentence would normally be the <B>object of a preposition</B> if we were to
                                rearrange the relative clause to stand on its own. Let's analyze the first example
                                further to understand this better.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <B>kili</B> te mi li moku <B>e</B> ...
                                    </TM>
                                    <Answer noblur>
                                        <Loc>"The fruit that I eat ..."</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                The subject of the sentence is <TM>kili</TM>, <Loc>"the fruit</Loc>. Let's drop the{' '}
                                <TM>te</TM> and rearrange it.
                            </P>
                            <Ex>
                                <TM>
                                    mi li moku <B>e kili</B>
                                </TM>
                                <Answer noblur>
                                    <Loc>"I eat fruit"</Loc>
                                </Answer>
                            </Ex>
                            <P>
                                This is now a complete sentence, but the <B>subject has changed</B> to <TM>mi</TM>. We
                                are now talking about ourselves eating the fruit.{' '}
                            </P>
                            <P>
                                Without using <TM>te</TM>, we could only ever talk about{' '}
                                <B>the thing doing the action</B> as the subject of a sentence. If we ever want to talk
                                about the <B>object of a preposition</B> rather than the subject of the action, we must
                                rearrange the sentence using <TM>te</TM>, and{' '}
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
                                        <Loc>"I want to be the person who eats that fruit."</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                There is one last thing to mention about using <TM>te</TM> in a sentence. Whenever{' '}
                                <TM>te</TM> comes after the preposition <TM>e</TM>, the <TM>e</TM> can simply be
                                dropped. Additionally, whenever <TM>te</TM> comes before <TM>li</TM>, the <TM>li</TM>{' '}
                                can be dropped. These can combine to cause the construction <TM>... e te li ...</TM> to
                                simply become <TM>... te ...</TM>.
                            </P>
                            <P>
                                While this is allowed, it is suggested that you only drop the <TM>e</TM> and keep it as{' '}
                                <TM>te li</TM> in many cases, as it can become harder to parse with more complex
                                sentences.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>jan te moku e kili, li pona</TM>
                                    <Answer>
                                        <Loc>"The person who eats fruit is good"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li wile te moku e kili</TM>
                                    <Answer>
                                        <Loc>"I want to eat fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                This is very commonly used, though not required. There may be cases where it feels more
                                natural to keep one or both in the sentence. This guide will mostly use the{' '}
                                <TM>te li</TM> construction, without the <TM>e</TM>.
                            </P>

                            <Section unofficial>
                                <Title id="ti">
                                    <TM>ti</TM>
                                </Title>
                                <P>
                                    Dropping the <TM>li</TM> from <TM>te li</TM> can cause confusion, because it becomes
                                    unclear whether the following word is a verb or a noun until later in the clause.
                                    However, it's convenient to not have to say two words every time you want to start a
                                    clause with a verb. The contraction <TM>ti</TM> has been proposed to solve this
                                    issue. <TM>ti</TM> is identical in meaning to <TM>te li</TM>, however it is shorter
                                    to write and say. It allows for the brevity of dropping <TM>li</TM> without the loss
                                    of clarity.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li wile te li moku e kili</TM>
                                        <Answer>
                                            <Loc>"I want to eat fruit"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li wile ti moku e kili</TM>
                                        <Answer>
                                            <Loc>"I want to eat fruit"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This may seem trivial in short sentences, but as sentences get longer and more
                                    complex it really adds up. Using <TM>ti</TM> gives smoother, less bulky sentences.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li ken te li kokan te li toki ki jan na te li utala wa</TM>
                                        <Answer>
                                            <Loc>"I can try to talk to that man who causes violence"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li ken ti kokan ti toki ki jan na ti utala wa</TM>
                                        <Answer>
                                            <Loc>"I can try to talk to that man who causes violence"</Loc>
                                        </Answer>
                                    </Ex>
                                    <See href="wa">
                                        <TM>wa</TM> - Causatives
                                    </See>
                                </Examples>
                                <P>
                                    There is one difference between <TM>te li</TM> and <TM>ti</TM> which only occurs
                                    when <B>dangling prepositions</B> are involved. Consider the following phrases using{' '}
                                    <TM>te li</TM>:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>jan te li toki ki mi</TM>
                                        <Answer>
                                            <Loc>"person that speaks to me"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan te mi li toki ki</TM>
                                        <Answer>
                                            <Loc>"person that I speak to"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan te li toki ki</TM>
                                        <Answer>
                                            <Loc>"person that is spoken to"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Notice how in the first phrase, the person is the one doing the action <TM>toki</TM>
                                    , however in the second two phrases, there is some other subject doing the action{' '}
                                    <TM>toki</TM>, or at least an <B>implied subject</B> in the third example. However,
                                    if you compare the first and third sentences word-by-word, you may notice that you
                                    can't actually know whether <TM>jan</TM> is the subject <B>until the very end</B>.
                                </P>
                                <P>
                                    To solve this problem, if <TM>jan</TM> is the subject, you would use <TM>ti</TM>,
                                    and if <TM>jan</TM> is the object of a preposition, you would use the longer{' '}
                                    <TM>te li</TM> to show that the clause is intentionally being left without an
                                    explicit subject.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>jan ti toki ki mi</TM>
                                        <Answer>
                                            <Loc>"person that speaks to me"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan te mi li toki ki</TM>
                                        <Answer>
                                            <Loc>"person that I speak to"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>jan te li toki ki</TM>
                                        <Answer>
                                            <Loc>"person that is spoken to"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>Now all three of these phrases are more unique and easier to read.</P>
                                <Section unofficial>
                                    <Title id="ta">
                                        <TM>ta</TM>
                                    </Title>
                                    <P>
                                        Yes, this really is a doubly-unofficial proposal, but it is important to
                                        mention.
                                    </P>
                                    <P>
                                        If <TM>ti</TM> becomes official, it is possible that the existing word{' '}
                                        <TM>te</TM> will change to <TM>ta</TM>, and the existing word <TM>ta</TM>{' '}
                                        meaning <Loc>"mirrored"</Loc> or <Loc>"opposite"</Loc> will change back to its
                                        older form <TM>jasi</TM>. This is to avoid having the words <TM>te</TM> and{' '}
                                        <TM>ti</TM> sound too similar, as some speakers' native languages may not fully
                                        differentiate the two vowel sounds. This change is not fully confirmed yet, but
                                        it is important to be aware that it may happen.
                                    </P>
                                </Section>
                            </Section>
                        </Section>
                        <Section>
                            <Title id="punctuation">Punctuation</Title>
                            <P>
                                This is a good time to mention punctuation rules in toki ma, because there are really
                                only two.
                                <ol>
                                    <li>Place periods to separate sentences</li>
                                    <li>
                                        Place commas after <TM>te</TM> clauses before moving on to the rest of the
                                        sentence
                                    </li>
                                </ol>
                                Any other punctuation use is up to you. You can do whatever feels comfortable or clears
                                up ambiguity. Question marks, exclamation points, commas, colons, ellipses...Go wild.
                            </P>
                        </Section>
                        <Section>
                            <Title id="negation">Negation</Title>
                            <P>
                                Thus far we have only been able to talk in the <B>positive</B>, but not in the{' '}
                                <B>negative</B>. How would you say{' '}
                                <Loc>
                                    "I <B>do not</B> want to eat fruit"
                                </Loc>
                                ? That's right, we need a new word: <TM>no</TM>. The word <TM>no</TM> is used for{' '}
                                <Word>negation</Word>. It can be used like any other modifier to affect a noun, verb, or
                                other modifier.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        mi li <B>wile no</B> te li moku e kili
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I <B>do not want</B> to eat fruit"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li <B>pasan no</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I am <B>not happy</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li tawa kan <B>no pi mama mi</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I go <B>without my parent</B>
                                        </Loc>
                                        , literally{' '}
                                        <Loc>
                                            "I go with <B>none of my parent</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                As a noun, <TM>no</TM> means <Loc>"none"</Loc> or <Loc>"nothingness"</Loc>. Currently
                                this is also used to mean <Loc>"zero"</Loc>, but a specific word for the number 0 may be
                                added in the future.
                                <See href="zero">Zero</See>
                            </P>
                            <Section unofficial>
                                <Title id="no">
                                    <TM>no</TM> Particle
                                </Title>
                                <P>
                                    With the likely addition of <TM>nula</TM> for <Loc>"zero"</Loc>, <TM>no</TM> will
                                    likely turn into a <B>particle</B> rather than a <B>modifier</B>. This particle
                                    would be used specifically to negate <TM>li</TM>, <TM>o</TM>, and{' '}
                                    <B>prepositions</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi <B>li no wile</B> te li moku e kili
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I <B>do not want</B> to eat fruit"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi <B>li no pasan</B>
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I <B>am not happy</B>"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li tawa <B>kan no</B> mama mi
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I go <B>without</B> my parent
                                            </Loc>
                                            , literally{' '}
                                            <Loc>
                                                "I go <B>not-with</B> my parent"
                                            </Loc>
                                            <br />
                                            This more strongly implies that you are going with different people{' '}
                                            <B>instead</B>, compared to <TM>mi li tawa kan nula pi mama mi</TM>
                                            <See href="zero">Zero</See>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    With this, you can no longer use <TM>[thing] no</TM> to talk about none of
                                    something, instead you must use <TM>nula [thing]</TM> or <TM>nula pi [thing]</TM>,
                                    meaning <Loc>"none of [something]"</Loc>
                                </P>
                                <P>
                                    Similar to shortenings like <TM>e te li</TM> becoming <TM>te</TM>, the construction{' '}
                                    <TM>li no</TM> can be shortened to just <TM>no</TM>. If <TM>o</TM> is used instead
                                    of <TM>li</TM>, however, this cannot be done.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi <B>no wile</B> te li moku e kili
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I <B>do not want</B> to eat fruit"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            <B>o no moku</B> e kili
                                        </TM>
                                        <Answer>
                                            <Loc>"Don't eat fruit!"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
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
                                    As a verb, the word <TM>wa</TM> means <Loc>"to cause"</Loc>. This is most often used
                                    with a <TM>te</TM>-clause to demonstrate causation of an action.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li wa te mi li pasan</TM>
                                        <Answer>
                                            <Loc>"You make me happy"</Loc>, literally{' '}
                                            <Loc>"You cause that I be happy"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This sentence is completely valid, but an alternate form is also very common: use{' '}
                                    <TM>wa</TM> as a modifier to the verb <TM>pasan</TM> to indicate that it is being{' '}
                                    <B>caused</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li pasan wa</TM>
                                        <Answer>
                                            <Loc>"You cause happiness"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    But what happened to the original subject of that <TM>te</TM>-clause, <TM>mi</TM>?
                                    This no longer says{' '}
                                    <Loc>
                                        "You make <B>me</B> happy"
                                    </Loc>
                                    . To figure out how to fit this in, we first need to break down the structure of a
                                    causative statement.
                                </P>
                                <P>
                                    In the sentence <Loc>"you make me happy"</Loc>, there are four components.
                                    <ol>
                                        <li>
                                            The <Word>causer</Word>, <Loc>"you"</Loc>, is the thing that is actively{' '}
                                            <B>causing</B> the action to occur.
                                        </li>
                                        <li>
                                            The <Word>causation</Word> is the <B>action of causing</B> something to
                                            happen. It is the action that the <B>causer</B> is taking, in this case
                                            indicated by the word <Loc>"make"</Loc>.
                                        </li>
                                        <li>
                                            The <Word>agent</Word>, <Loc>"me"</Loc>, is the thing that is being made to
                                            take action because of the <B>causer</B>.
                                        </li>
                                        <li>
                                            The <Word>action</Word>, <Loc>"to be happy"</Loc>, is the action that is
                                            being taken by the <B>agent</B> because of the <B>causer</B>.
                                        </li>
                                    </ol>
                                    If that's not confusing enough, consider the summarized form:{' '}
                                    <B>
                                        The <Word>causer</Word>'s <Word>causation</Word> induces the <Word>agent</Word>{' '}
                                        to peform the <Word>action</Word>
                                    </B>
                                    .
                                </P>
                                <P>
                                    The important thing to note is that there are two actions happening at the same time
                                    here, and <B>one directly affects the other</B>. In the case of the sentence{' '}
                                    <TM>si li wile te mi li pasan</TM>, <Loc>"You want me to be happy"</Loc>, your
                                    action of <Loc>"wanting"</Loc> doesn't actually affect my action of{' '}
                                    <Loc>"being happy"</Loc>. However, in the causative example from before,{' '}
                                    <TM>si li wa te mi li pasan</TM>, your action of <Loc>"causing"</Loc> directly
                                    affects my action of <Loc>"being happy"</Loc>.
                                </P>
                                <P>
                                    It is because of this cause-and-effect relationship that you can consider the{' '}
                                    <B>agent</B> to be something like the <B>recipient of the causation</B>. To mark
                                    recipients, we use the preposition <TM>ki</TM>, finally allowing us to complete the
                                    original sentence.
                                    <See href="ki">
                                        <TM>ki</TM> - To
                                    </See>
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li pasan wa ki mi</TM>
                                        <Answer>
                                            <Loc>"You make me happy"</Loc>, literally{' '}
                                            <Loc>"You cause-to-be-happy, received by me"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    It's hard to show a direct translation of this in English, simply because we don't
                                    have an exact equivalent, but hopefully that example makes it clear.
                                </P>
                                <P>
                                    When using this causative-<TM>wa</TM> form, the first <TM>ki</TM> phrase is
                                    conventionally interpreted as marking the <B>agent</B>. This is, of course, only
                                    relevant if the sentence has multiple <TM>ki</TM> prepositions.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mama mi <B>li tawa wa ki mi</B> ki esun
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "My parent is <B>making me go</B> to the store"
                                            </Loc>
                                            , or{' '}
                                            <Loc>
                                                "My parent is <B>causing me to go</B> to the store
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    This causative-<TM>wa</TM> is also used to make active verb forms out of base
                                    modifiers.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li moli wa ki on</TM>
                                        <Answer>
                                            <Loc>"I kill them"</Loc>, literally <Loc>"I cause them to be dead"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li ante wa ki na</TM>
                                        <Answer>
                                            <Loc>"I change that"</Loc>, literally{' '}
                                            <Loc>"I cause that to be different"</Loc>, or{' '}
                                            <Loc>"I cause that to be changed"</Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li sapi wa ki tomo</TM>
                                        <Answer>
                                            <Loc>"I clean the house"</Loc>, literally{' '}
                                            <Loc>"I cause the house to be clean"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    Many common ideas are created using the causative-<TM>wa</TM> in toki ma.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li kama lon wa ki jan ko musi lili</TM>
                                        <Answer>
                                            <Loc>"I create a clay figurine"</Loc>, literally{' '}
                                            <Loc>"I cause-to-become-existent a small art-related clay person"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    In general, modifiers on the verb that come before the <TM>wa</TM> can be read as
                                    applying to the <B>action</B>, whereas modifiers that come after the <TM>wa</TM>{' '}
                                    apply to the <B>causation</B>. This usually doesn't really matter, but it can have
                                    an effect in some situations.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li kipisi mute mulu wa wiki ki sa</TM>
                                        <Answer>
                                            <Loc>"I quickly cause the object to be completely cut up"</Loc>, literally{' '}
                                            <Loc>"I quickly-cause-to-be-totally-very-divided the object"</Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    When other prepositions are involved besides the agent-marking <TM>ki</TM>, they
                                    always apply to the <B>action</B>, never to the <B>causation</B>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mama mi li tawa wa ki mi ki esun an suno pisile nen te li lanpan esun e pan
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "My parent made me go to the store yesterday in order to buy bread"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    If for some reason you need more prepositions to apply directly to <TM>wa</TM>, use
                                    the longer form with <TM>wa</TM> as main verb. This is specifically very rare, but
                                    it is still important to remember that <B>all of these sentences</B> can be
                                    expressed using the longer form as well. For more unified concepts such as{' '}
                                    <TM>li kama lon wa</TM>, <Loc>"to make"</Loc>, it would be very uncommon to see{' '}
                                    <TM>li wa te li kama lon</TM>, simply because nobody talks that way. However it is
                                    still allowed.
                                </P>
                            </Section>
                            {/* <Section unofficial>
                                    <Title id="wa">
                                        <TM>wa</TM> - Causatives
                                    </Title>
                                    <P>
                                        As a verb, the word <TM>wa</TM> means <Eng>"to cause"</Eng>, but it can also be
                                        used as a <B>modifier</B> to another verb, to act as a <Word>causative</Word>.
                                        <See href="verb-te-verb">
                                            Collapsed <TM>[verb] te [verb]</TM> Form
                                        </See>
                                    </P>
                                    <P>
                                        In this case, the subject is now the <Word>causer</Word> (the reason for
                                        action), causing the <Word>agent</Word> (the one doing the action) to perform
                                        the action. The preposition <TM>ki</TM> is used to mark the <B>agent</B>. You
                                        can think of it like <TM>ki</TM> marking the <B>recipient of the causation</B>.
                                        <See href="ki">
                                            <TM>ki</TM> - To
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
                                </Section> */}
                            <Section>
                                <Title id="nen">
                                    <TM>nen</TM> - Because Of
                                </Title>
                                <P>
                                    Another way to create causative relationships is with the preposition <TM>nen</TM>{' '}
                                    meaning <Loc>"because of"</Loc> or <Loc>"caused by"</Loc>. This is used to mark the{' '}
                                    <Word>initial cause</Word> of an action.
                                </P>
                                <Examples>
                                    <TM>
                                        mi li moku e kili <B>nen pesoni</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I eat fruit <B>because of necessity</B>"
                                        </Loc>
                                    </Answer>
                                </Examples>
                                <P>
                                    Rather than making the <B>subject</B> the causer, as with <TM>wa</TM>, using{' '}
                                    <TM>nen</TM> marks an <B>object</B> as the causer.
                                </P>
                                <P>
                                    This was originally introduced for emotions and <TM>wolin</TM> to make things less
                                    forceful and/or, for lack of a better word, predatory. Consider:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>mi li wolin e si</TM>
                                        <Answer>
                                            <Loc>"I love you</Loc>, implying that loving is an action done directly{' '}
                                            <B>to</B> you
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li wolin nen si</TM>
                                        <Answer>
                                            <Loc>"I feel love because of you"</Loc>, implying that to love is an
                                            experience and not a forceful action
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    For actions other than feeling emotions, <TM>nen</TM> is also used to deemphasize
                                    the <B>causation</B> in favor of the <B>action</B>. Using <TM>nen</TM> simply states
                                    the cause, rather than making the cause be the subject.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>si li wa e te mi li pali e musi</TM>
                                        <Answer>
                                            <Loc>"You cause me to make art"</Loc>, strong focus on <Loc>"you"</Loc>{' '}
                                            being the cause, and the causation itself
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>si li pali wa e musi ki mi</TM>
                                        <Answer>
                                            <Loc>"I make art, and you are the cause"</Loc>, equal focus on the act of{' '}
                                            <Loc>"making art"</Loc>, and on <Loc>"you"</Loc> being the cause
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>mi li pali e musi nen si</TM>
                                        <Answer>
                                            <Loc>"I make art because of you"</Loc>, focus on the act of{' '}
                                            <Loc>"making art"</Loc> and simply stating that <Loc>"you"</Loc> are the
                                            reason
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    All of these imply that <TM>si</TM> is their muse, their inspiration for making art,
                                    but how much that is a focus of the sentence is changed based on which sentence
                                    structure you choose to use.
                                </P>
                                {/* <P>
                                        When talking about verbs such as <TM>li intisa</TM>, meaning{' '}
                                        <Eng>"to wait"</Eng> or <Eng>"to be patient"</Eng>, it's not so clear how one
                                        might say{' '}
                                        <Eng>
                                            "to wait <B>for</B> [something]
                                        </Eng>
                                        . For this, <TM>nen</TM> is still used. Think of it like{' '}
                                        <Eng>"the reason being..."</Eng>.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>mi li intisa nen te li lanpan e moku</TM>
                                            <Answer>
                                                <Eng>"I am waiting for food"</Eng>, literally{' '}
                                                <Eng>"I am waiting, the reason being to receive food"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>mi li intisa nen moku</TM>
                                            <Answer>
                                                <Eng>"I am waiting for food"</Eng>, literally{' '}
                                                <Eng>"I am waiting, the reason being food"</Eng>
                                                <br />
                                                This is a more informal expression than the previous example
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>o intisa nen mi</TM>
                                            <Answer>
                                                <Eng>"Wait for me!"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples> */}
                            </Section>
                            <Section unofficial>
                                <Title id="polo">
                                    <TM>polo</TM> - For
                                </Title>
                                <P>
                                    While the word <TM>nen</TM> is used to mark the previous cause of a present action,
                                    often times present actions are done in order to cause a future action. This is
                                    precisely the use of the preposition <TM>polo</TM>. <TM>polo</TM> marks the{' '}
                                    <Word>purpose</Word> or <Word>beneficiary</Word> of an action. Think of it like{' '}
                                    <Loc>"for"</Loc> or <Loc>"in order to"</Loc> or <Loc>"so that"</Loc>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li pali e ni <B>nen</B> te on li toki e ni
                                        </TM>
                                        <Loc>
                                            "I am doing this <B>because</B> they are talking about it"
                                        </Loc>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pali e ni <B>polo</B> te on li toki e ni
                                        </TM>
                                        <Loc>
                                            "I am doing this <B>so that</B> they talk about it"
                                        </Loc>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pali e ni <B>polo</B> on
                                        </TM>
                                        <Loc>
                                            "I am doing this <B>for</B> them"
                                        </Loc>
                                    </Ex>
                                </Examples>
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
                                    The particles <TM>en</TM> (<Loc>"and"</Loc>), <TM>anu</TM> (<Loc>"or"</Loc>
                                    ), and <TM>lekin</TM> (<Loc>"but"</Loc>) can be used in almost exactly the same way
                                    as English. You can use them to separate or join sentences, clauses, individual
                                    words, etc. Here is a non-exhaustive list of examples:
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li wile te li moku e kili <B>anu</B> kasi <B>anu</B> pan
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I want to eat fruit, <B>or</B> vegetables, <B>or</B> bread"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li wile te li ato, <B>anu</B> te li tawa pelu noka mi
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I either want to drive <B>or</B> walk"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            jan <Transliterated>Ken</Transliterated> <B>anu</B> jan{' '}
                                            <Transliterated>Susen</Transliterated> o pana e mani ki on
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "Ken <B>or</B> Susen should give them money"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pasan nen pawo <B>en</B> meja
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I like dogs <B>and</B> cats"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pasan nen pawo <B>en</B> si li pasan nen meja
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I like dogs <B>and</B> you like cats"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pasan nen pawo <B>lekin</B> si li pasan nen meja
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I like dogs <B>but</B> you like cats"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li tini <B>lekin</B> wiki
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I am short <B>but</B> fast"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                            <Section unofficial>
                                <Title id="sequentiality">Sequentiality</Title>
                                <P>
                                    Using the particle <TM>en</TM> generally implies <Word>concurrency</Word> of events
                                    or states, meaning they occur at the same time.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li wile te li moku e kasi <B>en</B> pan suwi
                                        </TM>
                                        <Answer>
                                            <Loc>"I want to eat vegetables and cake"</Loc>, implying eating them
                                            together <B>in the same course</B>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li moku <B>en</B> mi li lukin e sitelen kanpe
                                        </TM>
                                        <Answer>
                                            <Loc>"I eat and watch a movie"</Loc>, implying eating <B>while</B> watching
                                            the movie
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pana e mani ki si <B>en</B> on
                                        </TM>
                                        <Answer>
                                            <Loc>"I am giving money to you and them"</Loc>, implying <B>one moment</B>{' '}
                                            of giving out money to two people
                                        </Answer>
                                    </Ex>
                                </Examples>
                                <P>
                                    In order to convey <Word>sequentiality</Word>, events occuring one after the other,
                                    you can instead <B>repeat the related preposition</B> or{' '}
                                    <B>
                                        repeat <TM>li</TM>
                                    </B>
                                    . Think of it like <Loc>"and then"</Loc>.
                                </P>
                                <Examples>
                                    <Ex>
                                        <TM>
                                            mi li wile te li moku <B>e</B> kasi <B>e</B> pan suwi
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I want to eat vegetables <B>and then</B> cake"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi <B>li</B> moku <B>li</B> lukin e sitelen kanpe
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I eat <B>and then</B> watch a movie"
                                            </Loc>
                                        </Answer>
                                    </Ex>
                                    <Ex>
                                        <TM>
                                            mi li pana e mani <B>ki</B> si <B>ki</B> on
                                        </TM>
                                        <Answer>
                                            <Loc>
                                                "I am giving money to you <B>and then</B> to them"
                                            </Loc>
                                            , implying <B>two separate moments</B> of giving out money
                                        </Answer>
                                    </Ex>
                                </Examples>
                            </Section>
                        </Section>
                        <Separator className="small">* * *</Separator>
                        <Section>
                            <Title id="pin">
                                <TM>pin</TM> - Also
                            </Title>
                            <P>
                                The modifier <TM>pin</TM> is used to mean <Loc>"also"</Loc>, <Loc>"as well"</Loc>,{' '}
                                <Loc>"too"</Loc>, <Loc>"additionally"</Loc>, etc. In English,<Loc>"also"</Loc> is an
                                adverb, used to modify a verb (ex:{' '}
                                <Loc>
                                    "I <B>am also</B> tired"
                                </Loc>
                                ,{' '}
                                <Loc>
                                    "I <B>also think</B> that"
                                </Loc>
                                ). In toki ma, however, <TM>pin</TM> can modify nouns to better clarify things.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <B>mi pin</B> li tawa ki tomo pi moku
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>I also</B> go to the restaurant"
                                        </Loc>
                                        , along with the other people who are going...
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li <B>tawa pin</B> ki tomo pi moku
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I <B>also go</B> to the restaurant"
                                        </Loc>
                                        , as well as doing other things like review it, pass by it, see it in the
                                        distance...
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li tawa ki <B>tomo pi moku pi pin</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I <B>also</B> go to the <B>restaurant</B>"
                                        </Loc>
                                        , as well as all the other places I go...
                                        <br />
                                        The second <TM>pi</TM> is required here because <TM>tomo pi moku pin</TM> would
                                        mean <Loc>"house of also-food"</Loc>.
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                All of these sentences can be said the same way in English, but in toki ma the placement
                                of <TM>pin</TM> actually clarifies what you really mean to say.
                            </P>
                            <P>
                                It is worth noting that the word <TM>taso</TM> can be used to mean <Loc>only</Loc>. In
                                this usage, it can be used in much the same way as <TM>pin</TM>, modifying different
                                words to imply slightly different results.
                            </P>
                        </Section>
                        <Section>
                            <Title id="asking-questions">Asking Questions</Title>
                            <P>
                                There are three kinds of questions you may want to ask: <Word>polar questions</Word>{' '}
                                (yes/no), <Word>open questions</Word> (who/what/why etc), and{' '}
                                <Word>alternative questions</Word> (this or that). Let's go over them one by one.
                            </P>
                            <P>
                                To ask a <Word>polar question</Word>, simply append the statement with <TM>anu no?</TM>.
                                Yes, it's that easy.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>si li wile te li moku, anu no?</TM>
                                    <Answer>
                                        <Loc>"Do you want to eat?"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li lamo, anu no?</TM>
                                    <Answer>
                                        <Loc>"Am I tall?"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi o moku e kili, anu no?</TM>
                                    <Answer>
                                        <Loc>"Should I eat fruit?"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                The response to a polar question should usually be either <TM>tuntan</TM>, <TM>lon</TM>,{' '}
                                <TM>isala</TM>, or <TM>no</TM>.
                            </P>
                            <P>
                                You would use the word <TM>lon</TM> to mean <Loc>"that is true"</Loc> or{' '}
                                <Loc>"that is the case"</Loc>. This would be the closest to answering <Loc>"yes"</Loc>{' '}
                                in most cases where the question is really <B>yes-or-no</B>. The alternative would be{' '}
                                <TM>no</TM> or, rarely, <TM>powe</TM>.
                            </P>
                            <P>
                                You would use the word <TM>tuntan</TM> to mean <Loc>"that is correct"</Loc>, as a
                                response to someone <B>asking for clarification</B> on a topic. The alternative would be{' '}
                                <TM>no</TM> or <TM>isala</TM>.
                            </P>
                            <P>
                                To ask an <Word>open question</Word>, the special particle <TM>seme</TM> can be placed
                                as kind of a <B>fill-in-the-blank</B> word. This is best demonstrated with some
                                examples:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        si li wile te li moku e <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>What</B> do you want to eat?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        <B>seme</B> li toki e na
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Who</B> said that?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li pali pelu <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>How</B> did you do that?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li pali pelu <B>tisi seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>How</B> did you do that?"
                                        </Loc>{' '}
                                        specifically asking <Loc>"using what method?"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li pilin (sama) su <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>How</B> are you feeling?"
                                        </Loc>{' '}
                                        asking <Loc>"in what manner?"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li tawa ki <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Where</B> are you going?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li solu nen <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Why</B> are you asking?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li tawa an tenpo <B>seme</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>When</B> do you go?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si li wile e li <B>seme pi</B> kule
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Which</B> color do you want?"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Simply place <TM>seme</TM> into the sentence where you would normally place the answer,
                                had you known the answer.
                            </P>
                            <P>
                                Finally, asking an <Word>alternative question</Word>, is kind of a combination of the
                                other two. It involves asking <B>which option</B> out of a <B>closed set of options</B>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        si li wile te li moku e <B>seme</B> pi kili anu kasi anu pan
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Which</B> do you want to eat: fruit, vegetables, or bread?"
                                        </Loc>
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
                                <Word>aspect</Word> of a verb talks about <B>how</B> the verb happens. Verbs in toki ma
                                are <Word>tenseless</Word> and <Word>aspectless</Word> by default, so this would all
                                normally be inferred from context.
                            </P>
                            <P>
                                Verbs don't always have to be tenseless, though. If it's important that you{' '}
                                <B>
                                    specify the <Word>tense</Word>
                                </B>{' '}
                                of a verb, you can use one of three modifiers: <TM>pisile</TM>, <TM>iputu</TM>, or{' '}
                                <TM>akile</TM> for <Loc>"past"</Loc>, <Loc>"present"</Loc>, and <Loc>"future"</Loc>.
                            </P>
                            <P>
                                But just because you say <TM>mi li moku iputu</TM>, that doesn't mean everything is
                                crystal clear yet. That could mean <Loc>"I am eating"</Loc>, <Loc>"I have eaten"</Loc>,
                                or <Loc>"I eat (habitually)"</Loc>. All of these translations are in{' '}
                                <B>present tense</B>, but they all have{' '}
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
                                , you can use one of six modifiers. Let's use the example sentence{' '}
                                <TM>mi li moku iputu</TM> to see what they are and how they work:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>posi</TM> indications <B>unstarted</B> action, so <TM>mi li moku iputu posi</TM>
                                    would mean <Loc>"I have yet to eat"</Loc>. In this case, the action of{' '}
                                    <Loc>eating</Loc> has not started yet.
                                </Ex>
                                <Ex>
                                    <TM>open</TM> indicates <B>starting</B> action, so <TM>mi li moku iputu open</TM>{' '}
                                    would mean <Loc>"I am starting to eat"</Loc>. In this case, the action of{' '}
                                    <Loc>eating</Loc> is currently starting up.
                                </Ex>
                                <Ex>
                                    <TM>sajo</TM> indicates <B>continuous</B> action, so <TM>mi li moku iputu sajo</TM>{' '}
                                    would mean <Loc>"I am eating"</Loc>, spefically stating{' '}
                                    <Loc>"I am currently in the process of eating"</Loc>. In this case, the action of{' '}
                                    <Loc>eating</Loc> is still ongoing.
                                </Ex>
                                <Ex>
                                    <TM>pini</TM> indicates <B>finishing</B> action, so <TM>mi li moku iputu pini</TM>{' '}
                                    would mean <Loc>"I am finishing eating"</Loc>. In this case, the action of{' '}
                                    <Loc>eating</Loc> is wrapping up.
                                </Ex>
                                <Ex>
                                    <TM>mulu</TM> indicates <B>completed</B> actions, so <TM>mi li moku iputu mulu</TM>{' '}
                                    would mean <Loc>"I have eaten"</Loc>, speficially stating{' '}
                                    <Loc>"I am currently in a state of having completed eating"</Loc>. In this case, the
                                    action of <Loc>eating</Loc> has now stopped.
                                </Ex>
                                <Ex>
                                    <TM>taka</TM> indicates <B>repeated</B> or <B>habitual</B> action, so{' '}
                                    <TM>mi li moku iputu taka</TM> would mean <Loc>"I eat"</Loc>, specifically stating{' '}
                                    <Loc>"Eating is an activity that I currently habitually partake in"</Loc>. In this
                                    case, the action of <Loc>eating</Loc> isn't necessarily happening right now, but it
                                    is still a regular occurrence for the speaker.
                                </Ex>
                            </Examples>
                            <P>
                                These words can be used to add specificity to your verbs. To be as specific as possible,
                                you'd have to use <B>both a tense modifier and an aspect modifier</B>. For example, only
                                using <TM>sajo</TM> without a <B>tense</B> modifier results in the same type of amiguity
                                as we saw above: the sentence <TM>mi li moku sajo</TM> could mean any of{' '}
                                <Loc>"I was eating"</Loc>, <Loc>"I am eating"</Loc>, or <Loc>"I will be eating"</Loc>,
                                all of which are <B>continuous</B> actions but have different <B>tense</B>.
                            </P>
                            <P>Here is a list of all possible tense/aspect combinations.</P>
                            <table>
                                <thead>
                                    <tr>
                                        <td style={{ border: 'none' }}></td>
                                        <th>
                                            <TM>
                                                <B>pisile</B>
                                            </TM>
                                            <br />(<Loc>past</Loc>)
                                        </th>
                                        <th>
                                            <TM>
                                                <B>iputu</B>
                                            </TM>
                                            <br />(<Loc>present</Loc>)
                                        </th>
                                        <th>
                                            <TM>
                                                <B>akile</B>
                                            </TM>
                                            <br />(<Loc>future</Loc>)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>posi</B>
                                            </TM>
                                            <br />(<Loc>unstarted</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku posi pisile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I had yet to eat"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku posi iputu</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I have yet to eat"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku posi akile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I will have yet to eat"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>open</B>
                                            </TM>
                                            <br />(<Loc>starting</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku open pisile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I was starting to eat"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku open iputu</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I am starting to eat"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku open akile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I will be starting to eat"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>sajo</B>
                                            </TM>
                                            <br />(<Loc>ongoing</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku sajo pisile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I was eating"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku sajo iputu</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I am eating"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku sajo akile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I will be eating"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>pini</B>
                                            </TM>
                                            <br />(<Loc>finishing</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku pini pisile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I was finishing eating"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku pini iputu</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I am finishing eating"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku pini akile</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"I will be finishing eating"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>mulu</B>
                                            </TM>
                                            <br />(<Loc>completed</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku mulu pisile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I ate"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku mulu iputu</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I have eaten"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku mulu akile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I will have eaten"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <TM>
                                                <B>taka</B>
                                            </TM>
                                            <br />(<Loc>repeated</Loc>)
                                        </th>
                                        <td>
                                            <TM>mi li moku taka pisile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I used to eat (habitually)"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku taka iputu</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I eat (habitually)"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mi li moku taka akile</TM>
                                            <Answer nospacer>
                                                <br />
                                                <Loc>"I will eat (habitually)"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <P>
                                The aspect <TM>pini</TM> can also be used to indicate that an action{' '}
                                <B>was ongoing but has since stopped</B>, without implying that the action is{' '}
                                <B>complete</B> and will not be revisited. For example, if someone knocks on the door
                                while you are eating dinner and you get up to answer the door, your eating is{' '}
                                <TM>pini</TM>, but not <TM>mulu</TM>, because you may sit back down and continue eating.
                            </P>
                            <P>
                                It is possible to use multiple aspect or tense markers at once to suggest even more
                                specific verbs. For example, <TM>li moku mulu taka</TM> implies thay you repeatedly
                                finish eating your food. Maybe you previously used to leave some on the plate.
                            </P>
                            <P>
                                To reiterate, <B>all of this and more</B> can be often inferred through context without
                                adding these modifiers, but they're here to use as needed to make sure you are properly
                                understood. Most of the time, people will not use tense and aspect modifiers when it is
                                clear enough through context, especially in informal speech.
                            </P>
                        </Section>
                        <Separator className="small">* * *</Separator>
                        <Section>
                            <Title id="units-of-time">Units of Time</Title>
                            <P>
                                Without dedicated words for units of time, toki ma has a few conventional phrases to
                                discuss common units of time. They come in short forms, useful for when context makes it
                                very obvious that you are talking about time, and long forms, useful for when context
                                isn't quite enough and you need to be more specific.
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
                                            <Loc>second</Loc>
                                        </td>
                                        <td>
                                            <TM>lamo penke</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"length of an instant"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>penke</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"instant"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>minute</Loc>
                                        </td>
                                        <td>
                                            <TM>osa tenpo</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"time segment"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>tenpo</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"time"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>hour</Loc>
                                        </td>
                                        <td>
                                            <TM>osa suno</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"sun segment"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>osa</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"segment"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>day</Loc>
                                        </td>
                                        <td>
                                            <TM>sike suno</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"sun cycle"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>suno</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"sun"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>month</Loc>
                                        </td>
                                        <td>
                                            <TM>sike mun</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"moon cycle"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>mun</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"moon"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>year</Loc>
                                        </td>
                                        <td>
                                            <TM>sike wetu</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"star cycle"</Loc>
                                            </Answer>
                                        </td>
                                        <td>
                                            <TM>wetu</TM>
                                            <br />
                                            <Answer nospacer>
                                                <Loc>"star"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <P>
                                When talking about times, it is common to start the time phrase with <TM>tenpo pi</TM>,
                                though not always necessary.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>tenpo seme li sajo</TM>
                                    <Answer>
                                        <Loc>"How much time is ongoing?"</Loc>
                                        <br />
                                        This could also be <TM>tenpo seme li pisile</TM>, literally{' '}
                                        <Loc>"how much time has passed?"</Loc>, or <TM>tenpo li seme (an) iputu</TM>,{' '}
                                        <Loc>"what time is it now?"</Loc>, the <TM>an</TM> is optional
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>tenpo 3 pi osa 18 li sajo</TM>
                                    <Answer>
                                        <Loc>"It is 18:03"</Loc>, literally{' '}
                                        <Loc>"the 3rd minute of the 18th hour is ongoing"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>3 tenpo akile pi osa 18 li sajo</TM>
                                    <Answer>
                                        <Loc>"It is 18:03"</Loc>, literally{' '}
                                        <Loc>"3 minutes after the 18th hour is ongoing"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                When speaking informally, there may be shorter ways to tell the time. If someone asks{' '}
                                <TM>tenpo seme li sajo</TM>, one might simply respond <TM>18 pi 3</TM>.
                            </P>
                            <P>
                                To talk about a duration the unit comes after the number.
                                <See href="numbers-and-mathematics">Numbers and Mathematics</See>
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li pali ki pini pi 5 osa</TM>
                                    <Answer>
                                        <Loc>"I worked for 5 hours"</Loc>, literally{' '}
                                        <Loc>"I worked until the end of 5 hours"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Days of the week are also done through numbers, with <Loc>Monday</Loc> being{' '}
                                <TM>suno 1</TM> and <Loc>Friday</Loc>
                                being <TM>suno 6</TM>. <Loc>Sunday</Loc> is therefore either <TM>suno 0</TM> or{' '}
                                <TM>suno 7</TM>, depending on how you think about the order of days, so the standard
                                term is <TM>suno suno</TM> to make it less confusing. The same is done for months, with{' '}
                                <Loc>January</Loc> being <TM>mun 1</TM>.
                            </P>
                        </Section>
                        <Section>
                            <Title id="la-ita">
                                <TM>la</TM> / <TM>ita</TM> - Marking Context
                            </Title>
                            <P>
                                The particles <TM>la</TM> and <TM>ita</TM> are used to attach <Word>context</Word>{' '}
                                phrases to your sentences. With <TM>la</TM>, the context phrase comes before it and the
                                sentence comes after, and with <TM>ita</TM>, the context comes after and the sentence
                                comes before.
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
                                Yes, that's a pretty vague explanation, but that's kind of the point. "Context" can be a
                                wide variety of things. Among those is specifying a <B>relative time</B> for the entire
                                sentence.
                            </P>
                            <P>
                                All of these example sentences will use <TM>la</TM>, placing the context before the main
                                sentence, but they could all just as well use <TM>ita</TM> and place the context at the
                                end. The meaning wouldn't change, this is simply for convenience of whatever feels more
                                comfortable.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <B>suno pisile la</B> mi li moku e kili
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I ate fruit <B>yesterday</B>"
                                        </Loc>
                                        <br />
                                        This <B>could</B> be interpreted as <Loc>"a few days ago"</Loc> or{' '}
                                        <Loc>"in the past days"</Loc>, interpreting <TM>suno</TM> as a plural, but that
                                        is often better represented with <TM>suno mute</TM>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        <B>tenpo pimeja ni la</B> mi li moku e kili
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>Tonight</B> I will eat fruit"
                                        </Loc>
                                        , literally <Loc>"this dark time"</Loc>
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
                                        <Loc>
                                            "<B>By tonight</B> I will have eaten fruit ten times"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                In that example, it doesn't say <Loc>"tonight I have eaten fruit ten times"</Loc>, which
                                wouldn't make sense because tonight hasn't happened yet. Instead the verb{' '}
                                <TM>moku pisile pini</TM> is interpreted as if it is already in the future context of{' '}
                                <Loc>"tonight"</Loc>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>tenpo pimeja pisile la mi li tawa ki tomo pi moku</TM>
                                    <Answer>
                                        <Loc>"Last night I went to the restaurant"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Times are not always relative to simple ideas like <Loc>"today"</Loc>,{' '}
                                <Loc>"tomorrow"</Loc>, or <Loc>"in three days"</Loc> sometimes you need to talk about
                                something <B>relative to a specific event</B>. For this, we state the context as
                                literally <Loc>"time that [event] occurred"</Loc> using{' '}
                                <TM>
                                    <B>tenpo te [event] an</B>, la ...
                                </TM>
                                , with the <TM>an</TM> preposition dangling. Another option is to use{' '}
                                <TM>
                                    <B>tenpo pi te [event]</B>, la
                                </TM>{' '}
                                meaning literally <Loc>"time of [event]"</Loc>
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>tenpo te mi li moku e kili an, la mi li pasan</TM>
                                    <Answer>
                                        <Loc>"When I eat fruit, I am happy"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>tenpo te mi li moku pisile e kili an, la mi li pasan</TM>
                                    <Answer>
                                        <Loc>"When I ate fruit, I was happy"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                See how when the context is put in the past, the main verb is also interpreted as being
                                past tense, just like the earlier example with <TM>tenpo pimeja ni la</TM>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        tenpo te mi li tawa akile ki tomo esun pi moku an, la mi li lanpan esun e kili
                                    </TM>
                                    <Answer>
                                        <Loc>"When I go to the grocery store later, I will buy fruit"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        tenpo pi te mi li tawa akile ki tomo esun pi moku, la mi li lanpan esun e kili
                                    </TM>
                                    <Answer>
                                        <Loc>"When I go to the grocery store later, I will buy fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="specifying-topics">Specifying Topics</Title>
                            <P>
                                If providing time as context makes a <B>when-clause</B>, what happens when you provide
                                something that isn't a time? You end up simply specifying a <Word>topic</Word>. This can
                                be used to <B>introduce a new topic</B>, to <B>specify a relative concept</B> in which
                                to frame the following sentence, or to <B>change topics</B> similar to the English
                                phrase <Loc>"speaking of which..."</Loc>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>pawo la mi li jo e wan, lekin jan pona mi li jo e po!</TM>
                                    <Answer>
                                        <Loc>"Speaking of dogs, I have one but my friend has four!"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>tana mi la si li pona</TM>
                                    <Answer>
                                        literally <Loc>"In the context of my thoughts, you are good"</Loc>, or roughly{' '}
                                        <Loc>"I think you are good"</Loc>
                                        <br />
                                        This is a somewhat awkward example, as it is more clearly stated using{' '}
                                        <TM>mi li tana te si li pona</TM>, but it is still correct
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        te li toki tuntan pi toki ma, la si o lukin e lipu te jan{' '}
                                        <Transliterated>Ta</Transliterated> li lika!
                                    </TM>
                                    <Answer>
                                        This one is a bit harder to translate into English, but it's roughly{' '}
                                        <Loc>"On the topic of toki ma grammar, read this guide written by Ta!"</Loc>
                                        <br />
                                        More literally, it's{' '}
                                        <Loc>
                                            "In the context of speaking toki ma correctly, you should read this document
                                            that Ta wrote!"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>ato te li loje pisile, la mi li laso wa pelu telo kule</TM>
                                    <Answer>
                                        <Loc>"About the car that was red, I paint it blue"</Loc>
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
                                <Word>conditional</Word> (<Loc>"if [event] occurs, ...</Loc>). The main sentence is then
                                interpreted as what <B>will/would happen</B> if that condition were true. By "entire
                                event", I mean a statement that would be complete on its own such as{' '}
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
                                        <Loc>"If the car is red, I will paint it blue"</Loc>
                                        <br />
                                        The tense of this sentence is ambiguous.
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>ato li loje pisile la mi li laso wa pelu telo kule</TM>
                                    <Answer>
                                        <Loc>"If the car was red, I would have painted it blue"</Loc>
                                        <br />
                                        Because the context is past tense, the main sentence is interpreted as what
                                        would have happened in that hypothetical past.
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>si li wile te li tawa ki tomo pi moku, la mi li wile te li tawa kan si</TM>
                                    <Answer>
                                        <Loc>"If you want go to the restaurant, then I want to go with you"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="an">
                                <TM>an</TM> - In/At/On
                            </Title>
                            <P>
                                The preposition <TM>an</TM> meaning <Loc>in</Loc>, <Loc>at</Loc>, or <Loc>on</Loc> is
                                used to state both <Word>times</Word> and <Word>locations</Word>, adding yet another way
                                to talk about time in toki ma.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        mi li moku e kili <B>an tomo pi moku</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I eat fruit <B>at the restaurant</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li moku e kili <B>an suno pisile</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I ate fruit <B>yesterday</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        pawo li lon <B>an soto pi meja</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "The dog is <B>to the left of the cat</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li lakima mute sajo <B>an akile pi te on li tawa weka pisile</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I have been very sad <B>ever since she left</B>"
                                        </Loc>
                                        , more literally{' '}
                                        <Loc>
                                            "I am very sad <B>in the future of her leaving</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li awen wa ki sike <B>an insa pi tapa</B>
                                    </TM>
                                    <Answer>
                                        <Loc>"I place the ball inside the box"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="multiple-contexts">Multiple Contexts</Title>
                            <P>
                                It is possible to have multiple context phrases on one sentence. They combine together
                                in a logical manner, usually from left-to-right in the way they are presented. This is
                                often avoidable, but in spoken toki ma you may not have fully thought through your
                                sentence by the time you've started speaking and you realize you want to add more
                                context.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        pawo la, iputu la, on li pasan wa ki mi, lekin munkin la, akile la, on li lakima
                                        wa ki mi ita on li kuton wa ki mi
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "As for dogs, currently, I like them, but in maybe, in the future, I will
                                            dislike them, if they hurt me.
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                This sentence is very awkward in writing, but in spoken language this kind of thing is
                                reasonably common.
                            </P>
                        </Section>
                        <Section>
                            <Title id="mood">Mood</Title>
                            <P>
                                <Word>Grammatical mood</Word> is the term for how a sentence is structured to reflect
                                different ideas. There are many possible moods, each with technical names, and each used
                                for different ways of speaking: stating facts, asking questions, talking about wishes,
                                discussing hypotheticals, the list goes on.
                            </P>
                            <P>
                                You've already learned how to use quite a few of these moods so far: you can state
                                commands, requests, and desires with <TM>o</TM>, you can ask questions with{' '}
                                <TM>seme</TM>, you can create conditionals with <TM>la</TM> or <TM>ita</TM> to talk
                                about hypotheticals, and more. Not every grammatical mood that grammarians have defined
                                have unique equivalents in toki ma, but there are creative ways to approximate many of
                                them to either directly state or heavily imply a specific mood.
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
                                            <Loc>"I am eating"</Loc>
                                        </td>
                                        <td>
                                            <TM>mi li moku</TM>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conditional</td>
                                        <td>Used to talk about events that rely on another condition</td>
                                        <td>
                                            <Loc>"If I start getting hungry, I will eat"</Loc>
                                        </td>
                                        <td>
                                            <TM>mi li wile open e moku la mi li moku</TM>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Subjunctive</td>
                                        <td>Used to talk about possible events, often events considered unlikely</td>
                                        <td>
                                            <Loc>"If I were hungry, I would eat"</Loc>
                                        </td>
                                        <td>
                                            <TM>mi li wile e moku la mi li moku</TM>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Imperative</td>
                                        <td>Used to issue commands or requests</td>
                                        <td>
                                            <Loc>"(You), Eat fruit"</Loc>
                                        </td>
                                        <td>
                                            <TM>o moku e kili</TM>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Optative</td>
                                        <td>Used to talk about things that one hopes for</td>
                                        <td>
                                            <Loc>"Safe travels!</Loc>
                                        </td>
                                        <td>
                                            <TM>o tawa pona!</TM>
                                            <br />
                                            <Answer nospacer>
                                                literally <Loc>"Travel well!"</Loc>
                                            </Answer>
                                            <br />
                                            This is not imperative only because of the context of the statement. It is
                                            clearly a wish and not a command.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jussive</td>
                                        <td>Used to state what is desired or suggested</td>
                                        <td>
                                            <Loc>"Someone should give them food"</Loc>
                                        </td>
                                        <td>
                                            <TM>jan o pana e moku ki on</TM>
                                            <br />
                                            <Answer nospacer>
                                                literally <Loc>"A person should give food to them"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hypothetical</td>
                                        <td>Used to talk about hypothetical or possible events</td>
                                        <td>
                                            <Loc>"I might be able to find food"</Loc>
                                        </td>
                                        <td>
                                            <TM>mi li alasa munkin e moku</TM>
                                            <br />
                                            <Answer nospacer>
                                                literally <Loc>"I possibly find food"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Permissive</td>
                                        <td>Used to express that an action is allowed by the speaker</td>
                                        <td>
                                            <Loc>"You may eat"</Loc>
                                        </td>
                                        <td>
                                            <TM>li lon pi oke te si li moku</TM>
                                            <br />
                                            <Answer nospacer>
                                                literally <Loc>"It is ok that you eat food"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Inferential</td>
                                        <td>Used when the event is unwitnessed and unconfirmed</td>
                                        <td>
                                            <Loc>"They say you eat fruit"</Loc>
                                        </td>
                                        <td>
                                            <TM>li toki te si li moku e kili</TM>
                                            <br />
                                            <Answer nospacer>
                                                literally <Loc>"it is said that you eat fruit"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Interrogative</td>
                                        <td>Used to ask a question</td>
                                        <td>
                                            <Loc>"What are you eating?"</Loc>
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
                                The verb <TM>pali</TM>, meaning <Loc>"to make"</Loc>, <Loc>"to work"</Loc>, or{' '}
                                <Loc>"to do"</Loc> is considered to be the <B>generic verb</B> in toki ma, similar to
                                how <TM>sa</TM> meaning <Loc>"object"</Loc> or <Loc>"thing</Loc> is the generic noun.
                                When used to mean <Loc>"to do"</Loc>, <TM>pali</TM> is rarely seen in statements on its
                                own, usually appearing in questions, or when accompanied by demonstrating an action.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li pali su ni</TM>
                                    <Answer>
                                        <Loc>"I do it like this"</Loc>, usually followed by a demonstration of the
                                        action you're doing
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>si li pali e seme</TM>
                                    <Answer>
                                        <Loc>"What are you doing?"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>si li pali pona!</TM>
                                    <Answer>
                                        <Loc>"You are doing well!"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                When used to mean <Loc>"to make"</Loc>, the word is much more descriptive, acting the
                                same as any other verb.
                            </P>
                        </Section>
                        <Section>
                            <Title id="pelu">
                                <TM>pelu</TM> - Using
                            </Title>
                            <P>
                                The preposition <TM>pelu</TM> marks the <Word>instrument</Word> of a sentence, roughly
                                equivalent to <Loc>"using"</Loc>, <Loc>"with the use of"</Loc>, or{' '}
                                <Loc>"with the help of"</Loc>. This is used to demonstrate <B>use of tools</B> or
                                materials, or <B>assistance</B> from other objects or individuals.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li kama wisaja pelu palisa kela ilo sankan mi</TM>
                                    <Answer>
                                        <Loc>"I won using my special bat"</Loc>, literally{' '}
                                        <Loc>"I become victorious using my special stick-game tool"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li kama wisaja pelu walala mi</TM>
                                    <Answer>
                                        <Loc>"I won with the help of my sibling"</Loc>, implying you did the winning and
                                        they only provided assistance, as opposed to winning "along with" your sibling
                                        as if they were on the same team.
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="kan">
                                <TM>kan</TM> - With
                            </Title>
                            <P>
                                The preposition <TM>kan</TM> indicates <Word>accompaniment</Word>, roughly equivalent to{' '}
                                <Loc>"together with"</Loc>, <Loc>"among"</Loc>, or <Loc>"in the company of"</Loc>. This
                                is used for doing actions <B>along with</B> a person or group.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li tawa ki tomo pi moku kan mama mi</TM>
                                    <Answer>
                                        <Loc>"I am going to the restaurant with my parents"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li awen kan jan pona mi</TM>
                                    <Answer>
                                        <Loc>"I am staying with my friends"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="ki">
                                <TM>ki</TM> - To
                            </Title>
                            <P>
                                The preposition <TM>ki</TM> marks the <Word>destination</Word> or <Word>recipient</Word>{' '}
                                of an action. This is roughly equivalent to <Loc>"to"</Loc> or{' '}
                                <Loc>"until [a time]"</Loc>. This is used to indicate <B>motion towards</B> an object or
                                place, to mark <B>the recipient</B> of an action, or to specify the end of a time range.
                                It is this recipient marking that is the reason we use <TM>ki</TM> for causative-
                                <TM>wa</TM> phrases, as previously explained.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li pali ki osa 18</TM>
                                    <Answer>
                                        <Loc>"I am busy until 18:00"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li tawa ki tomo pi moku</TM>
                                    <Answer>
                                        <Loc>"I go to the restaurant"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>o tawa open ki nasin pi nasin suli pi ato</TM>
                                    <Answer>
                                        <Loc>"Start heading toward the freeway/motorway"</Loc>, literally{' '}
                                        <Loc>"... to the direction of the big road of cars"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li pesoni te li konta sata, ki te li konta e ni</TM>
                                    <Answer>
                                        <Loc>"I need to learn more in order to understand this"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li pana pisile e kili ki si</TM>
                                    <Answer>
                                        <Loc>"I gave you a fruit"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="tan">
                                <TM>tan</TM> - From
                            </Title>
                            <P>
                                The preposition <TM>tan</TM> marks the <Word>origin</Word> or <Word>source</Word>,
                                roughly equivalent to <Loc>"from"</Loc>, or <Loc>"starting at [a time]"</Loc>. This is
                                used to indicate <B>motion away from</B> an object, to show the originating source of an
                                object, or to specify the end of a time range.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li pali tan osa 18</TM>
                                    <Answer>
                                        <Loc>"I have been busy since 18:00"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li tawa tan tomo mi</TM>
                                    <Answer>
                                        <Loc>"I am leaving my house"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li lanpan pisile e kili tan si</TM>
                                    <Answer>
                                        <Loc>"I received a fruit from you"</Loc>
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
                                The preposition <TM>su</TM> means <Loc>"than"</Loc>, <Loc>"as"</Loc>, or{' '}
                                <Loc>"compared to"</Loc>. This is most often used with <TM>sata</TM> and <TM>kata</TM>{' '}
                                to create <Word>comparatives</Word>. Comparatives are phrases like{' '}
                                <Loc>"bigger than"</Loc>, <Loc>"less cold than"</Loc>, etc., stating <B>relative</B>{' '}
                                comparisons between things.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        pawo si li <B>suli sata su</B> pawo mi
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "Your dog is <B>bigger than</B> my dog"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM> mi li wile sata e te li moku su te li lape</TM>
                                    <Answer>
                                        <Loc>"I would rather eat than sleep"</Loc>, literally{' '}
                                        <Loc>"I want more to eat than to sleep"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Unlike other prepositions in toki ma, <TM>su</TM> can be <B>directly followed</B> by
                                another preposition in comparative sentences.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        mi li pasan kata nen pawo <B>su nen</B> meja
                                    </TM>
                                    <Answer>
                                        <Loc>"I like dogs less than cats"</Loc>, literally{' '}
                                        <Loc>"I am less happy because of dogs than because of cats"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li tawa pi taka sata ki tomo pi moku kan si <B>su kan</B> mama mi
                                    </TM>
                                    <Answer>
                                        <Loc>"I go to the restaurant more often with you than with my parents"</Loc>,
                                        literally{' '}
                                        <Loc>
                                            "I go of more repetitions to the restaurant with you than with my parents"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Another use of <TM>su</TM> is with <TM>sama</TM> and <TM>ante</TM> to talk about
                                similarity. This can be combined with <TM>poka</TM> and <TM>suti</TM>, <Loc>"near"</Loc>{' '}
                                and <Loc>"specific"</Loc>, to differentiate between things being exactly the same or
                                just similar. Without them, the degree of similarity is implied through context, as is
                                true of so much of toki ma.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        na li <B>sama su</B> ni
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "That is the <B>same as</B> this"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        na li <B>ante mute su</B> ni
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "That is <B>very different than</B> this"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        pawo na li lon lukin pi <B>sama suti su</B> pawo mi
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "That dog looks <B>exactly like</B> mine"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        si en on li lukin pi <B>sama poka</B> a!
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "You and him look <B>similar</B>!"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="superlatives">Superlatives</Title>
                            <P>
                                Unlike comparatives, <Word>superlatives</Word> state <B>absolute</B> comparisons:{' '}
                                <Loc>"best"</Loc>, <Loc>"most enjoyable"</Loc>, <Loc>"fastest"</Loc>. For this, you can
                                use the phrase <TM>sata su ali</TM>, meaning <Loc>"more than all"</Loc>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>mi li jan te li wiki sata su ali</TM>
                                    <Answer>
                                        <Loc>"I am the fastest person"</Loc>, literally{' '}
                                        <Loc>"I am the person that is faster than all"</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>mi li moku pisile sata su ali</TM>
                                    <Answer>
                                        <Loc>"I ate the most"</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Separator>* * *</Separator>
                        <Title id="numbers-and-mathematics" className="major">
                            Numbers and Mathematics
                        </Title>
                        <Section>
                            <Title id="forming-numbers">Forming Numbers</Title>
                            <P>
                                It's simple enough to talk about the base number words that toki ma provides: (
                                <TM>wan</TM>, <TM>tu</TM>, <TM>san</TM>, ..., <TM>ten</TM>, <TM>kenta</TM>, etc.), but
                                how do you put these words together to form other numbers? It's actually very much like
                                you would do it in English! There is no such thing as a modifier form of a number, they
                                all act as connected nouns. Let's look at examples and it will all be clear.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>ten tu</TM>
                                    <Answer>
                                        <Loc>12</Loc> (ten and two)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>oto ten</TM>
                                    <Answer>
                                        <Loc>80</Loc> (eight tens)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>san ten tu</TM>
                                    <Answer>
                                        <Loc>32</Loc> (three tens and two)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>lima kenta sesi</TM>
                                    <Answer>
                                        <Loc>506</Loc> (five hundreds and six)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>po ten san kilo</TM>
                                    <Answer>
                                        <Loc>43,000</Loc> ([four tens and three] thousands)
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>po ten san kilo wan</TM>
                                    <Answer>
                                        <Loc>43,001</Loc> ([four tens and three] thousands, and [one])
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>san meka po kenta po ten sesi kilo sepen ten oto</TM>
                                    <Answer>
                                        <Loc>3,446,078</Loc> ([three] millions, [four hundreds and ten fours and six]
                                        thousands, [seven tens and eight])
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                Unlike other words which would be considered modifiers after the first one, no matter
                                how many number words you put together <B>it always counts as a single noun.</B>
                            </P>
                        </Section>
                        <Section unofficial>
                            <Title id="zero">Zero</Title>
                            <P>
                                The word <TM>nula</TM> is used for <Loc>"zero"</Loc>, though, like in English, it
                                doesn't often appear in compound whole number words. You don't find yourself saying{' '}
                                <Loc>"four thousand, zero hundred, and fifty six"</Loc>, do you? That said, zero is
                                still a very important concept. Until this becomes official, the word <TM>no</TM> can be
                                used as a number word to mean <Loc>"zero"</Loc>.
                            </P>
                            <P>
                                With this change, <TM>nula</TM> would be used for negation in place of <TM>no</TM> to
                                say things like <Loc>"without"</Loc> in sentences like:
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        mi li tawa kan <B>nula pi mama mi</B>
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "I go <B>without my parent</B>"
                                        </Loc>
                                        , literally{' '}
                                        <Loc>
                                            "I go with <B>none of my parent</B>"
                                        </Loc>
                                        <br />
                                        This more strongly implies that you are going alone, compared to{' '}
                                        <TM>mi li tawa kan no mama mi</TM>
                                        <See href="no">
                                            <TM>no</TM> Particle
                                        </See>
                                    </Answer>
                                </Ex>
                            </Examples>
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
                                        <Loc>
                                            "I have <B>three dogs</B>"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        mi li pali tan <B>ten oto osa</B> pisile
                                    </TM>{' '}
                                    <Answer>
                                        <Loc>
                                            "I have been working for <B>eighteen hours</B>
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                <Word>Ordinal</Word> numbers are placed <B>after the noun</B>. These are used to specify
                                the position of an item in a series, like <Loc>"fourth"</Loc> or{' '}
                                <Loc>"seventeenth"</Loc>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <B>pawo tu</B> li pona sata pi ali
                                    </TM>
                                    <Answer>
                                        <Loc>
                                            "<B>The second dog</B> is the best"
                                        </Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>
                                        <B>san tenpo</B> akile pi <B>osa ten oto</B> li sajo
                                    </TM>
                                    <Answer>
                                        <Loc>It is 18:03</Loc>, literally{' '}
                                        <Loc>
                                            "<B>three minutes</B> after the <B>eighteenth hour</B> have passed"
                                        </Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                            <P>
                                This is why when telling times, we say <TM>san osa</TM> to mean <Loc>"three hours"</Loc>
                                , and <TM>"osa san"</TM> to mean <Loc>"three o'clock"</Loc>, literally{' '}
                                <Loc>"third hour"</Loc>.
                            </P>
                            <See href="units-of-time">Units of Time</See>
                        </Section>
                        {/* <Section unofficial>
                                    <Title id="quantities">Quantities</Title>
                                    <P>
                                        Some non-numerical words are often used as <B>quantities</B>. These include
                                        words like <TM>mute</TM>, <TM>tote</TM>, and <TM>ali</TM>. Words like{' '}
                                        <TM>ali</TM> are roughly the same if you consider the implications of{' '}
                                        <B>cardinal</B> or <B>ordinal</B>, both meaning <Eng>"all"</Eng>, but words like{' '}
                                        <TM>mute</TM> or <TM>tote</TM>can imply different things when placed before or
                                        after a word.
                                    </P>
                                    <Examples>
                                        <Ex>
                                            <TM>jatila mute</TM>
                                            <Answer>
                                                <Eng>"a lot of difficuly"</Eng>
                                            </Answer>
                                        </Ex>
                                        <Ex>
                                            <TM>mute jatila</TM>
                                            <Answer>
                                                <Eng>"many difficulties"</Eng>
                                            </Answer>
                                        </Ex>
                                    </Examples>
                                    <P>
                                        This is only relevant when the noun being modified can be interpreted as either
                                        a <B>countable</B> or <B>non-countable</B> thing. Otherwise, it's essentially
                                        the same either way.
                                    </P>
                                </Section> */}
                        <Section>
                            <Title id="fractions-decimals-and-percents">Fractions, Decimals, and Percents</Title>
                            <P>
                                It's pretty straight forward to talk about whole numbers, but it gets a bit more
                                complicated when you need to discuss numbers with fractional components.
                            </P>
                            <P>
                                To talk about <B>fractions</B> we use <TM>[numerator] osa pi [denominator]</TM>,
                                literally <Loc>"[numerator] parts of [denominator]</Loc>.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>san osa pi lima</TM>
                                    <Answer>
                                        <Loc>3/5</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>tu ten po osa pi tu kenta san ten wan</TM>
                                    <Answer>
                                        <Loc>24/231</Loc>
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
                                        <Loc>12.3244</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>san suti wan po wan lima newen tu ...</TM>
                                    <Answer>
                                        <Loc>3.141592...</Loc>
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
                                        <Loc>25%</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>po ten suti oto sepen wan senti</TM>
                                    <Answer>
                                        <Loc>40.871%</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="negative-numbers">Negative Numbers</Title>
                            <P>
                                <B>Negative numbers</B> are stated using <TM>ta pi [number]</TM> meaning{' '}
                                <Loc>"reflection of [number]"</Loc> or <Loc>"opposite of [number]"</Loc>, or{' '}
                                <TM>[number] ta</TM> for short.
                            </P>
                            <Examples>
                                <Ex>
                                    <TM>ta pi san</TM>
                                    <Answer>
                                        <Loc>-3</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>ta pi po osa pi ten</TM>
                                    <Answer>
                                        <Loc>-4/10</Loc>
                                    </Answer>
                                </Ex>
                                <Ex>
                                    <TM>ta pi sesi suti newen newen</TM>
                                    <Answer>
                                        <Loc>-6.99</Loc>
                                    </Answer>
                                </Ex>
                            </Examples>
                        </Section>
                        <Section>
                            <Title id="mathematical-operations">Mathematical Operations</Title>
                            <P>
                                While there are no specific words for mathematical operations such as{' '}
                                <Loc>"addition"</Loc> or <Loc>"multiplication"</Loc>, other descriptions can be used to
                                talk about the operations in a mathematical context.
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
                                        <td style={{ borderBottom: 'none' }}>
                                            Addition
                                            <br />2 + 3
                                        </td>
                                        <td>
                                            <TM>[te] li tewe wa ki tu kan san </TM>
                                            <Answer>
                                                literally <Loc>"to join 2 with 3"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>[te] li pana e san ki tu </TM>
                                            <Answer>
                                                literally <Loc>"to give 3 to 2"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>[te] li unja wa ki tu kan san </TM>
                                            <Answer>
                                                literally <Loc>"to combine 2 with 3"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>2 + 3 = 5</td>
                                        <td>
                                            <TM>tu en san li lima</TM>
                                            <Answer>
                                                literally <Loc>"2 and 3 is 5"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Subtraction
                                            <br />7 - 4
                                        </td>
                                        <td>
                                            <TM>[te] li weka wa ki po tan sepen</TM>
                                            <Answer>
                                                literally <Loc>"to make-absent 4 from 7"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>[te] li lanpan e po tan sepen</TM>
                                            <Answer>
                                                literally <Loc>"to take 4 from 7"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>[te] li papon wa ki sepen e po</TM>
                                            <Answer>
                                                literally <Loc>"to cause 7 to emit 4"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>7 - 4 = 3</td>
                                        <td>
                                            <TM>sepen en po ta li san</TM>
                                            <Answer>
                                                literally <Loc>"7 and -4 is 3"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Multiplication
                                            <br />2 * 5
                                        </td>
                                        <td>
                                            <TM>[te] li pali e tu kulupu pi lima</TM>
                                            <Answer>
                                                literally <Loc>"to create 2 groups of 5"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>[te] li mute ki tu kan lima</TM>
                                            <Answer>
                                                literally <Loc>"to make-many 2 with 5"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>2 * 5 = 10</td>
                                        <td>
                                            <TM>tu kulupu pi lima li ten</TM>
                                            <Answer>
                                                literally <Loc>"2 groups of 5 is 10"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>lima pi (mute) tu li ten</TM>
                                            <Answer>
                                                literally <Loc>"5 (large amounts) of 2 is 10"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Division
                                            <br />9 / 4
                                        </td>
                                        <td>
                                            <TM>[te] li kipisi wa ki newen pelu po</TM>
                                            <Answer>
                                                literally <Loc>"to cut 9 using 4"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>9 / 4 = 2.25</td>
                                        <td>
                                            <TM>po kipisi pi newen li tu suti tu lima</TM>
                                            <Answer>
                                                literally <Loc>"4 splits of 9 is 2.25"</Loc>
                                            </Answer>
                                            <br />
                                            <TM>newen osa pi po li tu suti tu lima</TM>
                                            <Answer>
                                                stating 9/4 in standard <B>fraction</B> form directly
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Absolute Value
                                            <br />
                                            |-5|
                                        </td>
                                        <td>
                                            <TM>[te] li sata wa ki ta pi lima su no</TM>
                                            <Answer>
                                                literally <Loc>"to make -5 more than 0"</Loc>
                                            </Answer>
                                            <br />
                                            <Unofficial>
                                                use <TM>nula</TM> instead of <TM>no</TM>
                                                <See href="zero" style={{ paddingLeft: 0 }}>
                                                    Zero
                                                </See>
                                            </Unofficial>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>|-5| = 5</td>
                                        <td>
                                            <TM>lima ta te li sata su no, li lima</TM>
                                            <Answer>
                                                literally <Loc>"-5 that is greater than 0 is 5</Loc>
                                            </Answer>
                                            <br />
                                            <Unofficial>
                                                use <TM>nula</TM> instead of <TM>no</TM>
                                                <See href="zero" style={{ paddingLeft: 0 }}>
                                                    Zero
                                                </See>
                                            </Unofficial>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Exponentiation
                                            <br />6<sup>3</sup>
                                        </td>
                                        <td>
                                            <TM>[te] li mute wa ki sesi kan sama an san taka</TM>
                                            <Answer>
                                                literally <Loc>"to make-many 6 with itself 3 times"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>
                                            6<sup>3</sup> = 216
                                        </td>
                                        <td>
                                            <TM>san mute sama pi sesi li tu kenta ten sesi</TM>
                                            <Answer>
                                                literally <Loc>"3 identical bunches of 6 is 216"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderBottom: 'none' }}>
                                            Nth Root
                                            <br />∛<span style={{ borderTop: '1px solid' }}>125</span>
                                        </td>
                                        <td>
                                            <TM>[te] li alasa e open san pi kenta tu ten lima</TM>
                                            <Answer>
                                                literally <Loc>"to find the 3rd origin of 125</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ borderTop: 'none' }}>
                                            ∛<span style={{ borderTop: '1px solid' }}>125</span> = 5
                                        </td>
                                        <td>
                                            <TM>open san pi kenta tu ten lima li lima</TM>
                                            <Answer>
                                                literally <Loc>"3rd origin of 125 is 5"</Loc>
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
                                There are no dedicated words for the cardinal directions in toki ma. As such, the words
                                for <Loc>"north"</Loc>, <Loc>"south"</Loc>, <Loc>"east"</Loc>, and <Loc>"west"</Loc> are
                                defined relative to something that is constant regardless of your first language: the
                                motion of the Sun. We talk about the directions <B>from the Sun's perspective</B>,
                                meaning <Loc>"west"</Loc> is considered foreward, and <Loc>"north"</Loc> is considered
                                to the right.
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
                                                literally <Loc>"to the front of the Sun"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>East</td>
                                        <td>
                                            <TM>monsi suno</TM>
                                            <Answer>
                                                literally <Loc>"to the back of the Sun"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>North</td>
                                        <td>
                                            <TM>jupa suno</TM>
                                            <Answer>
                                                literally <Loc>"to the right of the Sun"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>South</td>
                                        <td>
                                            <TM>soto suno</TM>
                                            <Answer>
                                                literally <Loc>"to the left of the Sun"</Loc>
                                            </Answer>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Section>
                        <Section>
                            <Title id="names-and-foreign-words">Names and Foreign Words</Title>
                            <P>
                                In order to fulfill the goal of an international language, it is best to try to use toki
                                ma words to describe the things you are talking about. However, there are times when you
                                will want to use names or words from outside toki ma in the interest of clarity,
                                accuracy, or just general ease of use.
                            </P>
                            <P>
                                When using external names or words, you have a few options. You may choose to either use
                                the Latin script spelling of the word or name, or you can transliterate it into the
                                sounds that toki ma has to offer. So the name <Loc>"Angela"</Loc> could be spelled{' '}
                                <TM>
                                    <Foreign>Angela</Foreign>
                                </TM>
                                ,{' '}
                                <TM>
                                    <Transliterated>Ankela</Transliterated>
                                </TM>
                                ,{' '}
                                <TM>
                                    <Transliterated>Anjela</Transliterated>
                                </TM>
                                , etc. Any of these are acceptable. If you choose not to transliterate the name into
                                toki ma, there is no guarantee how someone else may pronounce it based on their native
                                language.
                            </P>
                            <P>
                                Additionally, you can prefix the word or name with the toki ma word for the type of
                                thing it is. If you're naming a person, it's common to say{' '}
                                <TM>
                                    jan <Transliterated>Ankela</Transliterated>
                                </TM>
                                , making it clear that this is the name of a <TM>jan</TM>. If you're naming a food, you
                                might prefix it with <TM>moku</TM>, such as{' '}
                                <TM>
                                    moku <Transliterated>Topu</Transliterated>
                                </TM>{' '}
                                for <Loc>"tofu"</Loc>.
                            </P>
                            <P>All of the following examples are valid ways to say New York City:</P>
                            <Examples>
                                <Ex>
                                    <TM>
                                        <Foreign>New York City</Foreign>
                                    </TM>
                                </Ex>
                                <Ex>
                                    <TM>
                                        naka <Foreign>New York City</Foreign>
                                    </TM>
                                </Ex>
                                <Ex>
                                    <TM>
                                        <Transliterated>Nu Joka Siti</Transliterated>
                                    </TM>
                                </Ex>
                                <Ex>
                                    <TM>
                                        naka <Transliterated>Nu Joka Siti</Transliterated>
                                    </TM>
                                </Ex>
                            </Examples>
                            <P>
                                Which way you choose to phrase a name or foreign word might depend on who you're talking
                                to and how likely it is that they recognize the word you are saying. Including a prefix
                                word is often seen as more formal, but it's not at all uncommon in informal speech
                                either.
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
                                Use <TM>peko</TM> to show <B>humility</B> and <B>politeness</B>. It is used for phrases
                                like <Loc>"please"</Loc>, <Loc>"excuse me"</Loc>, <Loc>"you're welcome"</Loc>,{' '}
                                <Loc>"hello"</Loc>, <Loc>"thank you"</Loc>, and many other polite phrases.
                            </P>
                            <P>
                                Use <TM>a</TM> to show <B>emphasis</B> or <B>emotion</B> in your sentences. It usually
                                goes at the beginning or end of the sentence, acting as something of an exclamation
                                point. It can be used for both positive and negative emotion. It can also be repeated (
                                <TM>a a a</TM>) to show laughter (<Loc>"ha ha"</Loc>).
                            </P>
                            <P>
                                Both are used in both formal and informal speech. In informal speech, <TM>peko</TM> is
                                often seen as friendliness rather than strictly politeness.
                            </P>
                        </Section>
                        <Section>
                            <Title id="notes">Notes</Title>
                            <P>
                                Many words and/or common constructions have some specifics in their use or meaning that
                                may not be obvious in the definition. This chart contains notes about specific
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
                                            <Loc>he/she/it/they</Loc>
                                        </td>
                                        <td>
                                            This third person pronoun is generally only used to refer to{' '}
                                            <B>animate objects</B>. You wouldn't often use it to refer to a previous
                                            subject as "it" like you would in English. For that you'd probably use{' '}
                                            <TM>ni</TM> and <TM>na</TM> for <Loc>this</Loc> and <Loc>that</Loc>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TM>[li] pali</TM>
                                            <br />
                                            <Loc>to make, to do, to work</Loc>
                                        </td>
                                        <td>
                                            In this definition, <Loc>"to make"</Loc> always means <Loc>"to create"</Loc>
                                            , <B>never</B> <Loc>"to cause"</Loc>. English uses the word for both
                                            meanings, but for causation in toki ma you can only use <TM>wa</TM>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TM>[li] siten</TM>
                                            <br />
                                            <Loc>to sit-on</Loc>
                                        </td>
                                        <td>
                                            In English, the verb <Loc>"to sit"</Loc> on its own just means the action of
                                            sitting. In order to sit <B>on</B> a seat you need the preposition{' '}
                                            <Loc>"on"</Loc>.
                                            <br />
                                            In toki ma, the idea of <Loc>"on"</Loc> is already built into the verb{' '}
                                            <TM>[li] siten</TM>, meaning <B>it is transitive</B> by default. You would
                                            say <TM>mi li siten e siten</TM>: <Loc>"I sit-on a seat"</Loc>, using{' '}
                                            <TM>e</TM> rather than <TM>an</TM>.
                                            <br />
                                            When using <TM>[li] siten</TM> without a direct object, it is{' '}
                                            <B>implicitly transitive</B>. It is implied that you mean{' '}
                                            <Loc>"to sit on [something]</Loc>, you just don't have to state the
                                            something.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Loc>any</Loc>
                                        </td>
                                        <td>
                                            There is no specific word for <Loc>"any"</Loc> in toki ma, so instead the
                                            words <TM>wan (pi)</TM> and <TM>osa pi</TM> are used to approximate it in
                                            different cases.
                                            <br />
                                            <Examples>
                                                <Ex>
                                                    <TM>osa pi kulupu si / osa pi mute si</TM>
                                                    <Answer noblur>
                                                        <Loc>"any of you"</Loc>, literally{' '}
                                                        <Loc>"part of the collective of you"</Loc>, implying{' '}
                                                        <B>any number</B> of nonspecific people
                                                    </Answer>
                                                </Ex>
                                                <Ex>
                                                    <TM>wan si / wan pi kulupu si / wan pi mute si</TM>
                                                    <Answer noblur>
                                                        <Loc>
                                                            "any <B>one</B> of you"
                                                        </Loc>
                                                        , implying <B>only one</B> nonspecific person
                                                    </Answer>
                                                </Ex>
                                            </Examples>
                                            <Examples>
                                                <Ex>
                                                    <TM>si li wile e seme pi kule</TM>
                                                    <Answer>
                                                        <Loc>"Which color do you want?"</Loc>
                                                    </Answer>
                                                </Ex>
                                                <Ex>
                                                    <TM>mi li wile e wan kule</TM>
                                                    <Answer>
                                                        <Loc>
                                                            "I want any <B>color</B>"
                                                        </Loc>
                                                        , asking for specifically one
                                                    </Answer>
                                                </Ex>
                                                <Ex>
                                                    <TM>mi li wile e osa pi mute kule</TM>
                                                    <Answer>
                                                        <Loc>
                                                            "I want any <B>colors</B>"
                                                        </Loc>
                                                        , asking for any number of colors
                                                    </Answer>
                                                </Ex>
                                            </Examples>
                                            Because <TM>kule</TM> can be either singular or plural, both of these
                                            answers are equally valid. Context would, of course, tell you more.
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
                    </ContentsContext.Provider>
                </div>
            </BlurContext.Provider>
        </UnofficialContext.Provider>
    );
};

export default English;
