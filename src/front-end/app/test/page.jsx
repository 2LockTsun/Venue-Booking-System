import Link from "next/link";

export default function TestPage() {
    return <div>
        <div>
            This is the test page
        </div>
        <div>
            <Link href={'/'}>Back to Home</Link>
        </div>
    </div>
}