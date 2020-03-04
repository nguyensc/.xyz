import Link from 'next/link';

export default function Header(){
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link href="/index">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/project">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search_sort">
                            <a>Playground</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}