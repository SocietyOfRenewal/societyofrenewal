## Navigation

- [Founding Book Home](README.md) - Overview and navigation
- [Part A: The Covenant of Renewal](Part%20A.md) - Moral commitments and the Dignity Constraint
- [Founding Book Outline](outline.md) - Development status and structure
- [Charter of Renewal](../charter/README.md) - Draft constitutional framework
- [Essentia whitepaper](https://github.com/SocietyOfRenewal/essentia/blob/main/docs/whitepaper.md) - Current protocol research architecture

---

# Part B - The Science of Renewal

## Evidence, mechanisms, and the conditions under which the system could work

This is not the chapter where we prove that the Society of Renewal works.

It is the chapter that defines what such a proof would require.

A moral commitment can be clear before its implementation is known. We can decide that no one should be humiliated for needing food without knowing the best way to finance food. We can decide that public power should be accountable without knowing which voting rule should govern every decision. We can decide that privacy matters without pretending a decentralized identifier solves personhood, recovery, exclusion, coercion, and fraud.

Science does not provide a blueprint for a civilization. It provides evidence about mechanisms, uncertainty about context, and methods for finding out when we are wrong.

Part B therefore does four things:

1. separates moral commitments from empirical claims;
2. summarizes the strongest relevant evidence without hiding its limits;
3. derives design constraints for the Society and Essentia;
4. defines tests that must be passed before a promise becomes a public dependency.

The central claim of the Society is a hypothesis:

> Care, knowledge, material security, and accountable coordination can reduce avoidable suffering more reliably than fear, abandonment, and domination.

Some parts of that hypothesis already have substantial evidence. Some are plausible but context-dependent. Some are new design conjectures. A few remain open problems.

That difference matters. A civilization that cannot distinguish a value from a finding, or a finding from a hope, will eventually turn confidence into policy and policy into harm.

## B.1 - An epistemic constitution

Before deciding what to build, the Society needs rules for deciding what it knows.

### Six claim types

Every consequential claim should be labeled internally as one of the following:

1. **Moral premise.** A value the Society chooses to protect, such as inherent dignity. Evidence may clarify conflicts between values, but it does not create the value.
2. **Established finding.** A result supported across methods, populations, and independent research, with remaining uncertainty that does not reverse the basic conclusion.
3. **Context-dependent evidence.** A result supported in some settings, with meaningful uncertainty about transfer to another population, scale, institution, or time.
4. **Working hypothesis.** A causal explanation supported enough to test but not enough to govern people at scale.
5. **Design conjecture.** A proposed mechanism that may satisfy known constraints but has not been demonstrated in the intended system.
6. **Unknown.** A question for which the evidence is too weak, contradictory, or absent.

The Society should not use softer language to hide a hard distinction. "Evidence-informed" can mean almost anything. A claim is either supported strongly enough for the decision being made, or it is not.

### Evidence must match the consequence

The burden of proof should rise with the damage a mistake could cause.

A reversible interface experiment can rely on modest evidence. An identity system that can exclude a person from income requires far more. A public-health intervention used for two weeks under review is different from a permanent surveillance authority. A simulated currency is different from an instrument people rely on for rent.

The Society should judge evidence along at least these dimensions:

- internal validity: did the study identify the effect it claims?
- external validity: does the population and setting resemble the proposed use?
- duration: were effects measured long enough to matter?
- scale: did the intervention remain effective when many people received it?
- mechanism: is there evidence for why it worked, or only that it correlated with an outcome?
- distribution: who benefited, who was harmed, and who disappeared inside the average?
- implementation: did the result depend on unusually skilled staff, generous funding, or conditions that cannot be reproduced?
- adversarial pressure: what happens when people profit from gaming the system?
- reversibility: can the Society stop or repair the intervention if the inference is wrong?

### Replication is not a ceremony

Reproducibility means another person can obtain the same result from the same data and analysis. Replicability means new data can support a consistent conclusion. Neither is guaranteed by peer review.

The US National Academies recommends transparent methods, data, code, and uncertainty, and warns against treating a threshold such as `p < 0.05` as a substitute for scientific judgment ([National Academies, 2019](https://doi.org/10.17226/25303)). The Society should turn that into operating practice:

- publish analysis plans before high-stakes pilots when possible;
- distinguish confirmatory tests from exploratory analysis;
- preserve code, schemas, model versions, and decision rules;
- report null results and adverse outcomes;
- publish deviations from the plan;
- fund independent replication rather than asking the original team to grade itself;
- include qualitative testimony when a quantitative measure cannot describe the harm;
- never let one dashboard become the definition of success.

### The evidence ledger

Essentia may eventually preserve an append-only record of proposals, evidence, decisions, and revisions. That record should not be confused with truth.

A hash can prove that a document has not changed. It cannot prove that the document is honest. A signature can prove who approved a claim. It cannot prove that the claim describes reality. A model can produce a calibrated probability. It cannot decide what risk another person should be forced to bear.

The useful record is therefore a chain of responsibility:

- the claim;
- the evidence available at the time;
- the uncertainty and dissent;
- the decision;
- the people and institutions exercising authority;
- the predicted outcomes;
- the observed outcomes;
- the correction, if any.

The ledger's purpose is not to make decisions immutable. It is to make revision accountable.

### Stop conditions

Every pilot that can materially harm people needs predeclared stop conditions. Examples include:

- exclusion or false-rejection rates above a published threshold;
- benefits failing to purchase the promised basket;
- reserve or settlement coverage below minimum;
- coercive incidents rising rather than falling;
- privacy breaches that expose protected data;
- appeals taking longer than the deprivation they are meant to correct;
- benefits concentrating among participants already easiest to serve;
- ecological use exceeding a regional boundary;
- fraud losses or governance capture beyond the system's ability to repair.

A stop is not failure of the Society. Refusing to stop is.



## B.2 - Scarcity, security, and usable agency

The case for material security must not depend on one clean neurological claim: that survival pressure creates tunnel vision and removing pressure automatically restores higher-order cognition.

The evidence supports a weaker and more useful claim.

Financial scarcity is associated with worse cognitive performance on average, but the size of the relationship depends heavily on education, severity, timing, study design, and context. A 2024 meta-analysis combined 256 effect sizes from 29 datasets and 111,852 participants. It found a moderate total association, but the estimated effect fell from Hedges' `g = -0.43` to `g = -0.15` after accounting for education ([de Almeida et al., 2024](https://doi.org/10.1016/j.joep.2024.102702)).

This does not mean poverty barely matters. It means the mechanism is not "low income directly removes intelligence." Poverty arrives with unequal schooling, unstable housing, dangerous environments, poor sleep, administrative burden, illness, discrimination, and repeated shocks. These pathways overlap and reinforce one another. A good system reduces the actual burdens rather than building policy around a simplified story about damaged cognition.

### What cash transfers show

Cash is unusually respectful because it lets recipients decide what is urgent. It also exposes simplistic theories about dependency.

A Bayesian meta-analysis of 115 randomized studies covering 72 unconditional cash-transfer programs in low- and middle-income countries found positive average effects on ten of thirteen outcomes, including consumption, income, labor supply, school enrollment, food security, psychological well-being, and assets ([Crosta et al., 2024, revised 2026](https://doi.org/10.3386/w32779)). The effects varied by program and context, and the evidence does not imply that any transfer amount, financing method, or national implementation will work the same way.

The scale question matters. A household-level study can show what recipients do when resources arrive. It cannot by itself show what happens to prices, wages, rents, production, taxes, exchange rates, and political support when everyone receives the transfer.

One unusually large experiment in rural Kenya gave roughly USD 1,000 once to more than 10,500 poor households across 653 randomized villages. The transfer shock exceeded 15 percent of local GDP. The researchers found strong gains for recipients, positive spillovers to non-recipients and firms, average local price inflation of about 0.1 percent, and a local transfer multiplier around 2.5 ([Egger et al., 2022](https://doi.org/10.3982/ECTA17945)).

That result is important, but the context is just as important:

- the money entered from outside the study area rather than being raised from the same population;
- the study region was part of a larger currency area;
- local businesses appeared to have spare capacity;
- the transfers were temporary rather than a permanent national entitlement;
- the economy could import some goods from outside the immediate area.

The result shows that a large transfer does not mechanically become equivalent inflation. It does not show that real resources can be ignored.

A recent US guaranteed-income experiment provides another useful warning against overselling. Recipients received USD 1,000 per month for three years. The [employment study](https://doi.org/10.3386/w32719) found a moderate reduction in labor-force participation and a decline of roughly 1 to 2 work hours per week; recipients used some of the added freedom for leisure and other activities. The companion [health study](https://doi.org/10.3386/w32711) found short-lived improvements in stress and food security and increased healthcare use, but little evidence of broad physical-health improvement over the full three years. Cash changed choices. It did not cure every condition produced by a lifetime of inequality.

### The design conclusion

Material security should be treated as infrastructure for agency, but not because every recipient becomes calmer, healthier, more cooperative, or more productive on schedule.

It should be treated as infrastructure because:

- the ability to refuse exploitation requires a viable alternative;
- crises are easier to address before hunger, eviction, untreated illness, and isolation compound them;
- unconditional support reduces the administrative burden and humiliation of proving deservingness;
- people generally know needs that a distant program cannot observe;
- direct support can stimulate production where usable capacity exists;
- the Dignity Constraint does not require a person to become economically efficient before being allowed to live.

### What the Freedom Floor must include

A cash amount alone is not a Freedom Floor. Its real value depends on whether essential goods and services exist, whether suppliers can expand, whether landlords can capture the transfer, whether healthcare is available, and whether prices remain within reach.

The floor therefore has two distinct parts:

1. **Purchasing power.** People need resources they can direct according to their own priorities.
2. **Provisioning capacity.** Food, housing, healthcare, energy, communication, transportation, and care must actually exist in adequate quantity and quality.

A Society node that distributes money without measuring housing availability may simply transfer more income to landlords. One that promises healthcare without clinicians has issued a claim on an empty room.

The Society should track both monetary and physical indicators:

- the cost of the agreed essential basket;
- the share of households able to obtain every category;
- housing vacancy and construction capacity;
- wait times for care;
- food availability and stock resilience;
- energy and water reliability;
- supplier concentration;
- import dependence;
- the proportion of support recaptured through local price increases;
- recipient-defined unmet needs;
- exclusion, appeal, and delivery failure.

### Universal rights, staged capacity

The moral commitment can be universal before the infrastructure is global. The operational promise cannot.

A node may declare that every person has equal claim to dignity while admitting that its current resources can support only a bounded pilot. The honest response is to expand capacity, not to issue a token and call the promise fulfilled.

This distinction is severe but necessary:

> An entitlement is real only to the extent that the system can honor it under the conditions in which people will need it.

The Society should never solve limited capacity by pretending that a ledger balance is the same thing as food.



## B.3 - Learning, prevention, restoration, and force

The claim that education replaces enforcement is too broad to be scientific and too absolute to be safe.

Education can prevent specific harms. Treatment can reduce specific risks. Restorative processes can improve outcomes in specific cases. None eliminates the need to stop an immediate threat, protect a victim who wants no contact, or restrict a person who continues to create serious danger.

The correct principle is not "education instead of safety."

It is:

> Build the conditions and skills that prevent harm; use restoration where it is voluntary and appropriate; use the least restrictive effective intervention when protection still requires force.

### What education can do

A contemporary meta-analysis of universal school-based social and emotional learning included 424 studies, 252 interventions, 53 countries, and 575,361 students. On average, participants improved in social and emotional skills, attitudes, behavior, school climate and safety, peer relationships, school functioning, and academic achievement. The effects varied substantially with program content, context, and implementation quality ([Cipriano et al., 2023](https://doi.org/10.1111/cdev.13968)).

That supports sustained investment in emotional regulation, relationship skills, critical thinking, and conflict navigation. It does not justify one mandatory curriculum, and it does not show that a course delivered badly will prevent violence.

Education works through conditions:

- the learner can attend and participate;
- the content fits language, development, disability, and culture;
- instructors are competent;
- the surrounding institution does not punish the behavior it claims to teach;
- skills are practiced repeatedly;
- people have enough safety to use them;
- outcomes are measured beyond course completion.

A Prevention Coverage Index must not treat training completion as the outcome. Completion is an input. The outcomes are whether people can use the skills, whether conflicts de-escalate, whether help arrives earlier, and whether serious harm falls without being hidden.

### What restoration can do

Restorative justice is not one intervention. It includes conferences, victim-offender mediation, community processes, restitution, facilitated accountability, and other practices. Results should not be pooled into a moral slogan.

A [Campbell systematic review of ten randomized restorative-justice conferencing experiments](https://doi.org/10.4073/csr.2013.12) found lower repeat offending on average and better victim-reported outcomes in the studied cases. The underlying trials involved voluntary, face-to-face processes and specific eligible offenses. The evidence does not support forcing victims into contact, using restoration for every case, or treating a completed conference as proof that risk has ended.

A restorative process is legitimate only when:

- the harmed person has real choice and independent support;
- immediate safety is established first;
- facts are investigated rather than negotiated away;
- the person who caused harm accepts meaningful responsibility;
- the agreement is specific enough to verify;
- material repair is funded where possible;
- refusal or failure does not leave the harmed person unprotected;
- repeated patterns remain visible to the people responsible for safety;
- confidentiality does not become institutional secrecy.

Restoration should expand the available responses. It should not become a new ideology that makes victims prove their compassion.

### What punishment does and does not do

The evidence on deterrence does not support the simple intuition that harsher punishment always produces more safety. The [US National Academies' review of incarceration](https://doi.org/10.17226/18613) distinguished the certainty of a response from its severity and found diminishing deterrent returns from sentence-length increases. Long sentences can incapacitate while a person is confined, but they also generate family and community harms and often do little to address the conditions that produced the behavior.

A [Campbell review of focused deterrence](https://doi.org/10.1002/cl2.1051) found moderate reductions in some violent and group-related crime settings, but the evidence base is largely quasi-experimental rather than randomized, and implementation quality matters. These programs combine a clear response to specific high-risk behavior with services, communication, and concentrated attention. Their strongest lesson is not that threats work. It is that vague, indiscriminate punishment is different from a credible, bounded response tied to a real path out.

The Society should preserve that distinction:

- **vengeance** seeks suffering because suffering is deserved;
- **deterrence** seeks to change behavior through expected consequences;
- **incapacitation** temporarily prevents a person from acting in the community;
- **rehabilitation** changes capacity or conditions;
- **restoration** repairs harm and relationships where possible;
- **prevention** changes conditions before the event;
- **boundary enforcement** protects others without requiring hatred.

A single response can contain several of these. Calling a facility "restorative" does not change what it does.

### A safety system that does not lie to itself

The Society's safety architecture should begin with four operational questions:

1. What is happening now?
2. Who is in immediate danger?
3. What is the least intrusive action that can reliably stop the danger?
4. What must happen afterward to reduce recurrence and repair harm?

The answer may be conversation, medical care, housing, transportation, temporary distance, confiscation of a dangerous tool, an enforceable no-contact boundary, supervised treatment, or physical restraint. A humane system does not deny the last category. It constrains it.

Minimum necessary force is not the same thing as minimum imaginable force. The intervention must be effective. A gentler action that predictably fails to stop lethal harm is not more humane.

Any coercive intervention should have:

- a defined legal and constitutional basis;
- trained human authorization for consequential force;
- continuous medical and safety monitoring;
- the shortest practical duration;
- automatic review;
- an advocate for the person subjected to it;
- independent investigation of injury or death;
- a public, privacy-preserving record of aggregate use;
- a remedy when the intervention was unnecessary or excessive;
- no conversion of an emergency exception into routine authority.

### Machine assistance

Machine systems may help route calls, translate, retrieve plans, detect patterns, or warn that a combination of signals warrants human attention. They should not decide that a person is dangerous based on a hidden score.

Predictive systems create several risks:

- historical enforcement data can reproduce historical bias;
- false positives concentrate on groups with more recorded contact;
- people change after a prediction is made;
- an alert can become its own justification;
- operators may defer to a model they do not understand;
- public disclosure can stigmatize a person who has done nothing.

The safe default is event-centered assistance rather than person-centered suspicion. Detect smoke, a gunshot, a medical emergency, a breached boundary, or an escalating interaction. Do not build a permanent civic risk score.

### The test

A Society safety pilot should be judged against an existing local baseline, not against perfection. It should measure:

- injuries and deaths;
- repeat serious harm;
- response times;
- voluntary resolution;
- use and duration of restraint;
- victim safety and satisfaction;
- participant trust;
- false alerts and missed events;
- demographic disparities;
- access to medical and mental-health care;
- housing or material support delivered;
- appeal outcomes;
- staff injury and burnout;
- total cost, including costs shifted to families or hospitals.

The hypothesis survives only if serious harm falls without coercion, hidden confinement, retaliation, or abandonment rising somewhere else.



## B.4 - Trust is not the absence of verification

The word trust is often used as though it means optimism. In a working institution, trust is a prediction: I expect another person or system to keep a commitment even when I cannot monitor every step.

That prediction can come from several places:

- repeated experience;
- shared norms;
- reputation within a real relationship;
- enforceable contracts;
- transparent rules;
- the ability to leave;
- credible consequences for betrayal;
- insurance or reserves that limit damage;
- independent verification;
- and confidence that a failure will be repaired.

Cryptography can strengthen some of these. It can prove that a message came from a key, that a record changed, that two values are consistent, or that a computation followed a rule. It cannot establish goodwill, competence, material capacity, identity uniqueness, or the truth of an external claim.

The aim is not a trustless society. That phrase is mostly nonsense. The aim is to place trust where it can be observed, bounded, distributed, and withdrawn.

### Cooperation is conditional

People cooperate for many reasons: care, identity, reciprocity, habit, fairness, future interaction, fear of exclusion, and the expectation that others will also contribute. Different institutions activate different motives.

A trust-based economy should not assume that everyone is generous. It should make honest cooperation easier than extraction, detect concentrated abuse before it becomes systemic, and avoid punishing everyone for the possibility that someone will cheat.

That leads to several design rules:

1. Keep obligations legible.
2. Begin with limits small enough that failure is survivable.
3. Increase credit after demonstrated performance rather than social prestige.
4. Separate the right to exist from the privilege to create risk for others.
5. Use mutual guarantees carefully and cap how much one person's default can spread.
6. Make conflicts of interest visible.
7. Preserve appeal and contextual judgment.
8. Do not turn a record of reliability into a permanent caste.

### Polycentric trust

Elinor Ostrom's work on governing shared resources challenged the claim that communities must choose between privatization and centralized command. Durable arrangements often use multiple centers of decision, local knowledge, clear boundaries, monitoring accountable to participants, graduated responses, low-cost conflict resolution, and the recognized ability to organize ([Ostrom, 2010](https://doi.org/10.1257/aer.100.3.641)).

The lesson is not that every community governs itself well. It is that a single global mechanism is unlikely to understand every local resource, price, relationship, and risk.

The Society should therefore federate:

- local nodes measure needs and provision;
- regional institutions pool risk and settle imbalances;
- global institutions maintain interoperability, rights, standards, and emergency support;
- no layer receives authority merely because it is technically central;
- decisions remain as local as their consequences allow;
- higher layers intervene when harms cross boundaries or local power blocks correction.

### Trust and exit

Trust without exit can become captivity. A member should be able to:

- export credentials and records they are entitled to hold;
- leave a wallet provider or local node without losing personhood;
- appeal a decision outside the institution that made it;
- use conventional money and public services;
- keep social contexts separate;
- refuse optional data collection;
- continue receiving an essential entitlement during a provider dispute.

A trust-based network earns adoption by making participation safer than dependence on it.

## B.5 - Governance that knows what it cannot solve

There is no voting rule that converts every set of preferences into an unambiguously fair collective choice.

Gibbard's theorem shows that, with at least three alternatives and broad preference domains, every non-dictatorial deterministic voting rule is vulnerable to strategic manipulation ([Gibbard, 1973](https://doi.org/10.2307/1914083)). Arrow's theorem reaches a related impossibility from different fairness conditions. These are not arguments against democracy. They are arguments against claiming that one tally method eliminates politics.

Ranked-choice voting can reduce some plurality pathologies and let people express more than one preference. It can also produce ballot exhaustion, strategic incentives, and results that depend on the specific ranked method. Liquid delegation can let an interested person pass a vote to someone they trust. Experiments also show that delegated votes can amplify misplaced confidence and perform worse than direct majority rule under some conditions.

Quadratic voting can express intensity, but it requires a scarce budget of voting credits and creates difficult questions about wealth, collusion, identity, and whether preference intensity should outweigh political equality.

The Society should not constitutionalize a brand name for voting before it knows the decision.

### Match the mechanism to the decision

Different decisions require different combinations of competence, equality, speed, privacy, and reversibility.

| Decision | Primary mechanism | Necessary safeguards |
| --- | --- | --- |
| Constitutional rights | high threshold plus deliberation and judicial-style review | rights floor, long notice, minority challenge, independent review |
| Ordinary policy | representative or direct vote after public deliberation | plain-language options, fiscal note, sunset, outcome review |
| Technical implementation | accountable expert team within a public mandate | open specification, conflict disclosure, independent audit, rollback |
| Local commons | participant governance at the smallest capable scale | transparent boundaries, monitoring, conflict resolution, federation appeal |
| Emergency action | narrow delegated authority | strict scope, expiry, public record, after-action review |
| Budget priorities | participatory budgeting or constrained preference aggregation | published tradeoffs, distribution analysis, no pay-to-vote |
| Personnel selection | appointment, election, or sortition depending role | term limits, recall, conflict rules, performance review |
| Scientific finding | evidence process, not a popular vote | methods, replication, uncertainty, expert and affected-party review |

No one gets to vote a false measurement into truth. Experts do not get to convert expertise into permanent rule.

### Deliberation before aggregation

A ballot records a preference at a moment. It does not necessarily show what people would choose after hearing affected communities, understanding costs, or seeing an alternative they had not considered.

The [OECD has documented hundreds of representative deliberative processes](https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en.html) across many jurisdictions. The strongest designs give a broadly representative group time, balanced evidence, facilitation, access to competing expertise, and a real connection between recommendations and public authority. Deliberation can improve understanding and legitimacy, but it becomes theater when officials are free to ignore it without explanation.

The Society should require a response covenant:

- every formal public recommendation receives an answer;
- accepted recommendations name the implementing authority and date;
- rejected recommendations receive reasons and evidence;
- delayed recommendations receive a new decision date;
- outcomes are reviewed against what was promised.

### Political voice is not a survey

Trust in institutions is strongly associated with whether people believe they have a meaningful voice and whether institutions are responsive. Asking for comments while decisions remain unchanged does not provide that voice.

Participation requires three things:

1. competence: people can understand the decision well enough to act;
2. authority: the process has a defined effect;
3. influence: participation can actually change the result.

Remove any one and the process becomes symbolic.

### Institutional dissent

The Society should preserve organized dissent rather than merely tolerate it.

- minority reports should travel with majority decisions;
- whistleblowers need protected channels outside their hierarchy;
- auditors must be funded independently of the program they review;
- alternative implementations should be allowed when interoperability and rights permit;
- local nodes should be able to refuse an unsafe upgrade;
- constitutional challenges should pause irreversible action when the risk is serious;
- public records should preserve the argument that lost.

A system that records only its victories cannot learn why it failed.



## B.6 - Identity, personhood, privacy, and recovery

Identity is not one problem.

The Society needs to know different things in different contexts:

- Is this request authorized by the same account as before?
- Is this person eligible for a particular service?
- Has this person already voted or received a universal allocation?
- Does this professional hold a valid credential?
- Is this claim connected to another claim through an undisclosed conflict?
- Can a person recover access after losing a device?
- Can a person prove something without making every use linkable?

A single permanent identifier is the easiest technical answer and often the worst social answer.

### Authentication is not personhood

A cryptographic key proves control of a key. It does not prove that the controller is one human, still alive, eligible, acting voluntarily, or limited to one credential.

A [Decentralized Identifier](https://www.w3.org/TR/did-core/), as standardized by the W3C, is a useful identifier and key-resolution format. It does not solve uniqueness. A Verifiable Credential can show that an issuer signed a claim, but the W3C explicitly distinguishes cryptographic verifiability from the truth of the underlying claim. Selective disclosure can reveal less data, but repeated presentations may still permit correlation depending on the cryptosuite and metadata ([W3C Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/)).

A decentralized identifier does not prove personhood. The system must not use "DID" as a synonym for "personhood."

### Proof of personhood remains an open problem

Every known approach creates a different concentration of risk.

- Government documents inherit state exclusions, false records, surveillance, and geographic inequality.
- Biometrics can resist duplicate enrollment but create permanent, breach-sensitive identifiers and accessibility problems.
- Social graphs can include people without documents but favor connected participants and can be captured by organized Sybil groups, a risk illustrated by [empirical analysis of Idena](https://stanford-jblp.pubpub.org/pub/compressed-to-0-proof-personhood/release/5).
- In-person ceremonies can prove liveness within a bounded event but create geographic, disability, scheduling, and coercion barriers.
- Device-bound credentials prove possession of devices, not unique persons.
- Economic deposits deter cheap attacks but make political rights wealth-dependent.
- Machine-learning anomaly detection can identify patterns but can also turn opacity into exclusion.

A resilient system uses several weak signals rather than pretending one is perfect.

### Risk-based eligibility

NIST's current digital identity guidance uses risk management rather than one assurance level for every service ([NIST SP 800-63-4, 2025](https://doi.org/10.6028/NIST.SP.800-63-4)). The Society should apply the same idea more broadly.

Different actions need different assurance:

| Action | Default assurance |
| --- | --- |
| Read public knowledge | none |
| Participate in public discussion | pseudonymous account with abuse controls |
| Receive local mutual aid | human review appropriate to the service |
| Cast a nonbinding signal | low-cost uniqueness controls |
| Cast a binding constitutional vote | high-assurance current eligibility and one-vote nullifier |
| Receive a universal recurring entitlement | high-assurance uniqueness plus ongoing liveness and appeal |
| Operate critical infrastructure | strong identity, role credential, hardware-backed key, oversight |
| Access another person's protected data | explicit authorization, purpose limitation, complete audit |

The system should request only the proof needed for the action.

### A layered personhood credential

A practical first design could combine:

1. an initial enrollment interview or trusted institutional credential;
2. optional document or biometric checks performed by separate providers;
3. community attestations with capped influence and disclosed relationships;
4. duplicate detection across privacy-preserving commitments;
5. periodic liveness or continued-eligibility checks;
6. random audits;
7. a protected challenge process;
8. a human appeal path with authority to correct the record;
9. multiple enrollment routes for people excluded by the default route.

No single signal should silently determine personhood. No raw biometric, identity document, home address, or recovery secret should enter a public ledger.

### Pairwise and purpose-bound credentials

The default should be one credential per relationship, not one identifier for the whole person.

A member might use:

- one pairwise identifier with a healthcare provider;
- another with a local node;
- an unlinkable voting nullifier for an election;
- a public authorship key for a published proposal;
- a professional credential that reveals qualification but not unrelated identity data.

Linkage should require consent or a narrowly authorized investigation with review.

### Recovery is part of identity

A system that grants self-sovereignty only to people who never lose a phone has confused possession with freedom.

Recovery should support several paths:

- hardware-backed passkeys;
- encrypted recovery kits;
- guardian quorums chosen by the person;
- institutional recovery with a delay and notice;
- assisted custody for people who need it;
- emergency freezing of suspicious transfers without freezing speech, personhood, or essential access;
- rotation away from a compromised key;
- a way to replace guardians;
- an independent appeal when a guardian or provider refuses.

Recovery power can steal an identity, so it must be split, time-bounded, visible to the person, and limited to the minimum action.

### Revocation without erasure

Some credentials must expire or be revoked. A clinician can lose a license. A compromised device can lose authority. A duplicate entitlement credential can be suspended during review.

The person does not become revoked.

The system should distinguish:

- personhood;
- membership;
- role;
- device;
- session;
- eligibility for a particular benefit;
- authority to access a particular dataset.

Revoking one must not silently cascade into the others.

### The identity test

Before a Society identity pilot governs money or votes, it must demonstrate:

- duplicate resistance under organized attack;
- low false rejection across disability, age, income, language, nationality, and housing status;
- recovery without a central operator able to seize accounts alone;
- pairwise or unlinkable presentations;
- no public personal data;
- understandable consent;
- independent red-team review;
- timely appeals;
- continuity of essential access during disputes;
- export and exit.

The target is not perfect identity. It is an error process that does not turn uncertainty into disappearance.



## B.7 - Money, value, and the limits of code

Software can create a token in seconds. It cannot create the reason anyone should accept it.

That does not mean digital money must be backed one-for-one by an existing currency. It means every monetary claim needs a credible answer to a practical question:

> What can I reliably do with this tomorrow?

### Money is a transferable claim

Modern money is not valuable because the paper, database row, or cryptographic object is intrinsically useful. It is valuable because people and institutions accept it in payment, because obligations are denominated in it, because issuers and settlement institutions stand behind it, and because holders expect the system to continue.

The Bank of England describes most money as liabilities - banknotes are central-bank liabilities and deposits are commercial-bank liabilities. Commercial banks create deposits when they lend, subject to regulation, capital, liquidity, demand, monetary policy, and the need to settle with other banks ([McLeay, Radia, and Thomas, 2014](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy)).

This matters for Essentia. Creating money is not inherently fraud. Banks create money through balance-sheet expansion. Mutual-credit systems create purchasing power by allowing participants to hold positive and negative positions. States create demand for currency through taxes and public obligations. Communities can create media of exchange through repeated acceptance.

The question is not whether money was "made from nothing." The question is what liability was created, who owes it, what constrains issuance, what settles it, and who absorbs the loss if the promise fails.

### Agreement can create value

Bitcoin began as software and a rule set. Its protocol did not contain a dollar price. A market price emerged because people chose to run the network, acquire the asset, accept it, speculate on it, and treat its scarcity and transfer properties as useful.

That is not imaginary in the dismissive sense. Expectations are part of real economic coordination. An asset accepted by many people can command labor, energy, equipment, and goods because those people expect it to remain exchangeable.

Experimental evidence shows the same mechanism in miniature. Camera, Casari, and Bigoni introduced intrinsically worthless tokens into groups of strangers. Participants began accepting the tokens for help, and the monetary convention supported cooperation that had broken down without the tokens ([Camera, Casari, and Bigoni, 2013](https://doi.org/10.1073/pnas.1301888110)). Later experiments found that monetary exchange helped participants coordinate larger-scale interaction ([Bigoni, Camera, and Casari, 2020](https://doi.org/10.1016/j.jmoneco.2019.01.002)).

This supports the central intuition: software and shared acceptance can create purchasing power.

It does not support the stronger claim that software can assign any purchasing power it chooses.

The experiment supplied a closed environment, fixed rules, participants who could produce for one another, and a reason to expect future acceptance. Bitcoin supplied scarcity, censorship resistance, global transfer, a community, market liquidity, and eventually a vast speculative demand. Thousands of other tokens supplied similar code and acquired little or no durable value.

Agreement is necessary for money. It is not sufficient. The agreement must coordinate around something people continue to want.

### Network effects are real and unstable

Token value can reinforce adoption. A model by Cong, Li, and Wang shows how transactional demand, platform adoption, network effects, and token price can create feedback: more users make the network more useful, which can attract more users and raise value ([Cong, Li, and Wang, 2020](https://doi.org/10.3386/w27222)).

The loop runs in both directions.

If participants expect acceptance to shrink, they spend or sell the token. Falling price weakens incentives to hold or provide liquidity. Vendors raise token prices or leave. The token becomes less useful, validating the expectation.

A currency for daily life should not depend on the same scarcity and speculative volatility that can make an asset attractive to investors. Hoarding is useful to a speculative asset and destructive to a medium of exchange. In laboratory economies, adding small positive returns to tokens sometimes encouraged hoarding and impaired monetary circulation ([Camera, 2024](https://doi.org/10.1111/jmcb.13015)).

Essentia should not try to manufacture trust through a fixed supply and hope price appreciation finances society.

### Mutual credit

Mutual credit creates a medium of exchange by recording both sides of a transaction.

If A buys 100 ℰ of work from B, A may move to `-100 ℰ` and B to `+100 ℰ`. No one needed to deposit 100 units first. The system created a matched asset and liability. When A later sells 100 ℰ of goods, A's balance returns to zero.

This can mobilize idle capacity when participants want to trade but lack conventional money. It does not create food, time, or skill. It helps existing capacity find reciprocal demand.

Research on obligation clearing shows how a network can reduce gross payment requirements by finding cycles and offsets among invoices. One simulation using real e-invoice data found roughly 25 percent liquidity savings from obligation clearing alone and close to 50 percent when mutual credit was added under broad participation assumptions ([Fleischman, Dini, and Littera, 2020](https://doi.org/10.3390/jrfm13120295)).

Complementary systems such as [Sardex](https://doi.org/10.1425/84070) and the [Swiss WIR](https://doi.org/10.1016/j.jebo.2009.06.002) demonstrate that businesses can sustain parallel credit arrangements under particular institutional conditions. A [2025 firm-level study](https://doi.org/10.1016/j.jebo.2024.106861) found that mutual-credit participation was most beneficial during turbulence and could impose costs or weaker benefits during stable periods. These systems do not prove that a global universal currency will emerge. They show that reciprocal acceptance, trusted governance, bounded credit, and dense trade loops can create usable liquidity.

### The balance-sheet test

Every form of ℰ should answer:

- Who may issue it?
- What asset, service, obligation, or future revenue stands against it?
- Who may hold a negative balance?
- How large may that balance become?
- What happens at default?
- How is loss distributed?
- What creates recurring demand?
- What removes or retires units?
- What happens when participants want outside currency at the same time?
- What information is public?
- What privacy remains?
- Who can change the rules?

A token with no issuer may still have market value as an asset. A public entitlement cannot rely on that possibility.

### Stablecoin lessons

A stablecoin promises a fixed exchange relationship to another unit. The promise is only as strong as its assets, liquidity, legal rights, redemption operations, and market makers.

BIS research emphasizes that par settlement is a liquidity problem even when an issuer appears solvent. If many holders redeem at once, assets must be immediately convertible without destructive losses ([Aldasoro, Mehrling, and Neilson, 2023](https://www.bis.org/publ/work1146.htm)). The BIS and Bank of England built Project Pyxtrial specifically to monitor whether stablecoin assets exceed liabilities, because cryptographic circulation does not reveal whether the off-chain balance sheet can honor redemption ([BIS Innovation Hub and Bank of England, 2024](https://www.bis.org/project/pyxtrial)).

Algorithmic pegs are even more exposed when one token is supposed to support another through mint-and-burn incentives. If confidence breaks, redemption can create the very supply expansion that drives the backing token lower.

That is exactly the failure Essentia must not reproduce.

### Can software create purchasing power?

Can software assign 𝒰 a value and, with enough adoption, make that value real?

Yes, in a constrained sense.

Software can define an enforceable entitlement, route it to eligible people, require participating institutions to accept it, net obligations, calculate settlement, and make the rules auditable. A sufficiently large network can create genuine purchasing power if suppliers accept the unit because they can spend it, settle obligations with it, redeem it through a funded mechanism, or rely on continuing demand.

No, in the unlimited sense.

Software cannot force outsiders to value `ℰ`. It cannot mint imported medicine, housing, electricity, or labor. It cannot preserve a market exchange rate by increasing supply when demand is collapsing. It cannot guarantee that a nominal amount will buy a real basket unless someone has committed the basket, the external assets, or the productive capacity required to deliver it.

The architecture must use the first truth without lying about the second.



## B.8 - A Freedom Floor that remains real

The Society needs an economic architecture that can say two things at once:

1. Shared agreement can create a real medium of exchange.
2. No amount of agreement can distribute a good that does not exist.

The architecture separates the essential entitlement, the provider bridge claim, and the settlement asset.

### The three layers

#### Layer 1: Essential Unit (`𝒰`)

`𝒰` is a non-transferable, person-held entitlement to an indexed share of essential purchasing power.

Its value is not defined as a fixed number of `ℰ`. Its value is defined by what the Freedom Floor promises in a particular region and period.

A person spends `𝒰` directly with an approved provider for food, housing, basic healthcare, communication, transportation, energy, water, and other ratified essentials. Category rules must be broad enough to preserve agency and narrow enough to keep the essential guarantee measurable.

#### Layer 2: Essential Settlement Receivable (`ℛ`)

`ℛ` is the bridge claim created after a provider delivers an essential good or service in exchange for `𝒰`.

It records what the clearing system owes the provider. It is denominated in the same basket-reference value as the underlying transaction, carries an identified issuer and settlement priority, and remains visible until settled or explicitly restructured.

`ℛ` separates the recipient's access from the provider's settlement. The person receives the essential good or service at the point of use. The provider receives a transparent claim on the clearing system rather than an unsupported automatic mint of `ℰ`.

#### Layer 3: Essent (`ℰ`)

`ℰ` is a transferable medium for general exchange, mutual credit, public budgets, contribution payments, bonds, and inter-node settlement.

`ℰ` may acquire external market value. It may also be useful before it has a deep external market if participants accept it to settle obligations and purchase real goods or services inside the network.

`ℰ` is allowed to float. `𝒰` and `ℛ` remain anchored to the defined essential-basket value. This separation prevents the Freedom Floor from rising and falling with a speculative asset.

### The External Liquidity Bridge

Some essential goods will come from outside the network. Providers may need national currency to pay taxes, wholesalers, utilities, mortgages, or employees. Optional `𝒰`-to-`ℰ` conversion may also create external selling pressure.

The External Liquidity Bridge contains:

- national-currency and high-quality liquid reserves;
- committed credit lines;
- grants and donations;
- cooperative and public revenues;
- regulated banking and payment partners;
- market-making facilities;
- insurance and loss reserves;
- cross-node settlement arrangements.

The bridge supports settlement of `ℛ` where reciprocal trade and `ℰ` are insufficient. It is not a token and not an oracle. It is the balance sheet and set of enforceable relationships connecting an internal promise to the external economy.

### The unit of account

A Freedom Floor needs a real reference.

For region `r`, household type `h`, and period `t`, define:

```text
BasketCost(r, h, t)
```

as the cost of a publicly specified minimum basket sufficient for life with dignity in that context.

The basket should combine:

- observed prices;
- actual availability;
- minimum quality;
- household composition;
- disability and accessibility costs;
- housing type and local rent;
- healthcare access;
- transportation;
- communication;
- energy and water;
- a flexible personal allowance;
- public deliberation about what participation in ordinary life requires.

No single dataset is enough.

The [World Bank's International Comparison Program](https://www.worldbank.org/en/programs/icp/brief/ICP2021_PPPs_and_results) compares prices across economies using large common item lists and purchasing-power parities. US [regional price parities](https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area) estimate geographic price differences. [Consumer price indices](https://www.bls.gov/opub/hom/cpi/) track change over time but require quality adjustment and do not describe every household's current minimum. The UK's [Minimum Income Standard](https://www.jrf.org.uk/cost-of-living/a-minimum-income-standard-for-the-united-kingdom-in-2025/methodology) adds something markets and official price indices cannot supply alone: recurring deliberation by members of the public about what a socially acceptable minimum actually includes.

Essentia should combine these approaches:

1. a **normative basket** defined through public deliberation and rights;
2. a **price observation layer** using official statistics, provider offers, receipts, and independent sampling;
3. an **availability layer** that records whether the item can actually be obtained;
4. an **equivalence layer** for household size, age, disability, climate, and local conditions;
5. a **review layer** that can change the basket without concealing the effect.

The published basket must be reproducible. Anyone should be able to take the item list, quantities, acceptable substitutions, geographic boundary, and price observations and recompute the result.

### 𝒰 issuance

Let:

```text
F(i, r, t) = alpha(i, r, t) * BasketCost(r, h_i, t)
```

where:

- `F` is the person's Freedom Floor entitlement for the period;
- `alpha` is the ratified coverage fraction;
- `h_i` is the person's household or individual equivalence class.

At full operation, `alpha = 1` for the ratified basket. In a pilot, `alpha` may be lower, but it must be published as partial coverage. The interface must not call 20 percent of a floor a complete floor.

𝒰 should be issued in small accounting units, with the wallet showing understandable local purchasing power and category availability rather than a magical integer.

### Direct spending

When a person spends 𝒰 with provider `v` for essential category `k`, the person receives the good or service immediately. The provider receives an Essential Settlement Receivable (`ℛ`), not an automatic unlimited mint of `ℰ`.

That receivable is a claim on the clearing system.

This distinction protects the recipient. The provider knowingly enters a settlement relationship; the person obtaining food should not bear the network's liquidity risk at the register.

### The settlement waterfall

Provider claims should settle through a published sequence:

1. **Obligation netting.** Offset what the provider owes to other participants, the node, or the federation.
2. **Mutual-credit settlement in `ℰ`.** Credit ℰ where the provider has agreed to accept it and where doing so stays inside its risk limit.
3. **Treasury ℰ settlement.** Use ℰ already held by funded public budgets, not newly minted ℰ without a corresponding liability.
4. **External-asset settlement.** Pay the contractually required portion in national currency or other approved external assets.
5. **In-kind or procurement settlement.** Supply inputs, energy, space, logistics, or other value the provider has agreed to accept.
6. **Deferred provider receivable.** Only where the provider knowingly contracted for delay, with a limit, maturity, priority, and loss protection.

The waterfall can reduce the amount of external cash required. It cannot make the remaining requirement disappear.

### Coverage must be measured in goods, not only money

Define category coverage:

```text
CategoryCoverage(r, k, t)
  = ContractedDeliverableQuantity(r, k, t)
    / ForecastEssentialDemand(r, k, t)
```

A region may have enough aggregate financial reserves and still lack insulin, accessible housing, or clinicians. The system should publish coverage by category and stress scenario.

Define short-term external-liquidity coverage:

```text
ExternalLiquidityCoverage(t)
  = LiquidExternalAssets
    + ContractuallyCommittedCredit
    + ConservativeExpectedExternalReceipts
    ----------------------------------------
      ForecastExternalSettlementOutflows
```

Each asset and receipt should be haircut according to liquidity, credit risk, legal access, currency mismatch, and stress behavior.

Define total essential coverage:

```text
EssentialCoverage(t)
  = LiquidReserves
    + Haircut(ContractedCapacity)
    + Haircut(NettableObligations)
    + Haircut(EligibleReceivables)
    --------------------------------
      ExpectedEssentialClaims
```

This ratio is useful only if category shortfalls remain visible. A warehouse of rice cannot settle a shortage of dialysis.

### What happens when ℰ has almost no value

Suppose a person is entitled to purchasing power worth 1,000 units of local currency and the executable market price of ℰ is 0.001.

A naive conversion rule produces:

```text
1,000 / 0.001 = 1,000,000 ℰ
```

If the protocol mints one million ℰ and the person sells it, supply expands into collapsing demand. The price can fall again, requiring even more ℰ for the next conversion. The mechanism does not defend purchasing power. It accelerates the failure.

The number of ℰ is not the value. Redenominating one old ℰ into one million new ℰ would change the display and nothing else.

Essentia must therefore prohibit unlimited price-following mint.

### 𝒰-to-ℰ conversion

Direct 𝒰 spending should be the primary guarantee. Conversion to unrestricted ℰ is a secondary service with three possible sources:

1. ℰ purchased from willing holders through an auction;
2. ℰ already held by the treasury or providers;
3. new ℰ issued only where a separately justified expansion of credit or money demand can absorb it.

For a conversion request with local reference value `X`, the indicative quantity is:

```text
RequestedE = X / ExecutablePriceE
```

But the executable amount is constrained:

```text
ConvertibleE = min(
  RequestedE,
  TreasuryEAvailable,
  MarketDepthCap,
  MonetaryExpansionCap,
  ExternalLiquidityCap
)
```

The system may satisfy the remaining claim through direct 𝒰 spending, an external-currency payment where legally and financially available, or a scheduled future window. It may not fill the gap by pretending a larger token count is equivalent.

### The executable price

The last traded price is not a reliable conversion oracle. A tiny trade on an illiquid venue can be manipulated.

`ExecutablePriceE` should use:

- multiple independent venues;
- time-weighted prices;
- quoted depth on both sides;
- recent executed volume;
- price impact for the actual conversion size;
- exclusion of related-party wash trading;
- robust medians or trimmed estimators;
- stale-data rejection;
- currency and venue risk;
- public calculation;
- independent witnesses;
- circuit breakers;
- a fallback auction when the oracle is disputed.

The oracle should answer, "At what price could this quantity actually be exchanged?" not, "What number appeared on a screen?"

Blockchain-oracle research repeatedly reaches the same boundary: a distributed ledger can verify the path from an input to an output, but it cannot make the external input trustworthy. Oracles need explicit trust models, independent sources, economic limits, and dispute procedures.

### A convertibility corridor, not an infinite peg

Once Essentia has sufficient reserves and liquidity, the clearing federation may quote a bid and offer around a target reference:

- it buys ℰ near the lower boundary using finite external assets;
- it sells ℰ near the upper boundary using finite ℰ inventory;
- the corridor width expands under stress;
- volume limits are public;
- reserve use is disclosed in near real time;
- the facility pauses automatically before reserves become insolvent.

A corridor can damp volatility. It cannot repeal it.

𝒰 remains redeemable for contracted essentials during an ℰ-market pause to the extent that real provision and settlement capacity remains. The difference is the entire point of the architecture.

### The unrestricted autonomy dividend

Essentials are not the whole of freedom. People need the ability to buy gifts, save, travel, create, take risks, and choose things no committee classified in advance.

The Society should therefore distinguish:

- the **Freedom Floor**, issued as 𝒰 and guaranteed against an essential basket;
- an **Autonomy Dividend**, paid in unrestricted ℰ or national currency when funded.

The Autonomy Dividend may come from cooperative surpluses, common-asset revenue, land or resource rents, public contributions, donations, transaction revenue, or a carefully governed share of monetary expansion. It should not be guaranteed by converting essential claims into unsupported `ℰ`.

### ℰ as reciprocal credit

The strongest early use for ℰ is not a public token sale. It is reciprocal trade.

A participant may receive an ℰ credit line based on:

- demonstrated capacity to provide something other members demand;
- signed purchase commitments;
- recurring revenue;
- collateral or reserve where appropriate;
- a guarantee pool;
- historical settlement performance;
- limits on concentration and connected exposure.

When the participant spends, the account may become negative. The recipient becomes positive. The credit is destroyed as the negative balance is repaid.

The risk is real. If the debtor defaults, someone holds an asset that will not be honored. Losses should be absorbed through a declared order:

1. the debtor's available collateral or receivables;
2. a participant-funded guarantee pool;
3. the underwriting node's capital;
4. a federation loss pool within a published cap;
5. transparent impairment of claims.

Universal recipients should not unknowingly become the last loss bearer.

### Demand for ℰ

ℰ needs recurring uses that are valuable without speculation.

Possible demand sources include:

- repayment of ℰ credit balances;
- settlement of network invoices;
- purchase of goods and services from participating providers;
- cooperative rent, energy, education, communication, and transportation;
- network dues or service charges where lawful and democratically authorized;
- provider commitments to accept a defined ℰ share in exchange for financing or access to demand;
- validator, auditor, or operator bonds;
- cross-node settlement;
- contribution contracts and public procurement.

These uses create a demand floor only to the extent that the underlying obligations and services matter. Requiring a meaningless fee in ℰ is not an economy. It is a toll attached to a token.

### Issuance of ℰ

ℰ should be elastic enough to support trade and disciplined enough that claims do not outrun capacity.

Permitted issuance classes should remain separate:

1. **Mutual credit.** Matched positive and negative balances within approved credit limits.
2. **Treasury spending.** ℰ issued against expected public revenue, contracted capacity, reserves, or other published assets and obligations.
3. **Contribution payment.** Paid from an existing budget or an approved treasury-credit envelope, not created by reviewers.
4. **Liquidity operations.** Temporary issuance against high-quality collateral, retired when the operation unwinds.
5. **Monetary expansion dividend.** Possible only after evidence shows sustained growth in real ℰ transaction demand and productive capacity.

Every issuance creates a liability somewhere. The ledger should identify it.

A fixed percentage of existing supply is not a sound issuance rule. At genesis it is arbitrary. During a contraction it can be too small. During a speculative bubble it can authorize too much. The relevant variables are real demand for balances, production, prices, settlement risk, reserves, and distribution.

### Inflation and bottlenecks

If new purchasing power chases fixed supply, prices can rise. If suppliers have unused capacity, added demand can increase output. If one sector is constrained, inflation can concentrate there even when the overall economy has slack.

The system should respond to the bottleneck, not only the aggregate price index.

- housing pressure calls for construction, land reform, anti-capture rules, or public provision;
- healthcare pressure calls for capacity, licensing reform where safe, training, procurement, and cross-region support;
- food shortages call for logistics, stocks, substitution, and production;
- energy shortages call for generation, storage, efficiency, and rationing during emergencies;
- monopoly pricing calls for competition, public options, procurement, or regulation.

Reducing 𝒰 because a supplier captured the transfer would protect the budget by abandoning the person.

### Trust underwriting without social credit

A trust-based economy needs underwriting, but it should underwrite commitments rather than rank human worth.

Permitted signals may include:

- verified delivery history;
- current contracts and receivables;
- capacity audits;
- professional credentials relevant to the obligation;
- voluntary guarantees;
- dispute and repair history within a limited context;
- concentration and network exposure.

Prohibited uses should include:

- one universal reputation score;
- voting weight based on reliability;
- essential access based on social approval;
- hidden behavioral scoring;
- inherited reputation;
- punishment for lawful dissent;
- unrelated personal data.

A person may have equal civic standing and a small business credit limit. Equality of dignity does not require pretending every financial promise has equal risk.

### Local density before global scale

A global logo does not create a global economy.

The first viable ℰ networks should be places where trade loops can close:

- a food producer buys repairs;
- the repair shop pays rent;
- the housing cooperative buys food;
- the node purchases care;
- care workers use transportation;
- the transportation provider buys energy.

Software can discover cycles, route payments, and show where the network leaks conventional currency. That is a genuine way for software to increase usable purchasing power: it reduces the amount of outside money required to support the same volume of real exchange.

Federation should connect functioning local economies rather than importing a token into places with no acceptance.

### Cross-node clearing

Local nodes will have surpluses and deficits. The federation should operate a clearing union:

- all cross-node obligations are recorded in ℰ;
- bilateral flows are netted multilaterally;
- persistent deficits trigger capacity assistance, adjustment, or tighter credit rather than immediate exclusion;
- persistent surpluses create obligations to recycle demand, invest, or accept settlement;
- external assets settle only the residual that cannot be cleared internally;
- credit limits depend on productive and fiscal capacity, not political status;
- no node may hide losses through unlimited federation issuance.

This borrows the useful logic of a clearing union without pretending the governance problem is solved by accounting.

### The Freedom Floor reserve

A dedicated reserve should be legally and operationally separated from speculative or discretionary spending.

Its public balance sheet should show:

- external liquid assets;
- ℰ holdings;
- contracted provider capacity by category and region;
- receivables and their aging;
- committed credit lines;
- expected inflows;
- 𝒰 issued and unspent;
- provider claims awaiting settlement;
- stress losses;
- currency mismatches;
- concentration by provider and bank;
- coverage under published scenarios.

Technical monitoring can make this nearly real time. It cannot replace independent audit or legal control of the assets.

### Emergency modes

The protocol should distinguish four failures:

1. **ℰ market failure.** External price or liquidity collapses. Pause unrestricted conversion; preserve direct 𝒰 acceptance and funded provider settlement.
2. **External settlement failure.** Banks, payment rails, or reserves become inaccessible. Increase internal netting and ℰ settlement; prioritize scarce external liquidity.
3. **Provider failure.** A vendor or category loses capacity. Route people to alternatives, release emergency procurement, and mobilize cross-node support.
4. **Physical shortage.** The good does not exist in sufficient quantity. Use transparent rationing based on need and safety, not wealth or status, while expanding supply.

No interface should display "fully funded" when only one of these layers is healthy.

### Can this become a real UBI?

Yes, conceivably, but not by conversion arithmetic alone.

A mature Society could provide a real universal income if it has:

- broad and durable political legitimacy;
- enough production and provider participation;
- revenue, assets, credit, or common wealth sufficient to carry the public liability;
- a currency accepted across a dense network;
- external liquidity for imports and obligations;
- governance capable of limiting issuance and distributing losses;
- a reliable price and availability system;
- protection against rent extraction and supply bottlenecks;
- legal authority or contracts strong enough to make commitments enforceable.

At that point, 𝒰 could be convertible into an amount of ℰ with equivalent executable purchasing power because the network would have demand, reserves, and settlement capacity behind the conversion.

The software can enforce the rule.

The society has to make the rule true.



## B.9 - The technical architecture follows the trust problem

Essentia must not begin by selecting a blockchain and then assigning most civic functions to it.

Part B reverses the order.

First identify the parties who can fail, the facts that must be proven, the data that must remain private, and the actions that need shared finality. Then choose the smallest technical system that satisfies those requirements.

### What a ledger is for

A shared ledger is useful when several institutions need a common sequence of events and no single institution should be able to rewrite it secretly.

Examples include:

- issuance and retirement of ℰ;
- creation and settlement of 𝒰 provider claims;
- public budget authorization;
- election parameters and final results;
- credential-status commitments;
- version history for constitutional texts;
- audit findings and responses;
- validator or witness changes.

Many other things do not belong in a shared ledger:

- medical records;
- biometric templates;
- government-ID images;
- home addresses;
- private ballots;
- raw safety reports;
- therapy or restoration records;
- personal messages;
- full educational histories;
- evidence whose publication would endanger someone.

The ledger should contain commitments and public state, not a permanent copy of human vulnerability.

### Start with a signed event log

The first production architecture may not need a blockchain.

A signed, append-only event log can provide:

- canonical event ordering;
- hash-linked history;
- independently stored checkpoints;
- inclusion and consistency proofs;
- public verification;
- multiple witnesses that detect conflicting histories.

Certificate Transparency demonstrates this family of design: Merkle-tree logs allow clients and monitors to verify inclusion and consistency, while independent observation helps detect misbehavior ([RFC 9162](https://www.rfc-editor.org/rfc/rfc9162)).

This architecture is simpler than a consensus network and may be safer for early pilots where one legally accountable operator performs writes and several independent organizations witness the log.

### When consensus becomes necessary

Byzantine fault tolerant consensus becomes relevant when:

- multiple independent operators share write authority;
- no single operator is trusted to order transactions;
- the network must continue after one operator fails or acts maliciously;
- finality must be agreed without an external adjudicator;
- the validator set and governance are mature enough to manage the new attack surface.

[HotStuff-family protocols](https://doi.org/10.1145/3293611.3331591) provide deterministic finality under defined assumptions and can tolerate a bounded number of Byzantine validators. That does not make validator governance democratic, prevent correlated infrastructure failures, or solve bad input data.

The Society should earn decentralization in phases:

1. one accountable operator plus independent witnesses;
2. several co-signing operators;
3. a permissioned BFT federation;
4. broader validator participation only after governance, legal responsibility, and recovery are proven.

"Decentralized" is not a substitute for naming who controls upgrades, keys, hosting, domains, client distribution, or emergency action.

### Public verification before public irreversibility

Every high-stakes module should have an independent verifier before it carries real rights or money.

A verifier should be able to reproduce:

- whether an ℰ issuance was authorized;
- whether a mutual-credit balance remains within limits;
- whether 𝒰 claims match issued entitlements and provider receipts;
- whether the basket index used the published data and method;
- whether reserves cover the disclosed liabilities under the stated assumptions;
- whether an election result follows from the published encrypted-ballot proofs and tally procedure;
- whether a Charter amendment matches the text approved.

The verifier must be usable by people outside the core team. A verification path that requires private infrastructure or undocumented judgment is an internal assertion.

### Voting is a particularly hard boundary

End-to-end verifiable voting can let participants confirm that encrypted ballots were included and that the tally followed a protocol without exposing individual choices. It does not automatically solve coercion, compromised client devices, denial of service, personhood, accessibility, or the secrecy of remote voting.

The US National Academies concluded that marked ballots should not be returned over the internet under current technology because secrecy, security, and verifiability cannot all be guaranteed at the required level ([National Academies, 2018](https://doi.org/10.17226/25120)).

The Society should therefore separate:

- public signaling, which may occur online with ordinary authenticated accounts;
- low-stakes internal decisions, which may use experimental verifiable systems;
- binding constitutional or high-consequence elections, which require an independently reviewed threat model, alternative access, auditable evidence, and a non-electronic fallback where necessary.

A private ballot is not private if malware records it before encryption.

### Cryptographic agility

The existing whitepaper correctly noticed that permanent systems should not hard-code one cryptographic suite forever. The conclusion should go further.

- Algorithm identifiers and parameters must be versioned.
- Critical state must support migration to new keys.
- Long-lived records should be re-attested before old signatures become unsafe.
- Hybrid signatures may be used during transitions.
- Privacy proofs should remain application-layer components rather than consensus assumptions when possible.
- Key sizes, performance, hardware support, and side-channel behavior must be tested in the actual client environment.

[NIST finalized ML-KEM, ML-DSA, and SLH-DSA standards in 2024](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards). These are important options for post-quantum migration, not a command to make every prototype transaction use them before implementation, hardware, libraries, and operational practice are ready.

### Oracle governance

An oracle is a governed process for moving external facts into a deterministic system.

The price oracle, basket oracle, provider-availability oracle, personhood process, and contribution-review process all have the same structure:

1. define the claim;
2. name eligible sources;
3. collect observations;
4. detect conflicts and manipulation;
5. aggregate under a public rule;
6. preserve dissent and source history;
7. allow challenge;
8. authorize a bounded state change;
9. review outcomes.

A [systematization of blockchain-oracle designs and attacks](https://doi.org/10.1145/3479722.3480994) shows that market-data failures often exploit both economic incentives and hidden trust assumptions. The Society should not call an oracle decentralized merely because several accounts sign the same source.

### Data architecture

A safer Essentia has at least four data planes:

1. **Public state.** Budgets, issuance totals, rules, aggregate outcomes, public proposals, software versions, institutional roles.
2. **Private personal state.** Credentials, protected evidence, health and safety records, stored under purpose-specific access and retention rules.
3. **Public commitments to private state.** Hashes, status accumulators, nullifiers, audit receipts, and proofs that allow verification without publication.
4. **Research data.** De-identified or synthetic datasets with governance, re-identification review, and explicit limits on reuse.

A hash of personal data can still identify the data when the possible input space is small. "Only a hash" is not a privacy policy.

### Automation and responsibility

Machine systems may:

- summarize arguments;
- identify accounting inconsistencies;
- flag unusual settlement patterns;
- propose trade cycles;
- translate;
- help people understand a decision;
- generate test cases;
- compare a policy against the Dignity Constraint.

They may not become the entity that "decided" when a person loses access, income, liberty, or standing.

Every automated recommendation needs:

- an accountable owner;
- a documented purpose;
- known inputs and exclusions;
- confidence and calibration where applicable;
- monitoring for distributional error;
- a human path to override;
- a person with authority to repair harm;
- a retirement condition.

The final safeguard is not human presence. It is human responsibility with enough authority, information, and time to matter.



## B.10 - Ecology is the balance sheet beneath every balance sheet

A monetary system can create claims faster than the biosphere can satisfy them.

Every unit of food, housing, transport, computation, medicine, and energy has a material history. The ledger may record ownership and obligation, but water, soil, carbon, minerals, biodiversity, and human labor determine what can be delivered.

Research on safe and just Earth-system boundaries concluded that seven of eight globally quantified boundaries examined were already exceeded in at least part of the world ([Rockström et al., 2023](https://doi.org/10.1038/s41586-023-06083-8)). The exact boundaries and methods will continue to be debated. The design implication is not: one model has calculated the final planetary answer. It is: ecological risk is already too material to remain an externality.

### Ecological accounting should change decisions

A Society budget should record at least:

- energy source and lifecycle emissions;
- water withdrawal and local scarcity;
- land use;
- material extraction;
- waste and toxicity;
- biodiversity pressure;
- repair or regeneration commitments;
- exposure to climate and ecological disruption;
- distribution of harms across communities and generations.

These cannot all be reduced honestly to one price.

A carbon price may improve decisions about emissions. It does not automatically represent irreversible biodiversity loss, sacred relationships to land, local health, or the rights of a community being displaced. Monetary valuation is one input among several boundaries.

### Provisioning before consumption promises

The Freedom Floor should prioritize essential systems that become more resilient as they scale:

- efficient and accessible housing;
- low-carbon energy;
- water security;
- durable public transportation;
- preventive healthcare;
- local and regional food capacity;
- repair, reuse, and material recovery;
- open knowledge;
- distributed emergency stocks.

A transfer that increases demand for a scarce, ecologically destructive input without expanding alternatives can worsen both price and environmental pressure.

### Representation without pretending nature speaks in one number

Sensors and models can report soil moisture, species abundance, heat, pollution, and other conditions. They do not turn an ecosystem into a voter.

Ecological representation should combine:

- measurable indicators;
- scientific review;
- Indigenous and local knowledge;
- legally recognized stewardship;
- long time horizons;
- precaution where damage may be irreversible;
- standing for affected future and non-human interests;
- public explanation of tradeoffs.

Machine systems may help interpret ecological data. They do not become the voice of the forest merely because they can summarize a sensor feed.

## B.11 - The research program

The Society should advance by gates, not dates.

A gate is a set of evidence conditions that must be met before a system becomes more consequential. Passing a gate authorizes the next experiment. It does not certify permanent success.

### Stage 0 - Models and adversarial review

No real money, benefits, identity, or binding votes.

Build:

- accounting simulations;
- agent-based models;
- market and bank-run stress tests;
- household basket prototypes;
- obligation-clearing algorithms;
- synthetic provider networks;
- identity threat models;
- governance simulations;
- privacy and data-flow maps;
- failure-mode and effects analyses;
- public verifier prototypes.

Questions:

- Under what trade topology does mutual credit increase exchange?
- How quickly do losses propagate when a large participant defaults?
- What reserve level survives correlated conversion demand?
- How does ℰ price manipulation affect an oracle?
- What happens when housing supply is fixed?
- Which basket items dominate volatility?
- Can provider claims be netted without revealing trade secrets?
- Can a participant recover identity without one actor being able to seize it?
- Can a public log present two histories without witnesses detecting it?
- Which groups are excluded by each personhood route?

Outputs:

- source code;
- assumptions;
- parameter ranges;
- failed scenarios;
- independent critiques;
- no claim of social efficacy.

### Stage 1 - Closed-loop accounting pilot

Use either play money or legally ordinary accounting credits among a small set of consenting organizations.

Test:

- invoice ingestion;
- cycle detection;
- mutual-credit limits;
- ℰ-denominated trade;
- dispute resolution;
- default handling;
- public aggregate reporting;
- private commercial data;
- export and exit.

Success measures:

- conventional liquidity saved;
- additional real trade completed;
- repayment and default;
- concentration;
- average time to spend positive ℰ;
- participant understanding;
- administrative cost;
- network retention;
- whether firms receive ℰ they cannot use.

Stop if positive balances become stranded, losses exceed the guarantee pool, or participation depends on hidden subsidies not represented in the model.

### Stage 2 - Fully backed essential pilot

Issue 𝒰 to a small group, with every unit backed by committed national-currency funds or prepaid provider capacity.

This is not yet a test of endogenous ℰ value. It is a test of the entitlement, basket, provider experience, privacy, and delivery.

Measure:

- whether recipients can obtain the promised basket;
- substitution and personal choice;
- provider payment time;
- price capture;
- unmet categories;
- stigma and administrative burden;
- identity false rejection;
- appeals;
- fraud;
- wellbeing and financial volatility;
- whether the basket reflects real life.

Use randomized rollout only where ethically and practically justified. A lottery can allocate scarce pilot capacity fairly, but the research design must not withhold an existing entitlement.

### Stage 3 - Partial ℰ settlement

Allow providers to choose a bounded settlement mix:

```text
external currency / ℰ / netted obligations / in-kind value
```

No provider should be forced to accept more ℰ than its approved risk limit.

Test:

- ℰ circulation;
- trade-loop closure;
- provider reuse;
- external conversion demand;
- spreads and market depth;
- price volatility;
- credit losses;
- reserve draw;
- whether ℰ demand is transactional or speculative;
- whether participants understand the risk.

The key outcome is not token price. It is how much useful trade and essential provision the network can sustain per unit of external liquidity without creating unpayable claims.

### Stage 4 - Bounded convertibility corridor

Operate a small ℰ market with disclosed reserves, price-impact limits, auctions, and automatic circuit breakers.

Stress:

- a large provider exit;
- a bank outage;
- a false price feed;
- coordinated redemption;
- a 50 percent external ℰ price decline;
- an 80 percent decline;
- loss of one reserve bank;
- fraudulent provider claims;
- a regional shortage;
- a sudden increase in eligible recipients.

A corridor passes only if the system pauses safely before insolvency, 𝒰 continues to buy contracted essentials, and users receive accurate information rather than a false peg.

### Stage 5 - Recurring Freedom Floor pilot

Only after the prior stages work should the Society test a recurring floor with a meaningful share funded through internal revenue, reciprocal credit, or common assets.

The pilot should include an external evaluator and a predeclared comparison strategy. Outcomes should include:

- material security;
- health and stress;
- labor and education choices;
- household bargaining power;
- housing and essential prices;
- local production;
- firm entry and exit;
- debt;
- social trust;
- conflict and safety;
- environmental effects;
- public cost;
- distribution by demographic and vulnerability;
- political acceptance;
- provider solvency;
- reserve adequacy.

A successful pilot is not one where recipients say they liked money. It is one where the whole delivery system remains solvent, useful, dignified, and correctable.

### Stage 6 - Federation

Connect several independently governed nodes only after each can operate and exit.

Test:

- cross-node netting;
- deficit and surplus adjustment;
- governance conflict;
- credential portability;
- data minimization;
- legal compatibility;
- reserve mutualization;
- contagion;
- emergency assistance;
- node expulsion and appeal;
- software version divergence.

Federation fails if one node's deficit can silently drain every other node or if the global layer can erase local autonomy.

### Research governance

The research program itself needs safeguards.

- Researchers must disclose financial, ideological, organizational, and technical conflicts.
- People receiving benefits must have representation separate from the research team.
- Data collection should be limited to the question.
- Participation in research should not be a condition of receiving an earned or universal benefit.
- Negative results must be published.
- Models and code should be open where privacy and security permit.
- Red teams should be paid for finding failure, not only for approving launch.
- A public claim register must show which statements changed, what evidence caused the change, and who approved it.
- No team should both operate a high-stakes pilot and hold sole authority to certify it.

## B.12 - Requirements for the systems that follow

Part B is the scientific, economic, institutional, and technical foundation for the Charter, Essentia, and the Society's later systems. It defines what those systems may responsibly claim, what they must measure, and what they must survive before anyone is asked to depend on them.

### Requirements for the Charter

The Charter must not state as settled facts that:

- education can replace all criminal law or emergency protection;
- a DID proves unique personhood;
- one DID should be the single credential for all civic life;
- ranked-choice voting should be the default for every multi-option decision;
- liquid democracy necessarily scales expertise without concentrating power;
- a blockchain is the required civic spine;
- a recurring UBI can be guaranteed before funding and capacity exist;
- `𝒰` can be stabilized through an `ℰ` exchange formula alone;
- public reputation is an appropriate general record of social integrity;
- predictive machine systems can recognize early harmful behavior without creating unacceptable surveillance and bias;
- machine consciousness has a solved membership test.

These remain hypotheses or possible mechanisms until the relevant evidence gates are met. The Charter protects rights and defines limits before it mandates implementation.

### Requirements for Essentia

Essentia is a research architecture for accountable coordination, not a synonym for a blockchain.

Its first responsibilities are:

1. preserve public evidence and institutional history;
2. support privacy-preserving, recoverable credentials;
3. clear reciprocal obligations;
4. account for `ℰ` issuance and risk;
5. route `𝒰` entitlements to real provision;
6. create and settle `ℛ` claims when providers deliver essentials;
7. publish coverage and reserve conditions;
8. support decision-specific governance;
9. provide independent verification;
10. degrade safely and reveal when the system cannot keep a promise.

Early prototypes can test transactions, budgets, accounting objects, and state transitions. They do not establish that any named consensus algorithm, signature scheme, native DID, reputation system, or redemption mechanism belongs in production.

### What it means to say that care scales

The phrase "prove that care scales" is too broad to function as a scientific claim.

Care is not one treatment with one effect size. It is a moral orientation expressed through many mechanisms. Some will scale. Some will fail. Some will work locally and collapse globally. Some will reduce one harm and create another.

The stronger promise is:

> We will build systems that let us discover where care works, preserve what people need while we learn, and change course without turning failure into abandonment.

## Conclusion - What would make the Society real

The Society of Renewal will not become real when its documents are complete, its token trades, or its network reaches a certain number of nodes.

It becomes real when a person can rely on it.

When the food arrives.

When the rent remains paid after a market shock.

When a credential can be recovered without begging one company.

When a harmed person is protected without being forced into forgiveness.

When someone who caused harm is held to a boundary without being erased.

When a vote changes a decision.

When an audit moves power.

When a provider receives settlement it can use.

When a node admits that a model failed before the failure reaches the people with the least room to absorb it.

That is the standard Part B imposes on every system that follows.

Not whether the mechanism is elegant.

Whether the promise survives contact with life.

---

# Selected research and standards

This is a working bibliography, not a claim that every cited result generalizes to every setting. Part B gives greater weight to systematic reviews, randomized or quasi-experimental evidence, official measurement standards, and directly inspectable protocols. Case studies and design papers are used to identify mechanisms and failure modes, not to certify a complete system.

## Scientific method and evidence

- National Academies of Sciences, Engineering, and Medicine. [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303) (2019).
- Filipa de Almeida, Ian J. Scott, Jerônimo C. Soro, Daniel Fernandes, André R. Amaral, Mafalda L. Catarino, André Arêde, and Mário B. Ferreira. ["Financial scarcity and cognitive performance: A meta-analysis."](https://doi.org/10.1016/j.joep.2024.102702) *Journal of Economic Psychology* 101 (2024).

## Material security and cash transfers

- Tommaso Crosta, Dean Karlan, Finley Ong, Julius Rüschenpöhler, and Christopher R. Udry. [*Unconditional Cash Transfers: A Bayesian Meta-Analysis of Randomized Evaluations in Low and Middle Income Countries*](https://doi.org/10.3386/w32779). NBER Working Paper 32779 (2024; revised 2026).
- Dennis Egger, Johannes Haushofer, Edward Miguel, Paul Niehaus, and Michael Walker. ["General Equilibrium Effects of Cash Transfers: Experimental Evidence from Kenya."](https://doi.org/10.3982/ECTA17945) *Econometrica* 90, no. 6 (2022).
- Eva Vivalt, Elizabeth Rhodes, Alexander W. Bartik, David E. Broockman, Patrick K. Krause, and Sarah Miller. [*The Employment Effects of a Guaranteed Income: Experimental Evidence from Two U.S. States*](https://doi.org/10.3386/w32719). NBER Working Paper 32719 (2024; revised 2026).
- Sarah Miller, Elizabeth Rhodes, Alexander W. Bartik, David E. Broockman, Patrick K. Krause, and Eva Vivalt. [*Does Income Affect Health? Evidence from a Randomized Controlled Trial of a Guaranteed Income*](https://doi.org/10.3386/w32711). NBER Working Paper 32711 (2024; revised 2026).

## Learning, prevention, safety, and restoration

- Christina Cipriano et al. ["The state of evidence for social and emotional learning: A contemporary meta-analysis of universal school-based SEL interventions."](https://doi.org/10.1111/cdev.13968) *Child Development* 94, no. 5 (2023).
- Heather Strang, Lawrence W. Sherman, Evan Mayo-Wilson, Daniel Woods, and Barak Ariel. [*Restorative Justice Conferencing Using Face-to-Face Meetings of Offenders and Victims: Effects on Offender Recidivism and Victim Satisfaction*](https://doi.org/10.4073/csr.2013.12). Campbell Systematic Review 9, no. 1 (2013).
- Anthony A. Braga, David Weisburd, and Brandon Turchan. [*Focused Deterrence Strategies Effects on Crime: A Systematic Review*](https://doi.org/10.1002/cl2.1051). Campbell Systematic Review 15, no. 3 (2019).
- National Research Council. [*The Growth of Incarceration in the United States: Exploring Causes and Consequences*](https://doi.org/10.17226/18613) (2014).

## Cooperation, trust, and governance

- Elinor Ostrom. ["Beyond Markets and States: Polycentric Governance of Complex Economic Systems."](https://doi.org/10.1257/aer.100.3.641) *American Economic Review* 100, no. 3 (2010).
- Allan Gibbard. ["Manipulation of Voting Schemes: A General Result."](https://doi.org/10.2307/1914083) *Econometrica* 41, no. 4 (1973).
- OECD. [*Innovative Citizen Participation and New Democratic Institutions: Catching the Deliberative Wave*](https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en.html) (2020).
- OECD. [*OECD Guidelines for Citizen Participation Processes*](https://www.oecd.org/en/publications/oecd-guidelines-for-citizen-participation-processes_f765caf6-en.html) (2022).
- Gabriele Camera, Marco Casari, and Maria Bigoni. ["Money and trust among strangers."](https://doi.org/10.1073/pnas.1301888110) *Proceedings of the National Academy of Sciences* 110, no. 37 (2013).
- Maria Bigoni, Gabriele Camera, and Marco Casari. ["Money Is More than Memory."](https://doi.org/10.1016/j.jmoneco.2019.01.002) *Journal of Monetary Economics* 110 (2020).
- Gabriele Camera. ["Introducing New Forms of Digital Money: Evidence from the Laboratory."](https://doi.org/10.1111/jmcb.13015) *Journal of Money, Credit and Banking* 56, no. 1 (2024).

## Money, token adoption, and complementary credit

- Bank of England. ["Money creation in the modern economy."](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy) *Quarterly Bulletin* (2014).
- Satoshi Nakamoto. [*Bitcoin: A Peer-to-Peer Electronic Cash System*](https://bitcoin.org/bitcoin.pdf) (2008).
- Lin William Cong, Ye Li, and Neng Wang. [*Tokenomics: Dynamic Adoption and Valuation*](https://doi.org/10.3386/w27222). NBER Working Paper 27222 (2020).
- James Stodder. ["Complementary credit networks and macroeconomic stability: Switzerland's Wirtschaftsring."](https://doi.org/10.1016/j.jebo.2009.06.002) *Journal of Economic Behavior & Organization* 72, no. 1 (2009).
- Laura Sartori and Paolo Dini. ["From complementary currency to institution: A micro-macro study of the Sardex mutual credit system."](https://doi.org/10.1425/84070) *Stato e Mercato* 107 (2016).
- Wallis Motta, Paolo Dini, and Laura Sartori. ["Self-Funded Social Impact Investment: An Interdisciplinary Analysis of the Sardex Mutual Credit System."](https://doi.org/10.1080/19420676.2017.1321576) *Journal of Social Entrepreneurship* 8, no. 2 (2017).
- Tomaž Fleischman, Paolo Dini, and Giuseppe Littera. ["Liquidity-Saving through Obligation-Clearing and Mutual Credit."](https://doi.org/10.3390/jrfm13120295) *Journal of Risk and Financial Management* 13, no. 12 (2020).
- Ariane Reyns, Marek Hudon, and Koen Schoors. ["For better or for worse: How Mutual Credit Systems bolster resilience of small firms."](https://doi.org/10.1016/j.jebo.2024.106861) *Journal of Economic Behavior & Organization* 230 (2025).
- Bank for International Settlements. [*On par: A Money View of stablecoins*](https://www.bis.org/publ/work1146.htm). BIS Working Papers No. 1146 (2023).
- BIS Innovation Hub. [*Project Pyxtrial: Monitoring the asset backing of stablecoins*](https://www.bis.org/project/pyxtrial) (2024).
- BIS Innovation Hub. [*Project Agora*](https://www.bis.org/about/bisih/topics/fmis/agora.htm) (ongoing).

## Cost of living and essential-basket measurement

- World Bank International Comparison Program. [*Purchasing Power Parities and the Size of World Economies: Results from the 2021 International Comparison Program*](https://www.worldbank.org/en/programs/icp/brief/ICP2021_PPPs_and_results).
- U.S. Bureau of Economic Analysis. [*Regional Price Parities by State and Metro Area*](https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area).
- U.S. Bureau of Labor Statistics. [*Handbook of Methods: Consumer Price Index*](https://www.bls.gov/opub/hom/cpi/).
- Joseph Rowntree Foundation and Centre for Research in Social Policy. [*A Minimum Income Standard for the United Kingdom in 2025: Methodology*](https://www.jrf.org.uk/cost-of-living/a-minimum-income-standard-for-the-united-kingdom-in-2025/methodology).

## Identity, privacy, and voting

- W3C. [*Decentralized Identifiers (DIDs) v1.0*](https://www.w3.org/TR/did-core/).
- W3C. [*Verifiable Credentials Data Model v2.0*](https://www.w3.org/TR/vc-data-model-2.0/).
- National Institute of Standards and Technology. [*Digital Identity Guidelines, SP 800-63-4*](https://doi.org/10.6028/NIST.SP.800-63-4) (2025).
- Puja Ohlhaver, Mikhail Nikulin, and Paula Berman. ["Compressed to 0: The Silent Strings of Proof of Personhood."](https://stanford-jblp.pubpub.org/pub/compressed-to-0-proof-personhood/release/5) *Stanford Journal of Blockchain Law & Policy* (2025).
- National Academies of Sciences, Engineering, and Medicine. [*Securing the Vote: Protecting American Democracy*](https://doi.org/10.17226/25120) (2018).

## Distributed systems, cryptography, and external data

- Ben Laurie et al. [*Certificate Transparency Version 2.0*](https://www.rfc-editor.org/rfc/rfc9162). RFC 9162 (2021).
- Maofan Yin, Dahlia Malkhi, Michael K. Reiter, Guy Golan Gueta, and Ittai Abraham. ["HotStuff: BFT Consensus with Linearity and Responsiveness."](https://doi.org/10.1145/3293611.3331591) *Proceedings of PODC* (2019).
- National Institute of Standards and Technology. ["NIST Releases First 3 Finalized Post-Quantum Encryption Standards."](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards) (2024).
- Shayan Eskandari et al. ["SoK: Oracles from the Ground Truth to Market Manipulation."](https://doi.org/10.1145/3479722.3480994) *Proceedings of the ACM CCS DeFi Workshop* (2021).

## Ecological limits

- Johan Rockström et al. ["Safe and just Earth system boundaries."](https://doi.org/10.1038/s41586-023-06083-8) *Nature* 619 (2023).

---

> Continue to read → [Founding Book Outline](outline.md)
