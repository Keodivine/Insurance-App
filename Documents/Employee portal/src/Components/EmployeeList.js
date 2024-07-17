import React from 'react';

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <div className="employee-list">
      {employees.map(employee => (
        <div key={employee.id} className="employee-card">
          <img src={employee.image} alt={`${employee.name} ${employee.surname}`} />
          <div className="employee-details">
            <h3>{employee.name} {employee.surname}</h3>
            <p>Email: {employee.email}</p>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Phone: {employee.phone}</p>
            <p>Start Date: {employee.startDate}</p>
            <button onClick={() => editEmployee(employee)}>Edit</button>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
