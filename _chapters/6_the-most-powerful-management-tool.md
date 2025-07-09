---
title: 1-on-1 - The most powerful management tool
description: What makes a good 1-on-1 (and where some managers get it wrong)
section: Becoming
slug: 1-1s-the-most-powerful-management-tool
ready: true
---

# What makes a good 1-on-1 (and where some managers get it wrong)

The 1:1 is the most valuable tool in a manager’s toolkit. If a doctor has a stethoscope as a symbol and a mechanic has a wrench, then the 1:1 is the engineering manager’s signature.

While a 1:1 is simply a private meeting between two people at the surface, when done effectively, it enables you to surface issues before they become significant problems. 

These conversations will guide you toward what you should focus on as an engineering manager.

In the next chapters, we will visit places where we can extensively apply what we learn in our 1:1s, so it’s crucial to understand how to use them effectively and, most importantly, common pitfalls to avoid.

## The reason for 1:1s

The key objectives of 1:1s are to **learn from your engineers** and **make them feel heard**. These meetings allow for conversations that often wouldn’t surface in a group setting.

This happens because engineers can sense some issues long before a manager does. During a short stint in consulting, I learned that the quickest way to understand what was happening in a dysfunctional organization was to talk with the senior engineers.

Talking with engineers directly gives you a heads-up on possible bottlenecks before they become major issues. They interact with the code daily and live through the delivery process set, so they can sense problems before their manager does.

Some might argue that these problems should be discussed in other team meetings, like retrospectives. Still, they don't. This can be due to multiple reasons, such as introversion, others feeling an issue might be too small to mention in a group setting, and sometimes people don’t realize what they’re facing is a symptom of a larger problem.

Minor problems can go unnoticed until they become huge. This is the “boiling frog” scenario from the old story about a frog that won’t jump out of water if the temperature increases slowly.

Once, an engineer casually mentioned in a 1:1 that they were getting 3-5 false alarms daily while doing on-calls. I was surprised that the team tolerated so much disruption, especially since they had the autonomy to fix the issue. He said, “It was manageable initially, and we just got used to it.” After fixing the problem, no one wanted to return to having so many false alarms.


## What You Should Talk About


## In an effective 1:1, your conversations will cover two main areas:

**Engineer’s Morale (Make them feel heard):**



* What makes their work meaningful, and what personal satisfaction do they hope to bring from their roles, for example: Do they want to improve their architecture skills, see the feature they are working on to be praised by users, or simply enjoy coding new things?
* Discuss their feelings about the current project. Do they understand what’s being asked of them? Do they feel their work is having a positive impact?
* Find out what part of the shipping code excites them: Some engineers want to squash every bug they see, some want to move fast, while others wish for the project to move toward cleaner code.
* Know if they are bought into the project's overall mission and how they feel about upcoming ones.
* Discover how they feel about working with the people they collaborate with, both within the team and across the company.
* Talk about whether they feel they are growing in their role and if the company is helping them advance their career.

**Roadblocks (Learn from your engineers):**



* Technical problems that interrupt delivery, like poor tooling or tech debt. For example, are there libraries that are common root causes of our bugs or any areas where they think we’re reinventing the wheel?
* Unexpected firefighting. Is production almost going down frequently? Are there too many incident pages or critical bug reports?
* Things that frequently become a bottleneck for them, like a flaky CI/CD pipeline or PRs that take too long to be reviewed.
* Non-technical roadblocks, like meeting fatigue, frustrating processes, or too much bureaucracy in the software development lifecycle.

Learning these things takes time, so don’t rush through these topics. As you build trust, the nature of these conversations will evolve.

When deciding which topics to cover, aim for the conversation to be relevant to what’s happening on the team, such as future projects during roadmap planning. In the middle of a quarter, the conversation will likely steer more toward their feelings about the ongoing work and technical roadblocks they are facing.

With that said, not all the 1:1 conversations need to fit the objectives above, especially if things are going well. Sometimes, you can relax and build rapport by discussing random topics like cars, pets, or vacations.


## Starting Conversations

Display genuine curiosity with broad, open-ended questions, and the other person will soon dive into topics they’re passionate about.

Let them drive the agenda first. If they want to start the conversation by talking about their upcoming trip or their cat, that’s perfectly fine: it’s their meeting, after all. Some people will want to spend more time on personal topics, which are good icebreakers. However, gently guide the conversation toward the professional context so you don’t just chit-chat.

You’ll notice that the “difficulty” of a 1:1 varies between individuals. With some engineers, you’ll feel like you could talk for hours. Others might not open up as much, leaving you feeling like you’ve run out of topics in 15 minutes. They might answer with short, direct answers as if they’re being interrogated.

At first, this might feel awkward. Don’t take it personally. If an engineer doesn’t talk much, it doesn’t mean they don’t like you. They will likely become more comfortable and open up with time and consistency.


## Practice your listening skills

A common mistake managers make is thinking every complaint they hear in a 1:1 requires them to take action. Sometimes, your report will mention something you have little control over. 

While you often have the power to fix things, sometimes people just need to vent. The most important thing you can do in those moments is to listen and empathize.

For example, if they complain, “The client doesn’t know what they want and keeps changing the requirements. This sucks!” don’t feel obliged to change their mind or, worse, deny the problem exists. You can offer different perspectives to challenge their view, but don’t defend positions you don’t believe in—they won’t believe you, either.

A better approach is to explore workarounds if the core issue can’t be solved directly. For example, “Let’s bring in someone to help mediate," or "How can we create a better process for clients like this to get them to commit?"

Simply practicing empathy and trying to see things from their perspective goes a long way toward building trust.


## What NOT to Do

While researching this chapter, I was surprised to find that some managers despise 1:1s and even more surprised that some don’t do them at all.

A common reason people dislike 1:1s is that they feel their 1:1s are unproductive, scripted conversations in which nothing meaningful is discussed.

This problem is almost always due to the manager’s approach: conducting the 1:1 like a scripted meeting, which fails to create a safe environment for open feedback.


#### 1:1s are NOT for status updates.

Using 1:1s for status updates is inefficient and misses the entire point. Would you make a team-wide announcement one direct message at a time?

Status updates belong in a team setting where everyone gets the information at once. Reporting status only to a manager creates information silos.


#### 1:1s are NOT for *all* feedback.

While 1:1s are a place for feedback, you don’t need to give it in every single session. After an engineer is onboarded, their performance doesn’t change dramatically from week to week, so constant feedback is often overkill.

So, what if an engineer messes up and feedback is needed? Should you give it the next 1:1? Well, No. For timely feedback on a specific incident, it’s better to address it **privately** soon after it happens.

Feedback in 1:1s should focus on bigger-picture topics, like breaking a destructive pattern over time or giving positive reinforcement for an area you’d like to see them grow in (more on this in a later chapter).

You want people to be excited about their 1:1s so they open up. If they expect the meeting to be a review of “everything I did wrong in the last two weeks,” they will dread it.


#### 1:1s are NOT about following a checklist.

Templates for 1:1s can be good conversation starters, but they shouldn’t be scripts. If you over-rely on a template, your reports will feel like the 1:1 is just an HR mandate and that you don’t care to be there.

Let the engineers drive the meeting and talk about what’s on their minds, using opening questions as a medium to get to that. If they don’t have an agenda, you can ask questions about the current team experience to get started. When they show excitement for a relevant topic, dive into it.


#### 1:1s are NOT about… You!

Let them talk most of the time unless you have an urgent topic to discuss.

Some managers feel the need to fill every moment of silence, but the 1:1 is the report’s meeting, not the manager’s. As a rule of thumb, it's a wasted opportunity if you talk more than they do.

If the conversation drifts into one of these anti-patterns, you don’t need to shut it down. Just steer it in the right direction. For example, when an engineer gives me a status update in a 1:1, I don’t ask for more details. Instead, I take the opportunity to ask how they *felt* about that work.


## What About 1:1s with Non-Reports?

1:1s with non-reports are usually much more relaxed. In a manager-report 1:1, a suggestion can sometimes be perceived as a command, so you need to be nuanced. With peers, you can be more direct with your opinions.

With non-reports on your team, like a designer or staff engineer, these meetings are an opportunity to get an “insider-outsider” perspective on your team and discuss subjects that affect you both in a private setting.

1:1s with people on other teams give you a window into what other squads are doing, helping you find opportunities for your team to help or benefit from their initiatives.

With other peers, 1:1s are great for getting advice and a peer’s opinion on an action you’re considering.


## Cadence

Not everyone needs a weekly 1:1, nor does everyone need the same frequency. If your 1:1s feel unproductive, increase the time between them. On the other hand, if you often have to end them abruptly because you’ve run out of time, increase their frequency or length.

No matter the pace, 1:1s should be predictable. Never make a habit of canceling them, especially with your reports. Always try to reschedule rather than cancel. You should never be too busy for your engineers.
