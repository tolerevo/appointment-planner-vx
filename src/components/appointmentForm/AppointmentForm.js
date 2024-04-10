import React, { useMemo } from "react";
import { ContactPicker} from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNames = useMemo(() => {
    return contacts.map(contact => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input type="text" name="name" value={name} required placeholder="Appointment Name" aria-label="Appointment Name" onChange={(e) => setTitle(e.target.value)} /> 
      </label>
      <br />
      <label>
      <ContactPicker name="contact" value={contact} contacts={contactNames} onChange={(e) => setContact(e.target.value)} /> 
      </label>
      <br />
      <label>
      <input type="date" name="date" value={date} min={getTodayString()} required aria-label="Date Picker" onChange={(e) => setDate(e.target.value)} /> 
      </label>
      <br />
      <label>
      <input type="time" name="time" value={time} required aria-label="Time Picker" onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Add Appointment" aria-label="Add Appointment" /> 
    </form>
  );
};
