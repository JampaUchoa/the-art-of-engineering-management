---
title: There is no free lunch when dealing with engineering processes 
section: Process
slug: theres-no-free-lunch-with-engineering-process
ready: true
---

# There is no free lunch when dealing with engineering processes

Now that we have learned that the software development process involves structured routines (like meetings, quality gates, tracking systems, triage rules) that help a team move from idea to production, our first instinct might be to apply a new process every time we see an inefficiency in the development cycle. But before we rush to add a new rule, we need to look at the other side of the coin: when a well-intentioned process becomes bureaucracy.

No process comes without tradeoffs. Every time your team follows a process, whether they're in a meeting, waiting for a quality gate to pass, or triaging bugs, it consumes time and attention that could be spent delivering work.

Many managers don't realize this hidden cost of adding a process. As a result, their teams suffer from "process bloat," where no one questions why they do what they do or why certain ceremonies still exist.

Process bloat creeps in slowly. For example, imagine an engineer gets careless and ships code with a bad UI to production. Designers complain, managers panic, and a new rule is dictated: every pull request must have a designer's approval.

Instead of holding the single engineer accountable for their carelessness, the manager has just slowed down the entire team to solve an isolated problem.

> Well the mistakes was that every time we had a significant error, sales call didn’t go well, a bug in the code. We tried to think about in terms of what process could we put in place to ensure that this doesn’t happen again and thereby improving the company. 
>
> And what we failed to understand is by dummy proofing all the systems that we would have a system where only dummies wanted to work there, which was exactly what happened. And so the average intellectual level fell.
>
> — Reed Hastings, Netflix CEO, on his first company, Pure Software.

Bad processes disempower your team, add bureaucracy, slow everyone down, and cause attrition. In the end, you need to ask yourself: **Does your process serve your delivery, or is it the other way around?**

The new design approval process might have been the right call if the problem was widespread. Instead, it was implemented for the lowest common denominator when it could have been solved with individual mentoring and feedback.

Another myth is that even if a process slows the team down, it will always have a worthwhile upside. This isn't always true. "It doesn’t hurt to try" can be famous last words. I've seen processes get implemented that signaled a lack of trust in engineers' skills, which became a one-way door to attrition.

> Good process serves you so you can serve customers. But if you're not watchful, the process can become the thing. This can happen very easily in large organizations. The process becomes the proxy for the result you want. You stop looking at outcomes and just make sure you're doing the process right.
>
> It's not that rare to hear a junior leader defend a bad outcome with something like, "Well, we followed the process." A more experienced leader will use it as an opportunity to investigate and improve the process. The process is not the thing. It's always worth asking, do we own the process or does the process own us?
>
> — Jeff Bezos, 2016 Letter to Shareholders

## What if a bad process is forced onto my team?

Every medium-to-large company has a "contract" between managers and leadership, a way for upper management to track whether a team is doing a good job without getting into the weeds.

For example, the CEO doesn’t need to know everything the salespeople do to close more deals; they just need the team to meet its sales target. The same principle applies to marketing and engineering.

This contract gives you freedom to manage, but you have to report up in a standard way. This is the "verify" part of the "trust but verify" mantra, and it often takes the form of KPIs and OKRs.

As an engineering manager, you'd think this means you have the autonomy to define your team's internal processes, and in the best companies, you do. But sometimes, processes that should be your call are dictated from the top down.

When dealing with top-down directives, you can either "sail into it" or "sail around it." If you think the decision is sound and applies to your team, like running QA checks before every release, then it's a no-brainer to adopt it.

But when you're handed a directive that seems absurd or excessive, you might need to find a way around it. It's common for managers to share war stories about "hacking" the process to get things done. It's absurd, but sometimes necessary.

For example, one team I knew shipped much faster than others, and everyone recognized it. However, seeing that some teams were slow, the CEO implemented a "sprint focus" metric that measured the ratio of completed tickets to committed tickets.

This meant that predictably slow teams scored better than ambitious teams that pulled in extra work after finishing their initial commitments. In the end, the faster team had two choices: slow down by adding more meetings and estimation processes, or simply game the system by removing unfinished tickets from the sprint right before it ended so they could keep moving fast.

## Analyzing Tradeoffs

Your process should be tailored to your team's specific context. One manager might say, “On my team, we have no process at all. Every engineer knows what to do and decides what to work on,” while another could say, “We estimate everything, discuss tickets ahead of time, and timebox our work.” Surprisingly, both managers might be right.

Even within the same department, each team might need to deviate from the company's "standard process." It's often good practice for a new team to start with a tighter process and loosen up as people learn to communicate more effectively.

How much process your team needs depends on several factors, but the biggest one is usually team size. The more people you have, the more you'll need to coordinate communication and spot bottlenecks early. Other factors also play a part, like how experienced your engineers are, how many stakeholders you need to keep happy, and how tight your deadlines are.

For example, a startup can move fast with minimal process because its team is small and full of senior engineers who are great at talking to each other and getting unstuck. On the other hand, a big company with contractual deadlines needs a solid process to deliver on time. For them, missing a deadline can mean losing millions of dollars, so they can't just wing it.

Therefore, you need to balance process complexity with the maxim that **the process exists to serve delivery**. The outcome of any process should be more stable and timely deliveries.

Managing processes doesn't have to be complicated. Fortunately, small process changes are often reversible, so you don’t need to make a big deal out of trying new things. By making minor corrections and iterating on them with your team’s feedback, you can reduce chaos and ensure gradual progress in the right direction.

## Sometimes, all you need is better tooling

Automation offers the best of both worlds: it allows you to add process without consuming your engineers' time and attention.

In the early days of the web, deploying an application could take an hour, and you had to follow every step carefully to ensure nothing went wrong. Nowadays, most of this is handled by CI/CD, automated backups, and testing and monitoring tools. And these tools do a much better job than we ever could manually.

Automation can bring minor improvements that compound quickly. For example, an engineer shouldn't have to waste brainpower moving a Jira card after creating a pull request. This can be automated. What used to take 5 minutes of every engineer's day and a context switch now takes no time at all.

Look for bottlenecks on your team and see if you can automate them. Are there endless discussions about code styling in pull requests? Add a lint rule. Are bug reports coming in through Email? Add a ticketing bot to triage them. All these small gains will compound and free up your team to do what they do best.


