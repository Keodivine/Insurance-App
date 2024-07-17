import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import EmployeeList from './Components/EmployeeList.js';
import EmployeeForm from './Components/EmployeeForm.js';

import './App.css';

 const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addOrUpdateEmployee = (employee) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => (emp.id === employee.id ? employee : emp)));
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.id.toString().includes(searchTerm) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      
      <EmployeeForm
        addOrUpdateEmployee={addOrUpdateEmployee}
        editingEmployee={editingEmployee}
      />
      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />
    </div>
  );
};

export default App;
