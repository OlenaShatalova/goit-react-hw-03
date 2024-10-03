import formik from 'react';
import ContactForm from './copmonents/ContactForm/ContactForm';
import ContactList from './copmonents/ContactList/ContactList';
import SearchBox from './copmonents/SearchBox/SearchBox';
import './App.css';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
