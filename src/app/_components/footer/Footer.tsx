import AIFree from "./ai-free";
import "./footer.scss"
export default function Footer() {
    return (
        <div className="book-content chapter-footer">
            <p>
                Contributions are welcome! Feel free to open any
                <a href="https://github.com/JampaUchoa/the-art-of-engineering-management/issues"> issues </a>
                for ideas, feedback, or questions.
            </p>

            <AIFree />
        </div>
    );
}
