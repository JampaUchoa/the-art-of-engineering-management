---
title: "What will you do?"
section: "Becoming"
slug: "what-should-engineering-managers-be-doing"
ready: true
---

# What should Engineering Managers be doing, anyway?

The engineering manager role differs widely across companies and even within the same organization. Some managers code, and some don't. As a manager, you'll constantly ask yourself: What should I do to best help my team?

To answer that question, it helps to think about the key areas managers influence. These generally fall under four pillars: **Product**, **Process**, **People**, and **Programming**.

Things like your team's structure, their experience level, and the projects they're working on will determine which pillar needs the most attention at any given time. Your focus should always shift across these pillars based on where your team needs you the most.

![Manager responsibilities over time](/assets/chapters/chapter-5-intro.svg)

### Product

**Product is the most important pillar**—you can do everything else right, but if what you ship doesn't have an impact on users, the team won't succeed.

Because the product is so vital, some teams have people entirely dedicated to it, like a Product Manager (PM). If your team doesn't have a dedicated PM, you will need to act as one. Either way someone needs to cover this aspect.

The core responsibilities of this pillar are:

-   **Ensuring the right things are built.** This involves gathering user feedback, doing market research, or validating ideas with users. It reduces the risk of working on features that deliver no value.
-   **Ensure critical features get done first.** This means sorting priorities based on effort versus impact and getting value sooner to the user. The output of this sorting becomes a product roadmap, which is usually built *together* with the team to get accurate estimates.
-   **Communicate the roadmap and keep stakeholders updated.** Give visibility to executives / clients on the team plans and ensure it meets their needs. Rebalance priorities as you learn new information, which can change your assessment of a feature's effort and impact.

A key part of this pillar is also knowing when to **push back on building certain features**. As a technical leader, you need to weigh the potential value against the engineering effort involved. Non-technical people rely on you to provide context on how difficult something is to implement. This makes you responsible for evaluating whether a project is truly worth the cost.

### People

Team performance can gradually slow down if your engineers lose morale or feel unsupported. This pillar focuses on building a supportive environment where communication flows well and the team maintains a high bar for engineering performance.

The amount of attention this pillar requires scales directly with your team size. Each engineer on your team needs individual feedback, and you need to ensure their needs are met. This focus will vary among engineers: some have high ambitions (like becoming Staff Engineers), while others are happy completing tickets and value having autonomy.

A unique characteristic of this pillar is that it sometimes requires sudden spikes of attention. This is due to tasks you can't delegate, like performance review cycles, managing performance improvement and hiring interviews.

The good news is that once you build momentum with a capable team that trusts you, this pillar can often run smoothly without constant attention. However, you must maintain a good rapport with your engineers, ensure they feel supported and recognize you as a mentor.

### Process

The core of the process pillar is about breaking down large projects into tasks that multiple engineers can tackle, and figuring out how those tasks come together to create the final product.

Your decisions here shape the team's planning, meetings (or "ceremonies"), and communication methods. The process varies a lot, and there are many questions you need to ask yourself:

-   Should you divide tasks ahead of time, or let whoever is available pick them up?
-   Do you estimate the effort for each task (points) or for the whole project (weeks)?
-   How much detail do you write down in the tickets?
-   What is the definition of "done"? Should code be tested by someone else before a task is considered complete? Should it include unit tests?
-   How do we track task progress towards the overall goal?
-   How does the team communicate progress and highlight blockers early?

There's no single perfect way to answer these questions. Structuring the right process depends heavily on your team's makeup and the types of problems they solve. Some companies enforce certain process constraints, while others give managers more freedom. The more freedom you have, the better you can tailor the process to help your team succeed.

For example, if your project has firm deadlines (like contractual obligations), your process must focus on reducing risks as much as possible. This requires extra attention to balance the scope the team takes on with their capacity and to provide conservative estimates.

On the other hand, a new team with less experienced engineers might initially just need a whiteboard and a checklist. Knowing your team's specific situation helps you guide them toward an ideal process.

### Programming

You're likely already familiar with this pillar: maintaining a healthy codebase and architecture. Since this is often a comfort zone for new managers moving from technical roles, be mindful not to focus *too much* here at the expense of other pillars.

You should rely on your engineers to deliver features. You might occasionally contribute code, but only if the other pillars are in good shape and your coding doesn't block other engineers. However, if you have more than four engineers on your team, coding likely shouldn't be a daily activity.

If you do code, avoid taking on large, critical tickets. Situations requiring you to act as a manager will inevitably pull you away, and you risk blocking the team's progress. Don’t become the bottleneck.

As an Engineering Manager, your focus in this pillar should be on higher-level aspects, like keeping technical debt in check and occasionally reviewing the project's architecture.

![Where to go?](/assets/chapters/chapter-5-example.svg)

## Debugging your pillars

While there’s no definitive checklist for finding areas for improvement, a practical approach is to examine your team's software development lifecycle (SDLC).

Think of the SDLC as a pipeline: It starts with deciding what to build, moves to creating an architecture plan, breaking that into tasks, delivering those tasks (often via code reviews or Pull Requests), and testing along the way. It ends with shipping the feature to production and maintaining it afterward.

There are many ways to set up this pipeline, and each team thrives with a different setup. Bottlenecks can happen at any stage.

This is why engineering managers benefit from technical expertise. They need to identify and address challenges, which often requires understanding different ways development lifecycles can work.

Here's a list of questions you can ask yourself to pinpoint potential issues (it's not exhaustive!):

#### How do we decide what to build next?

Is the bottleneck primarily related to user research (**Product**)? Or is the team hesitant because of high technical costs (**Programming**) or not having the right people/skills (**People**)?

#### How good are we at executing ideas?

Do estimates tend to be inaccurate, leading to missed deadlines or extra work? Does the team plan effectively before coding? (More people involved or less experienced teams usually need more planning effort.) Poor estimation or planning often points to **Process** issues, but could also relate to team skill mix or experience (**People**).

#### Do we over-plan instead of executing?

This is often a **Process** issue, though it might stem from rigid top-down mandates (a **People** aspect which needs managing up) that hinder agility.

#### Why are some engineers less productive than expected?

Recurring individual issues might require feedback and mentorship (**People**), while systemic problems could point to inefficiencies in the workflow (**Process**).

#### What delays shipping new work?

Look for recurring technical debt slowing things down (**Programming**) or too much bureaucracy (**Process**).

#### Do we build robust solutions, or are we constantly revisiting old work?

Are releases failing to gain traction due to market misalignment (**Product**)? Or are technical shortcomings forcing rework to make solutions more scalable or robust (**Programming**)?

#### Are we aligned on technical trade-offs?

Is there agreement on choices like prioritizing speed over scalability (**Programming**) or sacrificing polish to meet deadlines (**Product**)?

#### Are we proactively managing technical debt?

Ignoring debt (**Programming**) or failing to prioritize paying it down (**Process**) can create compounding bottlenecks later.

Now that we understand the key responsibilities, let's explore *how* to tackle them in the next chapter…