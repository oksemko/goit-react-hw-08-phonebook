import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import style from './UserMenu.styled';

export default function UserMen() {
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
