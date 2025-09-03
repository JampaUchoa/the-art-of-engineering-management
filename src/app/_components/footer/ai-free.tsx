import Link from "next/link";
import { IoMdFingerPrint } from "react-icons/io";

export default function AIFree() {
    return (
        <Link href="/about/why-no-ai" className="footer-link">
            <IoMdFingerPrint/> GenAI-free
        </Link>
    );
}
