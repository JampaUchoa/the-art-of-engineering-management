import AIFree from "./ai-free";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import "./footer.scss"

export default function Footer() {
    return (
        <div className="book-content chapter-footer">
            <div className="footer-links">
                <Link href="/about/author" className="footer-link">
                    <IoMdPerson /> Created by Joao Uchoa
                </Link>
                <AIFree />
            </div>
        </div>
    );
}
