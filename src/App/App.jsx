import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactsForm from 'components/ContactsForm/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

import AppBar from 'components/AppBar/AppBar';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { HomeView, LoginView, RegisterView } from '../views';

import { authOperations } from '../redux/auth';

import { Container} from './App.styled';
// import { Loader } from 'components/Loader/Loader';
// import { ColorRing } from 'react-loader-spinner';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

    return (
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
              />
              <Route path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                </PublicRoute>
              }
          />
          <Route path="contacts"
            element={
              <PrivateRoute>
                <ContactsForm />
                <Filter title="Find contact by name" />
                <ContactsList />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<></>} />
          </Routes>
      </Container>
    );
}

export { App };
