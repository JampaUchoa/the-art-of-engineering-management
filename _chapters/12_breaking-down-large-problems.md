---
title: "Breaking Down Large Problems and Prioritizing the Right Things"
section: Roadmap
slug: breaking-down-large-problems
ready: false
---

# Breaking down large problems and prioritizing the right things

The longer your team exists, the more likely you will see feature requests pile up. While this is often a sign of success, it can quickly become overwhelming. This scenario is the opposite of [product derailment](/chapters/8/avoiding-product-derailment). Instead of searching for work, your team is swamped with potential new features.

Feature requests come in many forms. They can be abstract, like a CEO saying, “Let's build our own content distribution store,” which requires a lot of refinement. Or, they can be very specific, like, “Every day, we need to send a PDF listing all company actions from that day.”

The challenge is deciding which requests to prioritize, since taking on every project usually isn't an option. And even if you could, it's crucial to confirm that each feature will actually deliver on its promised value.

## Triaging Feature Requests

Every request needs to be triaged to see if it makes sense before a single line of code is written. It's important for the entire team, not just the manager, to understand what's driving the demand. This helps everyone define the scope in a way that maximizes the value delivered.

### First question: Why?

Your Product Manager is usually responsible for investigating the "why," extracting potential value, and figuring out how the product can deliver it. But [as we've seen](/chapters/7/the-engineering-role-in-shaping-product), every engineer must understand the product to be effective.

The *why* helps you measure the potential **impact** of a feature when it is shipped, whether this translates to customer engagement, productivity, or direct revenue.

### Second question: How hard?

Every feature has a cost, not just to develop, but also to maintain over time. Researching and presenting these costs is a core engineering responsibility. This **effort** depends heavily on the team's existing tools and knowledge.

For example, consider a feature like “send a welcome email when a user registers.” The effort depends on whether you already have an email system configured with templates and alerts. If you do, an engineer might knock this out in an afternoon. But if you're working with a legacy codebase and no existing system, you'll need to refine the scope with questions like, “How much design work do these emails need?” or “Is this a one-off email, or will we have other features that need emails too?”

## Distilling Impact

Now that we know both the **effort** and the **impact**, the “if and when” of implementing a feature becomes clearer.

But before we start committing to projects, we must ask ourselves: “How can we reduce the **effort** on this project while maintaining most of the **impact?**”

## A Practical Example

Let's take the project **"Build our own internal store where users can share content."** As an example, let's start with the first question:

> **Why?:** Our company builds accessibility tools. We allow users (parents and teachers) to create *Communication Boards* for non-verbal children. We've noticed a usage gap: some users create amazing, high-quality boards on their tablets and see great success, while others struggle. 
> 
> We want to help newer users by giving them access to great content, even if they don't know how to create it themselves. Also, since not everyone has constant access to a tablet, allowing users to create content on the web would be a huge plus.

After thinking this through, the team sketches a plan: "Alright, for this, we can build a new section in our app where users create and upload boards, and another where they can download them."

But we're dealing with User-Generated Content (UGC), specifically for children. With UGC, spam and abuse are always a risk, which means you'll need moderation tools. On the bright side, even though we're calling it a "store," it won't sell anything, so you can scrap any plans for a payment system.

Now that we've aligned the **scope**, let's draft a plan for the full-blown version of the store, which helps us answer the second question, and measure impact better:

![Feature requirements diagram showing the complexity of building a complete content store with user-generated content, moderation, and web interface](/assets/chapters/chapter-12-problem.svg)

That’s a lot of tools to build, especially since we're starting from scratch. Moving from product requirements to architecture, we can list all the systems needed to ship the complete version.

![Technical architecture diagram showing all the systems needed: user management, content upload/download, moderation tools, web interface, and database systems](/assets/chapters/chapter-12-tools.svg)

But then you should stop and ask: what is the core impact we're after? Right now, your store has no users, no creators, and indeed no content. 

So, instead of building every system and merely *hoping* for adoption, why not **distill the impact**—"help users access high-quality content"—and reduce the **effort**?

Since you already know some users have created high-quality content, why not contact a few of them, get their permission, and publish the first boards yourself?

![Version 1 implementation plan showing a simplified approach with manually curated content, bypassing complex user-generated content systems](/assets/chapters/chapter-12-v1-plan.svg)

You might be thinking, "But that doesn't scale! Someone has to manually add all the content, which isn't sustainable." You're right, it doesn't scale. But right now, your goal isn’t to scale - it’s to prove the core idea has value.

This approach solves the classic *chicken-and-egg problem*: even if you magically launched the entire platform tomorrow, you'd still have to attract creators and consumers. Your first users would arrive to find an empty store.

Airbnb famously got started by doing things that don't scale. In its early days, the founders would find listings on Craigslist, hire professional photographers to take much better photos, and then post those improved listings on their own site.

You can release this first feature immediately and gain a steady stream of users while you build the next iteration, which will focus on creators and allow them to submit their own content.

![Version 2 implementation plan building on V1 success, adding creator tools and user submission capabilities while maintaining proven value](/assets/chapters/chapter-12-v2-plan.svg)

Now that you're serving both consumers and creators, your team has **validated** the core idea, measured demand, and developed a much better understanding of your users. This is the point where you can decide to pivot or invest more deeply. 

You'll likely adjust the original plan based on user feedback, as you now understand the problem space better. The sooner you ship, the sooner you can start validating. 

Many of your initial assumptions will be proven wrong by user feedback, while new demands you never anticipated will emerge.

![Next steps diagram showing how user feedback and validation drive iterative improvements and feature prioritization](/assets/chapters/chapter-12-next-steps.svg)

The key takeaway here is that the impact/effort ratio isn't set in stone. 

If you can reduce the effort while maintaining most of the impact, you can ship your solution earlier and start delivering value much faster. Sometimes, the best solution involves writing less code, not more.

## Balancing the Goals

Another way to visualize what's important and decide what to tackle first is by using a prioritization matrix:

![Prioritization matrix with Impact on Y-axis and Effort on X-axis, showing four quadrants: Quick Wins, Big Bets, Time Sinks, and Grab Bags](/assets/chapters/chapter-12-prio-matrix.svg)

Placing items on the matrix can be subjective. Holding a prioritization meeting with the whole team is a great way to align on what's impactful and allows engineers to discuss technical difficulties together.

After completing a prioritization exercise, features will fall into four classifications:

**Quick Wins:** These are the low-hanging fruit—high-impact, low-effort tasks you can tackle immediately to deliver value quickly. In our example, simply listing the initial content would be a quick win—it just requires a basic page with a name, description, and picture.

**Big Bets:** These are the high-impact, high-effort initiatives that will consume most of your team's time. Before starting a big bet, make sure it's well-planned, properly refined, and can't be broken down into smaller, more manageable pieces.

**Grab Bags:** These are low-impact, low-effort tasks worth keeping in the backlog. They’re great filler when there's no other immediate work or can be good onboarding tasks for new engineers. You can include them in sprints as low-priority items to ensure you don't run out of tickets.

**Time Sinks:** These are low-impact, high-effort items you should avoid. Discard them for now, or look for ways to reduce their effort. A sophisticated search feature (with fuzzy matching or semantics) is a time sink in our store example: It's not trivial to build, and its impact is low when you only have a few pieces of content. However, as more content is added, its impact will grow, and it might move into the "Big Bets" quadrant.

![Prioritization matrix example showing specific features mapped to quadrants: content listing as Quick Win, full platform as Big Bet, basic search as Grab Bag, and advanced search as Time Sink](/assets/chapters/chapter-12-prio-matrix-slice.svg)