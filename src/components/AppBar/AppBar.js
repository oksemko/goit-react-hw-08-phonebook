import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { authSelectors } from 'redux/auth';

import { Header } from './AppBar.styled.jsx';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//     marginBottom: '15px',
//   },
// };

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
