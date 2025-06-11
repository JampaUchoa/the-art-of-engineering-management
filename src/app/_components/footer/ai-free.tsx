import Link from "next/link";
import { IoMdFingerPrint } from "react-icons/io";

export default function AIFree() {
    return (
        <div>
            <IoMdFingerPrint/>  No generative AI was used in the writing of this book. <Link href="/about/why-no-ai">Read more</Link>.
        </div>
    );
}
