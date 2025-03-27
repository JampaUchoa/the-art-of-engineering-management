---
title: "What should Engineering Managers be doing"
section: "Becoming"
ready: true
---

# What should Engineering Managers be doing, anyway?

The engineering manager role differs widely across companies and even within the same organization. Some managers should code, and some shouldn't. As a manager, you will constantly ask yourself: What should I do to best help my team?

If we distill key manager responsibilities, they fall under four key pillars: **Product**, **Process**,**People**, and **Programming**.

Physical factors (team structure) and logical factors (how the team operates) reveal how much a pillar needs attention at a given time. Your will focus should always be **unevenly distributed** across pillars, based on where your team needs you the most.

![Manager responsibilities over time](/assets/chapters/chapter-5-intro.svg)

### Product

This pillar is about ensuring that you are shipping the right thing. **Product is the most** **important pillar**—it doesn't matter that you deliver the best and most organized code if its result doesn't bring value to your customers.

Your core responsibility in this pillar involves opposing building some features, even when your CEO requests it. As a technical leader, you must measure the value delivered against the engineering cost. 

Non-technical people must rely on you to provide context on how hard something is to implement. This makes you responsible for evaluating whether a project is worth it.

Since the product is so important, some squads have people entirely dedicated to it, like a Product Manager (PM). If there is no dedicated PM, you must fulfill their core responsibilities. 

PMs are there to ensure the right things are built (by reaching stakeholders), sort priorities based on effort/rewards to get quicker wins (by creating a roadmap), and hold the team accountable for those deliveries (by communicating roadmap updates with stakeholders). 


### Programming

You are already familiar with what this pillar entails: coding and architecture. For newer managers, this is a comfort zone, so it’s better not to dwell on it.

You should rely on your engineers to deliver features. Focus on high-level aspects, like keeping technical debts in check and occasionally reviewing the project architecture.

You may occasionally contribute code, provided the other pillars are balanced and your work is non-blocking to other engineers. However, if you have more than four engineers on your team, code should not be something you do daily. 

If coding, avoid committing to large critical tickets — situations requiring you to act as manager will appear and pull you away from delivering them. You will block the team from delivering. Therefore, don’t become the bottleneck.


### People

Team performance will gradually slow down if your engineers lose morale. You need to make sure that people feel supported. The objective of this pillar is to have a team with great internal communication and to keep the engineering performance bar high. This pillar will also deal with hiring, your most important responsibility.

This factor will scale linearly with your team size. Each engineer on your team needs to receive feedback individually and ensure that their needs are attended to, which will vary between engineers.

A unique characteristic of this pillar is its sudden spikes in attention needed. This is due to things you cannot delegate, like performance review cycles, hiring, and performance improvement processes. The good news is that once you build inertia and a capable team that trusts you, this pillar will be running smoothly without much attention.


### Process

Every large project needs to be broken down into smaller tasks that define what needs to be delivered and how this delivery should be tested and deployed. These tasks will be distributed among team members, who will tackle them independently most of the time. Your responsibility is to make sure that this happens smoothly.

If your project has contractual deadlines, your process must be oriented to reduce risks as much as possible. This requires extra attention since the team must balance the scope, team capacity, and deadlines. 

If your squad depends on or depends on another team, you must ensure that communication is running smoothly and that both teams have intertwined processes.

On the other hand, a starting company with no enterprise clients can initially work with only a whiteboard and a checklist. Knowing your team's situation helps you guide towards a lean process.

![Where to go?](/assets/chapters/chapter-5-example.svg)

## Putting problems into pillars

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
