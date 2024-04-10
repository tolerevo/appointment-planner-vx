import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}> 
      <label>
      <input type="text" id="name" name="name" value={name} required  placeholder="Contact Name" aria-label="Contact-Name" onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
      <input type="tel" id="phone" name="phone" value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" required placeholder="Contact Phone" aria-label="Contact Phone" onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
      <input type="email" id="email" name="email" value={email} required placeholder="Contact Email" aria-label="Contact Email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};

