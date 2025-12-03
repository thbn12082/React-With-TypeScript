import { useState } from "react"

type EmployeeCardProps = {
    name: string;
    jobTitle: string;
    isOnline: boolean;
}

const EmployeeCard = ({ name, jobTitle, isOnline }: EmployeeCardProps) => {
    const [status, setStatus] = useState(isOnline);
    const handleToggle = () => setStatus(!status);
    return (
        <div className="isOnline" style={{ border: "3px solid black", textAlign: 'center', padding: '10px', fontSize: "15px", margin: "10px" }}>
            <p>Name: {name}, jobTitle: {jobTitle}</p>
            <div>
                Status: {status ? "🟢 Online" : "🔴 Offline"}
            </div>

            <button onClick={handleToggle} style={{ border: '1px solid black', borderRadius: '20px', padding: '20px', margin: '20px', backgroundColor: 'blue', color: 'white', fontSize: '15px', cursor: 'pointer' }}>
                click me
            </button>
        </div>
    )
}
export default EmployeeCard