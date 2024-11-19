import { Link } from 'react-router-dom';

const makeNavLinks = (currentPath, pathUpdateHandler) => {
  const NavArr = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return NavArr.map((navItem) =>
    currentPath === navItem.path ? (
      <Link
        onClick={() => {
          pathUpdateHandler(navItem.path);
        }}
        className='transition ease-in-out delay-50 min-w-15 text-center flex-1 pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 opacity-70'
        key={navItem.text.toLowerCase()}
        to={navItem.path}
      >
        {navItem.text}
      </Link>
    ) : (
      <Link
        onClick={() => {
          pathUpdateHandler(navItem.path);
        }}
        className='transition ease-in-out delay-50 min-w-15 text-center flex-1 pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 hover:opacity-70'
        key={navItem.text.toLowerCase()}
        to={navItem.path}
      >
        {navItem.text}
      </Link>
    )
  );
};

export default makeNavLinks;
