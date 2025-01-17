import { NavLink } from "react-router-dom";

const Header = () => {
  const navigation = [
    { path: '/', name: 'List Items' },
    { path: '/add', name: 'Add Item' },
  ];

  return (
    <header>
      <h1>Inventory Management</h1>
      <nav>
        {navigation.map(nav => (
          <NavLink key={nav.name} to={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
