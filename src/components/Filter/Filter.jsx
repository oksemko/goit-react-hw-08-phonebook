import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';

import { Container, Label, Input } from './Filter.styled';


export const Filter = ({ title }) => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();


  return (
    <Container>
    <Label>
      <span>{title}</span>
        <Input
        type="text"
        name="filter"
        value={value}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
      />
      </Label>
      </Container>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
