---
title: Avoiding product “derails”
section: Product
slug: avoiding-product-derails
ready: true
---

# Avoiding product “derails”

Imagine your engineering team as a train. Their delivery rate is the train's speed, and the product roadmap is the railroad. If your team ships features faster than you can plan, you will derail.

![A train approaching a derailment](/assets/chapters/chapter-7-train.svg)

Delivering faster than planning is always a fortunate situation, but unfortunately, it will also stress you out: While finishing early is nice, you can’t just grant “a collective vacation until the product team has new work ready,” as much as I like to joke about it.

Engineers hate idling, too. When an engineer messages me, "No new tickets, what should I do?" I know the clock is ticking until the rest of the team finishes their current tickets and asks the same thing.

So, what is a track exactly? In the best-case scenario, it's simply knowing what to build next.

However, your team usually can't start coding immediately if there are dependencies. For example, if a designer must work on a feature first. Sometimes, you might depend on another engineering team to provide a specific tooling first. 

![Laying tracks](/assets/chapters/chapter-7-tracks.svg)

Ideally, your roadmap should be defined at least six weeks out, with dependencies resolved three weeks before engineering work begins. This will help you know in advance if a derailment is coming and plan accordingly when something might be delayed.

## What happens when you derail

It is scary when your team has nothing to work on and the upper leadership doesn't know either. People will start fearing for their jobs and lose trust in the company. That is why finding new things to do is so important for team morale. 

You might think that finding new things to do should be primarily the PM's / upper leadership's role, and you’re correct, but sometimes they can drop the ball. Since this affects your whole squad's morale and possibly their jobs, you need to start immediately. 

The situation where you must take control of a product is rare but inevitable. For example, leadership is busy with another project. Sometimes, a PM leaves, and another has to cover a lot of squads. It comes to a time in an engineer manager's career when they must put on their PM shoes and lay tracks themselves.

Getting out of this situation won't be easy, because even when you find new projects, your team will not start coding immediately. To gain time until the future projects are ready for engineering, you can find new immediate work by having technical brainstorming sessions and bug bashes within your team.


## Creating new tracks

### Asking for external help
If you feel your product roadmap is nearing its end, the easiest thing to do is ask your PM or your director for suggestions. Sometimes, they don't have a clear answer, but they can help you by pointing you toward problems.


### Opportunity for tackling tech debts
If you can assemble your roadmap, this is also an opportunity to address tech debt and make architectural improvements, not just to develop new product features.

You can start by asking engineers during 1:1s about their thoughts on current projects, what tasks consume most of their time, and the parts of the codebase they find most frustrating. Your engineers can answer these questions quickly (and passionately), especially your most senior ones.

You can also do this research by reviewing system metrics and areas where bug reports are most frequent.
Tackling tech debt as part of the roadmap can take some convincing, especially in companies not primarily driven by technology. In such cases, you must advocate for it by highlighting its positive second-order effects. 

For example, instead of saying, "We will refactor this to make the code less confusing," try: "We will improve this area to reduce future regression bugs for our customers."

### Seeking Externally

All software is built for someone, so building in a vacuum comes with a significant risk. You will need to identify the ideal customer profile, reach out to them to understand their existing workflows, and seek feedback from your end-users. This method is the most impactful but also requires the most work. 

It's not simple because you can't just send a message to your user asking, “Hey, what should we do?” Nor can you come up with an idea and ask, “Hey, would you use &lt;x> feature?” Users are more likely to say yes to everything to avoid hurting your feelings, and often, they aren't even consciously aware of all their problems.

So, what do you do? You must move the conversation away from your idea and towards their routine. Focus on their past experiences and current behaviors:

* Ask about specifics: "Tell me about the last time you tried to [accomplish a task related to your idea]?"
* Dig into their existing workflow: "What tools are you using for that now? And how do you use it?"
* Focus on pain points: "What was the hardest or most frustrating part of this process?" "How much time/money does that currently cost you?"
* Listen for struggles, not solutions: Pay attention to the complaints and the ways in which people work around those issues.
This requires way more work than a simple survey, but by focusing on concrete past events and real struggles, you uncover the problems worth solving. You're mining for needs they demonstrate, not just opinions they offer politely.

That's how you build something people will actually use and potentially pay for, and that's why putting in this work is invaluable.

