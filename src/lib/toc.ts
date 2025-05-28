import { getAllPosts } from "./api";

const chapters = getAllPosts();

const plannedChapters = [
    {
        "title": "Management Foundations",
        "subtopics": [
            "Should You Become an Engineering Manager?",
            "Getting Promoted to Management",
            "Navigating the Management Interviews"
        ]
    },
    {
        "title": "Core Principles",
        "subtopics": [
            "Your First Days as a Manager",
            "What Does an Engineering Manager Do?"
        ]
    },
    {
        "title": "The Product Pillar",
        "subtopics": [
            "The Engineering Role in Shaping the Product",
            "Why You Should Avoid “derails”"
        ]
    },
    {
        "title": "Building a Successful Roadmap",
        "subtopics": [
            "Breaking Down Large Problems",
            "Analyzing Tradeoffs",
            "Delegating Projects",
            "Assembling and Keeping Up with the Roadmap"
        ]
    },
    {
        "title": "Pillars of Management (Upcoming)",
        "subtopics": [
            "Driving an effective process",
            "Empowering people to greatness",
            "How much you should (still) care about programming"
        ]
    },
    {
        "title": "Manager's toolset (Upcoming)",
        "subtopics": [
            "Effective Delegation",
            "1:1 meetings",
            "Giving feedback",
            "Preventing burnout",
            "Managing attention",
            "Hiring great engineers",
            "Addressing performance issues",
            "When to let people go",
            "Promotions"
        ]
    }
]

// Get the chapters that are already written, and merge with the planned chapters, 
// if they exist add {slug and title} to the subtopics and replace the current tile, if not add {title} only.
let count = 0;
const tableOfContents = plannedChapters.map((topic) => {
    const subtopics = topic.subtopics.map((subtopic) => {
        count++;
        const chapter = chapters.find((chapter) => chapter.slug[0] === count.toString());
        if (chapter) {
            return { title: subtopic, slug: chapter.slug };
        } else {
            return { title: subtopic };
        }
    });
    return { title: topic.title, subtopics };
});
export default tableOfContents;
