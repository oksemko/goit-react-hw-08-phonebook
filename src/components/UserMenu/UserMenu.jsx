import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
import defaultAvatar from './avatar-default.png';

import { Container, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Image>{avatar}</Image>
      <Span>Welcome, {name}</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </Button>
    </Container>
  );
}
