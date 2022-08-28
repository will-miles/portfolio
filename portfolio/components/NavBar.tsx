import Link from 'next/link';

const NavBar = () => {
    return (
        <div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/projects'><a>Projects</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
        </div>
    );
}

export default NavBar;