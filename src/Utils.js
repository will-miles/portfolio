import { Link } from 'react-router-dom';

const makeNavLinks = (propsPath, propsHandler) => {
  const NavArr = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return NavArr.map((navItem) =>
    propsPath === navItem.path ? (
      <Link
        onClick={() => {
          propsHandler(navItem.path);
        }}
        className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 opacity-70'
        key={navItem.text.toLowerCase()}
        to={navItem.path}
      >
        {navItem.text}
      </Link>
    ) : (
      <Link
        onClick={() => {
          propsHandler(navItem.path);
        }}
        className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 hover:opacity-70'
        key={navItem.text.toLowerCase()}
        to={navItem.path}
      >
        {navItem.text}
      </Link>
    )
  );
};

export default makeNavLinks;
