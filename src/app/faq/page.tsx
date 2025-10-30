import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Society of Renewal — Detailed FAQ",
  description:
    "Get answers about the Society of Renewal: membership, Freedom Floor UBI, governance, safety model, funding, and how to get involved.",
};

const faqs = [
  {
    question: "1) What is the Society of Renewal?",
    answer: [
      "The Society of Renewal is a global, opt-in civic society—a borderless form of government built around three pillars:",
      [
        "Material stability (the Freedom Floor: UBI for basic needs as capacity grows),",
        "Education over punishment (prevention and repair instead of reflexive coercion), and",
        "Verifiable self-governance (private ballots, auditable results, public budgets).",
      ],
      "We operate via a public civic ledger and a living Charter of Renewal that members can amend as evidence improves.",
    ],
  },
  {
    question: "2) Is this a political movement or an NGO?",
    answer:
      "It’s a post-national civic society—political in purpose, but not tied to any party or state. It can work alongside NGOs and governments, but it is not a charity or a traditional advocacy group. Think of it as a new layer of governance you can opt into, regardless of where you live now.",
  },
  {
    question: "3) Do I have to give up my current citizenship or relocate?",
    answer:
      "No. Membership is additive. You keep your citizenships, jobs, communities, and obligations. You do not have to move. The Society is portable, borderless, and voluntary.",
  },
  {
    question: "4) What do members actually get?",
    answer: [
      [
        "A self-sovereign civic identity you control (your key to vote, learn, and access benefits).",
        "A vote and a voice in decisions, with private ballots and verifiable outcomes.",
        "Universal Prevention Education: free, practical learning that reduces everyday harm.",
        "A Community Safety Network that prioritizes de-escalation and repair.",
        "Access to the Freedom Floor (UBI) as rollouts expand by region and capacity.",
      ],
    ],
  },
  {
    question: "5) How does the UBI (“Freedom Floor”) work?",
    answer: [
      "The Freedom Floor is a baseline income for essentials. It starts with pilots in waves and scales as capacity grows. Where pilots are live, members activated in that wave receive Essential Units (𝒰)—a purpose-built, non-transferable, expiring instrument designed to purchase essentials (food, shelter, energy, connectivity) through participating vendors and mutual-aid networks.",
      "Members can also earn a transferable token called Essent (ℰ) by contributing verifiable public good—teaching, care work, local infrastructure, open-source, research, translation, mediation, and more.",
    ],
  },
  {
    question: "6) Where does the money come from? Is this taxes?",
    answer: [
      "No new taxes. Funding flows through Essentia, our public civic ledger:",
      [
        "Essent (ℰ) is minted for verified contributions to the commons. It’s transferable and earned by doing useful work that the community can audit.",
        "Essential Units (𝒰) deliver UBI. They’re non-transferable, expire, and are restricted to essential baskets to stabilize purchasing power for basic needs.",
      ],
      "Budgets, issuance rules, and flows are public and auditable. The Freedom Floor expands as we onboard vendors, mutual-aid nodes, and regional partners.",
    ],
  },
  {
    question:
      "7) Why a “lottery”? What does “Need Path” vs “Lottery Path” mean?",
    answer: [
      "When more people want benefits than the current pilot can serve, we scale fairly using two on-ramps:",
      [
        "Need Path: Prioritizes urgent cases (documented hardship, crisis, disability support, etc.).",
        "Lottery Path: Uses provably random selection so access isn’t about status, politics, or connections.",
      ],
      "Membership itself is open; the lottery only determines activation order for benefits during limited-capacity phases.",
    ],
  },
  {
    question: "8) How is the lottery “provably random” and fair?",
    answer:
      "We use an open-source draw process: seeds and randomness beacons are published; anyone can verify that the resulting selection matches the published rules. Results and appeals are transparent.",
  },
  {
    question:
      "9) What stops fraud or duplicates (one person, many identities)?",
    answer: [
      "Identity is self-sovereign but verifiable. We combine:",
      [
        "Device-bound keys (e.g., passkeys/WebAuthn),",
        "Selective disclosure credentials (share only what’s needed),",
        "Human checks (community attestations, reputation, and challenge processes), and",
        "Privacy-preserving audits to detect anomalies without exposing personal data.",
      ],
      "No system is perfect; ours includes appeals, review panels, and corrective updates.",
    ],
  },
  {
    question: "10) Is this “crypto” or a speculative coin?",
    answer: [
      "We use a ledger, but the goals are civic (identity, voting, UBI), not speculation. Key points:",
      [
        "No proof-of-work mining; energy use is low.",
        "UBI uses 𝒰, a non-transferable instrument for essentials—not a tradable coin.",
        "ℰ (Essent) is transferable but minted for verified public good, not out of thin air.",
        "Public rules, open code, and audits are the guardrails.",
      ],
    ],
  },
  {
    question: "11) How do you keep prices stable and avoid inflation?",
    answer: [
      "We separate earnable value (ℰ) from basic-needs access (𝒰):",
      [
        "𝒰 is calibrated to baskets of essentials and expires, which prevents hoarding and dampens inflationary spirals.",
        "Vendor reimbursements are indexed to actual costs for essential categories.",
        "Issuance is rules-based and published. We monitor real-world prices and adjust basket definitions via public governance.",
      ],
      "This is not magic—it’s monetary policy with narrow scope: keep essentials reliably affordable.",
    ],
  },
  {
    question: "12) Is this legal where I live?",
    answer:
      "We operate within existing law and avoid instructing anyone to break local rules. In areas with restrictions, we adapt (education, identity, participation) while we pursue lawful partnerships. If you have obligations (taxes, permits), you still have them.",
  },
  {
    question: "13) How does safety work without traditional policing?",
    answer: [
      "Most harm is prevented by stability + education. When an incident occurs:",
      [
        "De-escalate; ensure immediate safety.",
        "Protective separation if necessary—time-limited with review.",
        "Repair: make the harmed whole (as possible) and help the person who caused harm learn and return.",
        "Minimum force, maximum dignity; use state emergency services when required by law or risk.",
      ],
      "We publish protocols, training, and data (with privacy).",
    ],
  },
  {
    question: "14) Who runs this? Is there a founder or a party line?",
    answer:
      "We’re governed by the Charter of Renewal and public processes—not by personality. Early organizers bootstrap logistics, but their powers are time-limited and auditable. The Charter is living: members can propose, debate, and amend.",
  },
  {
    question: "15) How do decisions get made?",
    answer: [
      [
        "Private ballots; verifiable totals (you can check your vote was counted without revealing it).",
        "Ranked-choice as default; delegation allowed but revocable at any time.",
        "Quorum and safeguards scale with impact (higher bar for high-stakes changes).",
        "Sunset clauses by default; policies get reviewed on a schedule.",
      ],
    ],
  },
  {
    question: "16) What do I have to do as a member?",
    answer: [
      [
        "Follow the dignity rule (no dehumanization; no coercion).",
        "Participate honestly (one person, one identity; no brigading).",
        "Help us learn (file issues, send feedback, propose improvements).",
        "Optional: contribute work you enjoy; earn ℰ for verifiable public good.",
      ],
    ],
  },
  {
    question: "17) How do businesses and nonprofits participate?",
    answer: [
      [
        "Accept 𝒰 for essentials; get reimbursed per published rules.",
        "Offer impact work members can do to earn ℰ.",
        "Co-run pilots (food security, housing, energy, connectivity) with open metrics.",
        "Publish impact data; get reputational credit for verified outcomes.",
      ],
    ],
  },
  {
    question: "18) What about data privacy?",
    answer: [
      [
        "Minimal collection; selective disclosure (share only what’s necessary for a given service).",
        "Zero-knowledge and blinded audits where possible.",
        "You own your keys; social recovery options exist.",
        "Data retention is limited and policy-bound; changes require public votes.",
      ],
    ],
  },
  {
    question: "19) Roadmap (high level)",
    answer: [
      [
        "Wave 0: Identity, voting, and education commons live; small UBI pilots in a few regions.",
        "Wave 1: Vendor network for essentials; UBI expansion via Need + Lottery Paths.",
        "Wave 2: Cross-region scale; more languages; more mediation & training nodes.",
        "Wave 3: Global mesh of local chapters; employer/NGO integrations; research compacts.",
      ],
      "Timelines depend on partner readiness and audit milestones (published on the site).",
    ],
  },
  {
    question: "20) How do I join?",
    answer: [
      [
        "Join the waitlist (email) and create your civic identity.",
        "Read and accept the dignity rule and participation standards.",
        "Optional: tell us skills, languages, and availability to contribute or pilot.",
        "When UBI capacity exists in your area, you’ll be activated via Need or Lottery Path.",
      ],
      "You’ll have full voting and learning access either way.",
    ],
  },
  {
    question: "21) How do I contribute right now?",
    answer: [
      [
        "Teach or translate a prevention module.",
        "Help a local node (food, housing support, connectivity).",
        "Build software, write docs, or run audits (open repo; issues welcome).",
        "Recruit vendors willing to accept 𝒰 for essentials.",
      ],
    ],
  },
  {
    question: "22) What are the biggest risks?",
    answer: [
      [
        "Capacity risk: demand may outpace vendor onboarding.",
        "Policy drift: we guard against mission creep with sunsets and reviews.",
        "Adversarial behavior: we invest in audits, identity integrity, and appeal systems.",
        "Public misunderstanding: we publish clear rules, data, and proofs.",
      ],
      "We will make mistakes. We commit to document, repair, and improve in public.",
    ],
  },
  {
    question: "23) Is this a religion or a cult?",
    answer:
      "No. There is no doctrine to worship and no loyalty oath. Membership is voluntary, exit is free, leaders are term-limited, budgets are public, and the Charter is amendable by members.",
  },
  {
    question: "24) Will this conflict with my job, union, or faith community?",
    answer:
      "It shouldn’t. The Society is pluralistic. We coordinate on dignity, evidence, and material stability; we do not police private beliefs.",
  },
  {
    question: "25) Legal and tax note",
    answer:
      "We don’t give tax advice. If your jurisdiction treats benefits as taxable, you are responsible for compliance. We publish receipts and documentation to make compliance easier.",
  },
];

const definitions = [
  "Freedom Floor (UBI): Baseline income for essentials, delivered via 𝒰 as capacity grows.",
  "Essentia: The public civic ledger that powers identity, voting, audits, and value rails.",
  "Essent (ℰ): Transferable token earned for verified contributions to the commons.",
  "Essential Units (𝒰): Non-transferable, expiring instrument for essential goods/services.",
  "Need Path: Priority activation for urgent hardship.",
  "Lottery Path: Provably random activation when capacity is limited.",
];

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden bg-[#030711] text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18)_0%,_rgba(3,7,17,0)_65%)]" />
      <section className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-20 sm:py-28">
        <header className="space-y-6">
          <p className="text-xs tracking-[0.45em] text-slate-400 uppercase">
            Society of Renewal
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-slate-50 sm:text-5xl">
            Society of Renewal — Detailed FAQ
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            A global, borderless civic society that treats dignity as law and
            education as infrastructure.
          </p>
          <blockquote className="border-l-2 border-white/20 pl-5 text-base leading-relaxed text-slate-300">
            <strong className="text-slate-100">Short version:</strong> You can
            join from anywhere. We provide a portable civic identity, verifiable
            democracy, education-first safety, and a Universal Basic Income
            (UBI) we call the Freedom Floor as pilots scale. Membership is
            voluntary and coexists with your current citizenship.
          </blockquote>
        </header>

        <div className="space-y-12">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-slate-100">
                {faq.question}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((block, index) =>
                    Array.isArray(block) ? (
                      <ul
                        key={`${faq.question}-list-${index}`}
                        className="list-disc space-y-2 pl-6 text-slate-300"
                      >
                        {block.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={`${faq.question}-para-${index}`}>{block}</p>
                    ),
                  )
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-slate-100">
            Definitions (at a glance)
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-300">
            {definitions.map((definition) => (
              <li key={definition}>{definition}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-slate-400">
          <h3 className="text-base font-semibold tracking-[0.3em] text-slate-300 uppercase">
            Footnote
          </h3>
          <p>
            1. Data for safety and outcomes is anonymized or aggregated by
            default. Individual case details are private unless the parties
            consent to disclosure for learning.
          </p>
        </section>

        <section className="space-y-6 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-slate-100">
          <h2 className="text-2xl font-semibold">Get started</h2>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed">
            <li>
              <Link href="/" className="underline hover:text-slate-200">
                Join the waitlist
              </Link>{" "}
              and create your civic identity.
            </li>
            <li>
              Read the{" "}
              <Link
                href="https://github.com/SocietyOfRenewal/societyofrenewal/blob/main/docs/charter/README.md"
                target="_blank"
                rel="noopener"
                className="underline hover:text-slate-200"
              >
                Charter of Renewal
              </Link>{" "}
              (human-readable, with edit history).
            </li>
            <li>
              Pick a way to help: teach, code, translate, mediate, or onboard a
              vendor.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-slate-100/90">
            Democracy should feel like care you can verify. Welcome in.
          </p>
        </section>
      </section>
    </main>
  );
}
