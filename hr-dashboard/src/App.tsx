import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard"
import ProductCard from "./components/ProductCard"
function App() {
  const employeeList = [
    { id: 1, name: "1rwer", jobTitle: "yyyyy", isOnline: true },
    { id: 2, name: "2rwe", jobTitle: "zzzz", isOnline: true },
    { id: 3, name: "3fgdf", jobTitle: "ttttt", isOnline: true }];


  const [employees, setEmployees] = useState(employeeList);
  const [newName, setName] = useState("");
  const [newJobTitle, setJobTitle] = useState("");

  const handleAddEmployee = () => {
    if (!newName || !newJobTitle) {
      alert("Vui Lòng nhập tên hoặc job");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: newName,
      jobTitle: newJobTitle,
      isOnline: true
    }

    setEmployees([...employees, newEmployee]);

    setName("");
    setJobTitle("");

  }

  const productList = [{ id: 1, name: "fsdfs", type: "fasdf", price: 2 }, { id: 2, name: "sdfsd", type: "sdfsdf", price: 342 }, { id: 3, name: "dfgdf", type: "gdfgdfg", price: 4 }, { id: 4, name: "gdfgdfg", type: "bdvbdfg", price: 3432 }];

  return (<>
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Employee Dashboard</h1>

      {/* --- PHẦN FORM NHẬP LIỆU --- */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px dashed #ccc' }}>
        <h3>Add New Employee</h3>

        <input
          type="text"
          placeholder="Name"
          value={newName} // Gắn giá trị vào State
          onChange={(e) => setName(e.target.value)} // Cập nhật State khi gõ
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <input
          type="text"
          placeholder="Job Title"
          value={newJobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <button onClick={handleAddEmployee} style={{ padding: '5px 15px' }}>
          Add
        </button>
      </div>

      {/* --- PHẦN DANH SÁCH --- */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {employees.map(emp => (
          <EmployeeCard
            key={emp.id} // Dùng ID làm key
            name={emp.name}
            jobTitle={emp.jobTitle}
            isOnline={emp.isOnline}
          />
        ))}
      </div>
    </div>
  </>)
}

export default App 