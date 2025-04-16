---
title: "What will you do?"
section: "Becoming"
slug: "what-should-engineering-managers-be-doing"
ready: true
---

# What should Engineering Managers be doing, anyway?

The engineering manager role differs widely across companies and even within the same organization. Some managers should code, and some shouldn't. As a manager, you will constantly ask yourself: What should I do to best help my team?

If we distill key manager responsibilities, they fall under four key pillars: **Product**, **Process**,**People**, and **Programming**.

Physical factors like team structure and logical factors, such as how the team operates, will reveal how much a pillar needs attention at a given time. Your focus should always be unevenly distributed across pillars based on where your team needs you the most.

![Manager responsibilities over time](/assets/chapters/chapter-5-intro.svg)

### Product - Shipping the right things

**Product is the most important pillar**—you can do everything right, but you will still fail if what you ship has no consumer impact.

Since the product is so important, some squads have people entirely dedicated to it, like a Product Manager (PM). But without a dedicated PM, you must fulfill their core responsibilities. No matter the situation, it falls on you to make sure that these responsibilities are accounted for. 

The core responsibilities of this pillar are:

- Ensure the right things are built. This can be done through consumer feedback, market research, or user validation. This reduces the risk of working on a feature that will deliver no impact.
- Ensuring that the critical features are being done first, and sorting priorities based on effort/impact. The result of this analysis is a product roadmap, which is built with alignment within the team to get accurate estimations.
- Communicating and maintaining the roadmap updates with stakeholders, giving visibility on what the team will deliver in the future and ensuring that it fulfills the demands brought by executives or clients. The roadmap will certainly change with discoveries that will either make you reassess the “effort” or the “impact” of the feature and, therefore, rearrange priorities.

Your core responsibility in this pillar will also involve opposing building some features — As a technical leader, you must measure the value delivered against the engineering cost. Non-technical people must rely on you to provide context on how hard something is to implement. This makes you responsible for evaluating whether a project is worth it.

### People - Building a healthy team

Team performance will gradually slow down if your engineers lose morale. You need to make sure that people feel supported. This pillar aims to have a team with great internal communication and keep the engineering performance bar high.

This pillar will also deal with hiring, your most important responsibility.

This factor will scale linearly with your team size. Each engineer on your team needs to receive feedback individually and ensure their needs are met. This attention will vary among engineers: some will have high ambitions, for example, becoming Staff Engineers, while others are happy completing tickets and being given autonomy.

A unique characteristic of this pillar is its sudden spikes in attention needed. This is due to things you cannot delegate, like performance review cycles, hiring, and performance improvement processes.

The good news is that this pillar will run smoothly without much attention once you build inertia and a capable team that trusts you. However, you must maintain a good rapport with your ICs and ensure they are cared for. This also means mentoring them and making sure they progress in their career.

### Process - Dividing and conquering

The core of the process pillar concerns breaking down a large project into tasks to be tackled by multiple engineers. And how those tasks will be consolidated into the final product. 

The decisions around the process result in the planning and ceremonies that the team will experience and how they communicate. The process varies a lot, and there are a lot of questions you need to ask yourself:

- Should you divide tasks ahead of time or let whoever is available take them? 
- Do you estimate the effort of each task ahead of time or the project as a whole? 
- How much information do you write down on the tickets? 
- What is the definition of done, Should it be tested by someone else before the task is considered complete? or/and should it be unit tested?
- How do we track progress from those tasks towards the larger delivery of value?
- How does the team communicate the progress and highlight blockers early?

There is no perfect way to answer these questions, and structuring this process will depend significantly on your team's configurations and the problem domain they face. Some companies will enforce certain constraints on the team's process, while others will give managers more freedom to decide. The more freedom you get, the better you can structure your team to success.

For example, if your project has contractual deadlines, your process must be oriented to reduce risks as much as possible. This requires extra attention since the team must balance the scope taken with the team's capacity and give conservative estimates. 

On the other hand, a starting team with few experienced engineers in a team can initially work with only a whiteboard and a checklist. Knowing your team's situation helps you guide toward an ideal process.

### Programming - A higher level approach

You are already familiar with this pillar, which is maintaining a healthy codebase and architecture. This is a comfort zone for newer managers, so it’s better not to dwell on it.

You should rely on your engineers to deliver features. You may occasionally contribute code, provided the other pillars are balanced, and your work is non-blocking to other engineers. However, if you have more than four engineers on your team, code should not be something you do daily. 

If coding, avoid committing to large critical tickets — situations requiring you to act as manager will appear and pull you away from delivering them. You will block the team from delivering. Therefore, don’t become the bottleneck.

As an Engineering Manager, focus on high-level aspects, like keeping technical debts in check and occasionally reviewing the project architecture.

![Where to go?](/assets/chapters/chapter-5-example.svg)

## Debugging your pillars

While there’s no definitive checklist for detecting improvement areas, a practical approach is to examine your software development lifecycle (SDLC). 

SDLC is a pipeline: It begins with deciding what to build, then creating the architecture plan, breaking that down into tasks, delivering those tasks through PRs, and testing them along the way. It ends with shipping the feature into production and its maintenance. 

There are many ways to set up your pipeline, each team thrives in a different form, and bottlenecks can happen at any stage.

This is why engineering managers must have technical expertise. They must identify and address challenges that require them to have experience in multiple SDLC configurations.

A non-exhaustive list of things you can ask yourself:


#### How do we decide what to build next?

While this can primarily come from user research (Product), sometimes hesitation to do things due to high technical costs (Programming) or resource constraints (People).


#### How good are we at executing ideas?

Some teams suffer from incorrectly estimating projects, which creates missing deadlines and unexpected additional work. Others thrive in proper planning before diving in and writing technical specs. The more people you have enrolled in the project, the more you need to plan. The effort also is higher the less seniority the team has. This involves checking if the focus should be on the Process or People.


#### Do we over-plan instead of executing?

This is mostly a Process issue, though it can also be caused by rigid top-down mandates (People) that require realignment.


#### Why are some engineers not productive?

Individual recurring issues could be addressed by giving feedback and mentorship (People) or resolving systemic inefficiencies (Process).


#### What delays shipping new work?

Look for recurring technical debt (Programming) or excessive bureaucracy (Process).


#### Do we build robust solutions or constantly revisit work?

Premature releases without getting traction due to a (Product) market misalignment, whereas technical problems might require the team to make it more scalable and robust (Programming).

#### Are we aligned on technical trade-offs?

For example, prioritizing speed over scalability (Programming) or sacrificing polish for deadlines (Product).


#### Are we proactively managing technical debt?

Ignoring debt (Programming) or failing to prioritize it (Process) can create compounding bottlenecks.

Now that we understand what the job needs to be done let's analyze approaches on how to deal with them, which leads us to the next chapter…

