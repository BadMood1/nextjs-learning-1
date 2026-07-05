import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex h-14 items-center justify-between border-b px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-3 font-semibold">
                <Image src="/next.svg" alt="" width={100} height={32} />
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/posts" className="hover:underline">
                    Posts
                </Link>
            </nav>
        </header>
    );
}
