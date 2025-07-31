---
title: Managing process
section: Process
slug: managing-process
ready: true
---

# Managing process

The process pillar of engineering management deals with **how** a project is conducted from ideation to production.

This encompasses recurring meetings, squad ceremonies, tracking progress, delegation, quality gates, and bug fixing.

A process by itself doesn't make a team faster, at least not directly. The goal of implementing processes is to invest time to gain **predictability**, **quality**, and **clarity**.

**Predictability**: They help surface issues that might put the delivery at risk, so the team can rebalance their efforts and react accordingly. If a delay is necessary, this allows for early communication with stakeholders.

**Quality**: These processes reduce issues, especially those that could end up in production. They act as safeguards to ensure code is reviewed and thoroughly tested. Examples include code reviews, QA testing, and bug bashes.

**Clarity**: These processes help align the team on scope, which reduces uncertainty and helps divide the work. This enables engineers to work more independently, reduces communication overhead, and makes it easier to track completion. Examples include creating architecture proposal documents at the start of a project or segmenting work into epics and milestones.

Not every process will achieve all three goals. The benefits of a process depend on its type and where it's applied in the development lifecycle.


## The Development Lifecycle

Your team moves through project phases in a cycle. You'll start in planning mode, then move into building until you deliver and the cycle starts anew. But as your product matures, maintenance takes up an increasing amount of time.

![Software Development Lifecycle](/assets/chapters/chapter-9-sdlc.svg)

Processes are associated with each of these three phases. Here are some common examples for each.


### Planning Phase

Processes in this phase aim to identify and remove potential pitfalls. The goal is to improve **predictability** and create **clarity** of the value to be delivered.

The idea here is to measure twice and cut once. For example, when a team is overwhelmed with requests, using a *prioritization matrix* can be critical. This process helps compare the value of each request against its implementation difficulty, making it easier to decide which projects to invest in.

For complex projects with many moving parts, creating a technical specification is a common process. This involves exploring necessary architectural changes to create a blueprint for implementation, which gets all engineers on the same page.

Before work begins, scoping helps divide the project into manageable units like milestones (vertical slices) and deliverables (horizontal slices). This allows the team to work on different parts concurrently without stepping on each other's toes.


### Building Phase

During the building phase, processes focus on two main goals: keeping the team aligned and ensuring quality.

Alignment processes are often time-based rituals like sprint planning, daily syncs, or retrospectives. They aim to achieve **clarity**, surface issues early, clear potential roadblocks, and identify the team’s bottlenecks. They also allow the team to measure its efficiency and track progress. Some are conducted as meeting ceremonies, while others are handled asynchronously.

Quality assurance (QA) processes can take many forms and be applied at different stages. These quality gates might involve unit tests, end-to-end (E2E) tests, or manual QA. The frequency varies, too. A common practice is to run unit tests on every pull request, run E2E tests daily, and require a manual sign-off before a major release.

The strictness of the QA process depends on the product and user expectations. For example, you’d hope your bank or an airplane manufacturer has a rock-solid QA process, but you might be more tolerant of a few bugs in a free-to-play game.


### Maintenance Processes

Maintenance processes deal with the quality of the product after it's in production. Here, the processes are all about **quality**, for example, how the team triages and handles user-reported bugs.

Some companies have no formal process for this. In some consumer startups, reported bugs are added to a sprint if a product manager feels they are “worrying enough.” Others, generally B2B and larger SaaS companies, adopt a low tolerance for user-facing defects and implement on-call rotations and aggressive bug triaging.

Other maintenance processes deal with major incidents—the kind that could cause a catastrophic loss of data, money, or user trust. Adopting a formal post-mortem process, for example, helps turn these disasters into learning experiences and prevents them from recurring.


## Which Kind of Process Do You Need?

Like programming languages, processes are tools: the best one depends entirely on your goal. Despite what some “Agile consultants” like to preach, there is no one-size-fits-all solution. The kind of process that you most adopt is very context-dependent on your team.

A common mistake managers make is dictating processes without knowing the team well. This happens especially when managers join a team and try to follow a template. Sometimes, they want to operate the way their former team did or in a way they heard about on a podcast from a prestigious company.

If you want to succeed at implementing processes in a new team, you should first understand the current processes and why they came into existence in the first place, and only after should you aim to change them.

> There exists in such a case a certain institution or law; let us say, for the sake of simplicity, a fence or gate erected across a road. The more modern type of reformer goes gaily up to it and says, “I don’t see the use of this; let us clear it away.”
>To which the more intelligent type of reformer will do well to answer: “If you don’t see the use of it, I certainly won’t let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.”
> — G.K. Chesterton

When you understand why a process was implemented, the next step is to analyze whether it solves a bottleneck or *is* a bottleneck. Sometimes the same process which helped your team before can hinder it.

For example, let's say a team has too many bugs ending up in production. This creates a bottleneck: instead of shipping new features, the team is always going back to fix bugs. To solve this, the manager decides that engineers must QA each other's tickets before merging to production.

After a while, the team gets very good at detecting issues and even adds safeguards to the code to prevent common bugs from slipping through. Now, the process itself has become the bottleneck. The mandatory QA in every PR isn't catching many bugs anymore, but still takes a lot of your team's time, so it's time to remove it.

This applies to larger processes as well. For example, estimating the level of effort for individual tickets can be great for a new squad to understand its pacing. 

Initially, highlighting and discussing potential hurdles is valuable. But after a while, if everyone is already in consensus and these discussions bring no new insights, the process has served its purpose and can safely be removed.

Therefore, processes require ongoing attention. They aren't something you can set and forget, because the **perfect process today can become tomorrow's bottleneck**.

No process comes without tradeoffs, and time and team's attention is the biggest cost of any process, which leads to the next chapter…
