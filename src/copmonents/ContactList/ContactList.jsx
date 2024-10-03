import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  return (
    <>
      <h2 className={css.text}>ContactList</h2>
      <Contact />
    </>
  );
};

export default ContactList;
