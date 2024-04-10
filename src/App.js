import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import ErrorPage from "./error-page";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments([
      appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
