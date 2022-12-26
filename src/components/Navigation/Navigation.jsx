import {
  NavigationList,
  NavigationItem,
  NavigationLink,
  HomeIcon,
  ContactsIcon,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationList>
      <NavigationItem>
        <NavigationLink to="/">
          <HomeIcon />
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/contacts">
          <ContactsIcon />
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  );
};


// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { authSelectors } from "redux/auth";

// import style from './Navigation.module.css';


// export const Navigation = () => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

//   return (
//     <nav>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? `${style.activeLink}` : `${style.link}`
//         }
//       >
//         Main
//       </NavLink>

//       {isLoggedIn && (
//         <NavLink
//           to="/contacts"
//           className={({ isActive }) =>
//             isActive ? `${style.activeLink}` : `${style.link}`
//           }
//         >
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// }
