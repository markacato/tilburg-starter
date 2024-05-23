import './Header.scss'
import Navigation from './Navigation'
import {
    BreadcrumbNav,
    BreadcrumbNavLink,
    BreadcrumbNavSeparator
} from '@utrecht/component-library-react/dist/css-module';

export default function Header() {
    return (
        <header className="tilburg-header">
            <div className="tilburg-header__navigation-main">
                <div className="tilburg-header__logo">
                    <a href="/">
                        <img src="/tilburg-starter/logo.png" alt="Logo"/>
                        Open Tilburg
                    </a>
                </div>
                <Navigation/>
            </div>
            <div className="tilburg-header__navigation-secondary">
                <div className="container">
                    <BreadcrumbNav>
                        <BreadcrumbNavLink href="/" rel="home" index={0}>
                            Home
                        </BreadcrumbNavLink>
                        <BreadcrumbNavSeparator>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em">
                                <path
                                    fill-rule="evenodd"
                                    d="M20.607 16 10 5.393l1.414-1.414L23.435 16l-12.02 12.02L10 26.608z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </BreadcrumbNavSeparator>
                        <BreadcrumbNavLink href="/a/" index={1}>
                            Uitgebreid zoeken
                        </BreadcrumbNavLink>
                        <BreadcrumbNavSeparator>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em">
                                <path
                                    fill-rule="evenodd"
                                    d="M20.607 16 10 5.393l1.414-1.414L23.435 16l-12.02 12.02L10 26.608z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </BreadcrumbNavSeparator>
                        <BreadcrumbNavLink disabled current>
                            Label
                        </BreadcrumbNavLink>
                    </BreadcrumbNav>
                    <img src="/tilburg-starter/readspeaker-placeholder.png" alt=""/>
                </div>
            </div>
        </header>
    );
}