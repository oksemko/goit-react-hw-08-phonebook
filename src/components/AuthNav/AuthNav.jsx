import {
  AuthNavList,
  AuthNavLink,
  AuthNavItem,
  RegisterIcon,
  LoginIcon,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <AuthNavLink to="/register">
          <RegisterIcon />
        </AuthNavLink>
      </AuthNavItem>
      <AuthNavItem>
        <AuthNavLink to="/login">
          <LoginIcon />
        </AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import style from './AuthNav.module.css';


// export default function AuthNav() {
//   return (
//     <div>
//       <NavLink
//         to="/register"
//         className={({ isActive }) =>
//           isActive ? `${style.activeLink}` : `${style.link}`
//         }
//       >
//         Registration
//       </NavLink>
//       <NavLink
//         to="/login"
//         className={({ isActive }) =>
//           isActive ? `${style.activeLink}` : `${style.link}`
//         }
//       >
//         Login
//       </NavLink>
//     </div>
//   );
// }
