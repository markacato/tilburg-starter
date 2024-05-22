import './Navigation.scss';

export default function Navigation() {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src="/logo.png" alt="Logo" />
                    Open Tilburg
                </a>
            </div>
            <nav className="navigation" aria-label="Navigation">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}