import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { Loader } from 'components/Loader/Loader';
import { ColorRing } from 'react-loader-spinner';

import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './RegisterView.styled';


export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Registration Page</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange} />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">
          <ColorRing
          height={200}
          width={200}
          ariaLabel="blocks-loading"
          />
          <Loader />
          Register
        </Button>
      </Form>
    </Container>
  );
}
