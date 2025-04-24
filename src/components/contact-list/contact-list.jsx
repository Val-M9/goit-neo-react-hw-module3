import Contact from '../contact/contact'
import styles from './contact-list.module.css'

const ContactList = ({ records, onDeleteRecord }) => {
  return (
    <>
      {records.length > 0 ? (
        <ul className={styles.contactList}>
          {records.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <Contact
                id={id}
                name={name}
                number={number}
                onDeleteRecord={onDeleteRecord}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </>
  )
}

export default ContactList
