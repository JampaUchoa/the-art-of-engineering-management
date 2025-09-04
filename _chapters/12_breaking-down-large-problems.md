---
title: "Breaking Down Large Problems and Prioritizing the Right Things"
section: Roadmap
slug: breaking-down-large-problems
ready: true
---

# Breaking down large problems and prioritizing the right things

Feature requests pile up as your team matures—a sign of success that quickly becomes overwhelming. These requests range from abstract ideas like "Let's build our own content distribution store" to specific demands like "Send a daily PDF of all company actions." The challenge lies in choosing which requests deserve your team's limited bandwidth.

![Options on where to go](/assets/chapters/chapter-12-intro.svg)

## Triaging Feature Requests

Every request needs to be triaged to determine if it makes sense before writing a single line of code. It's important for the entire team to understand what's driving the demand to define scope in a way that maximizes delivered value.

### First question: Why?

Your Product Manager is typically responsible for investigating the "why," extracting potential value, and determining how the product can deliver it. But [as we've seen](/chapters/7/the-engineering-role-in-shaping-product), every engineer must understand the product to be effective.

The *why* helps you measure the potential **impact** of a feature when it is shipped, whether this translates to customer engagement, productivity, or direct revenue.

### Second question: How hard?

Every feature has a cost (development and maintenance). Knowing what these costs are is a core engineering responsibility. This **effort** depends heavily on the team's existing tools and knowledge.

For example, consider a feature like "send a welcome email when a user registers." The effort depends on whether you already have an email system configured with templates and alerts. If you do, an engineer might complete this in an afternoon. But if you're working with a legacy codebase and no existing system, you'll need to refine the scope with questions like "How much design work do these emails need?" or "Is this a one-off email, or will we have other features that need emails too?"

### Distilling Impact

Now that we know both the **effort** and the **impact**, the “if and when” of implementing a feature becomes clearer.

But before committing to projects, we must ask ourselves: "How can we reduce the **effort** on this project while maintaining most of the **impact**?"

## Prioritization Framework

To systematically evaluate features, we can create a prioritization matrix that plots **Impact** against **Effort**:

![Prioritization matrix with Impact on Y-axis and Effort on X-axis, showing four quadrants: Quick Wins, Big Bets, Time Sinks, and Grab Bags](/assets/chapters/chapter-12-prio-matrix.svg)

This framework helps identify the best opportunities by categorizing features into four types:

**Quick Wins:** High-impact, low-effort tasks you can tackle immediately to deliver value quickly.

**Big Bets:** High-impact, high-effort initiatives that will consume most of your team's time. Before starting a big bet, ensure it's well-planned, properly refined, and can't be broken down into smaller pieces.

**Grab Bags:** Low-impact, low-effort tasks worth keeping in the backlog as filler work or onboarding tasks for new engineers.

**Time Sinks:** Low-impact, high-effort items you should avoid. Discard them for now, or find ways to reduce their effort.

Placing items on the matrix can be subjective. Holding a prioritization meeting with the whole team is a great way to align on what's impactful and allows engineers to discuss technical difficulties together.

# A Practical Example

Let's apply this framework to a real project: **"Build our app's content distribution store."** We'll start with the first question:

> **Why**: Our company builds accessibility tools. We allow users (parents and teachers) to create *Communication Boards* for non-verbal children. We've noticed a usage gap: some users create amazing, high-quality boards on their tablets and see great success, while others struggle. 
> 
> We want to help newer users by giving them access to great content, even if they don't know how to create it themselves. Also, since not everyone has constant access to a tablet, allowing users to create content on the web would be a huge advantage.

After thinking this through, the team sketches a plan: "We can build a new section in our app where users create and upload boards, and another section where they can download them."

Since we're dealing with User-Generated Content for children, we'll need moderation tools, though we can eliminate payment systems since our "store" goal is not to sell anything.

## Mapping the user flow

To understand the full scope, let's map out what the complete solution would require:

![Feature requirements diagram showing the complexity of building a complete content store with user-generated content, moderation, and web interface](/assets/chapters/chapter-12-problem.svg)

![Technical architecture diagram showing all the systems needed: user management, content upload/download, moderation tools, web interface, and database systems](/assets/chapters/chapter-12-tools.svg)

But then you should stop and ask: what is the core impact we're after? Right now, your store has no users, no creators, and no content. 

## Doing what matters first

So, instead of building every system and merely *hoping* for adoption, why not **distill the impact**—"help users access high-quality content"—and reduce the **effort**?

Applying our prioritization framework, we can map specific features to each quadrant. Once plotted, we can draw diagonal slices to define release boundaries. Each slice represents a deliverable version that combines features to maximize value delivery:

![Prioritization matrix example showing specific features mapped to quadrants with slice lines defining release boundaries](/assets/chapters/chapter-12-prio-matrix-slice.svg)


### Minimum Viable Product

Our first slice focuses on proving the core value with minimal effort. Since we already know some users have created high-quality content, why not contact a few of them, get their permission, and publish the first boards yourself?

![Version 1 implementation plan showing a simplified approach with manually curated content, bypassing complex user-generated content systems](/assets/chapters/chapter-12-v1-plan.svg)

You might be thinking, "But that doesn't scale! Someone has to manually add all the content, which isn't sustainable." You're right—it doesn't scale. But right now, your goal isn't to scale; it's to prove the core idea has value.

This approach solves the classic *chicken-and-egg problem*: even if you magically launched the entire platform tomorrow, you'd still need to attract creators and consumers. Your first users would arrive to find an empty store.

Airbnb famously got started by doing things that don't scale. In its early days, the founders would find listings on Craigslist, hire professional photographers to take much better photos, and then post those improved listings on their own site.

### Minimum Lovable Product

Once the MVP proves demand exists, the second slice addresses the scalability issue by enabling user-generated content. This iteration adds creator tools and submission capabilities, moving from manual curation to a self-sustaining content ecosystem.

![Version 2 implementation plan building on V1 success, adding creator tools and user submission capabilities while maintaining proven value](/assets/chapters/chapter-12-v2-plan.svg)

### Beyond
Now that you're serving both consumers and creators, your team has **validated** the core idea, measured demand, and developed a much deeper understanding of your users. This is the point where you can decide to pivot or invest more deeply. 

You'll likely adjust the original plan based on user feedback, as many initial assumptions will be proven wrong while new demands emerge.

![Next steps diagram showing how user feedback and validation drive iterative improvements and feature prioritization](/assets/chapters/chapter-12-next-steps.svg)

The key takeaway is that the impact/effort ratio isn't set in stone. If you can reduce effort while maintaining most of the impact, you can ship your solution earlier and start delivering value much faster. Sometimes, the best solution involves writing less code, not more.