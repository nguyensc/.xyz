import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a title="About Page">About</a>
            </Link>
            <Link href="/project">
                <a title="Project Showcase">Projects</a>
            </Link>
            <Link href="/search_sort">
                <a title="Search/Sort">Search and Sort Playground!</a>
            </Link>
            <h3>Welcome!</h3>
        </div>
    );
}