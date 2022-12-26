import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './avatar-default.png';

import { Container, Image, Span, Button, ExitIcon } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Image img src={avatar} alt=""></Image>
      <Span>Hello, {name}!</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        {/* Sign out */}
        <ExitIcon />
      </Button>
    </Container>
  );
}
