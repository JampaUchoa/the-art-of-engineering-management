import { getAllPosts } from "./api";

function getChapterNumber(slug: string): number {
  return parseInt(slug.split('/')[0]);
}

const chapters = getAllPosts();

const plannedChapters = [
    {
        "title": "🌱 Becoming a manager",
        "subtopics": [
            "Should you become an engineering manager?",
            "Getting promoted to management",
            "Navigating the management interviews"
        ]
    },
    {
        "title": "📐 Core Principles",
        "subtopics": [
            "Your first days as a manager",
            "What does an engineering manager do?",
            "1:1s - The most powerful management tool",
        ]
    },
    {
        "title": "📦 The Product Pillar",
        "subtopics": [
            "The engineering role in shaping the product",
            "Avoiding product derails"
        ]
    }, {
        "title": "🪄 The Process pillar",
        "subtopics": [
            "Managing process",
            "There is no free lunch",
            "The true meaning of agile",
        ]
    },
    {
        "title": "🧭 Building a Successful Roadmap",
        "subtopics": [
            "Breaking down large problems",
            "Assembling a roadmap",
            "Effective delegation",
            "Keeping on track"
        ]
    },
    {
        "title": "🏛️ Pillars of Management (Upcoming)",
        "subtopics": [
            "Driving an effective process",
            "Empowering people to greatness",
            "How much you should (still) care about programming"
        ]
    },
    {
        "title": "🛠️ Manager's toolset (Upcoming)",
        "subtopics": [
            "Effective delegation",
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
        const chapter = chapters.find((chapter) => getChapterNumber(chapter.slug) === count);
        if (chapter) {
            return { title: subtopic, slug: chapter.slug };
        } else {
            return { title: subtopic };
        }
    });
    return { title: topic.title, subtopics };
});
export default tableOfContents;
