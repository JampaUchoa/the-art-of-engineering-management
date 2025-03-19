import { getAllPosts } from "./api";

const chapters = getAllPosts();

const plannedChapters = [
    {
        "title": "Becoming",
        "subtopics": [
            "Should you become an Engineering Manager?",
            "Getting Promoted",
            "Navigating Interviews",
            "Your First Days",
            "What will you do?",
        ]
    },
    {
        "title": "Essentials",
        "subtopics": [
            "Driving an effective process",
            "Shipping successful products",
            "Empowering people to greatness",
            "How much you should (still) care about programming"
        ]
    },
    {
        "title": "Techniques",
        "subtopics": [
            "Delegating effectively",
            "1:1 meetings",
            "Giving feedback",
            "Preventing burnout",
            "Managing everyone's attention",
            "Hiring great engineers",
            "Addressing performance issues/firing",
            "Promoting people"
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
