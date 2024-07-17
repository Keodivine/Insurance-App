import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ addOrUpdateEmployee, editingEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    image: '',
    startDate: '',
  });

  useEffect(() => {
    if (editingEmployee) setEmployee(editingEmployee);
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateEmployee(employee);
    setEmployee({
      name: '',
      surname: '',
      email: '',
      position: '',
      department: '',
      phone: '',
      image: '',
      startDate: '',
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={employee.surname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={employee.position}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={employee.phone}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={employee.image}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="startDate"
        value={employee.startDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
