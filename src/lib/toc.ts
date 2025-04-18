import { getAllPosts } from "./api";

const chapters = getAllPosts();

const plannedChapters = [
    {
        "title": "Management Foundations",
        "subtopics": [
            "Should you become an Engineering Manager?",
            "Getting promoted",
            "Navigating interviews",
            "Your first days",
            "What will you do?",
        ]
    },
    {
        "title": "Pillars of Management (Upcoming)",
        "subtopics": [
            "Driving an effective process",
            "Shipping successful products",
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
