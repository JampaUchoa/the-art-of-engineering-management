import Link from "next/link";
import { IoMdFingerPrint } from "react-icons/io";

export default function AIFree() {
    return (
        <Link href="/about/why-no-ai" className="ai-free-link">
            <IoMdFingerPrint/>  No generative AI was used in the writing of this book.
        </Link>
    );
}
