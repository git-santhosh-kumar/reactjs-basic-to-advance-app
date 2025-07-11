import { useState } from 'react';
import UserForm from '../components/UserForm';

export default function UserList() {
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (data) => {
        // console.log('handleFormSubmit: ', data);
        if(data) {
            setUsers([...users, data]); // Immutable update
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded">
                <UserForm submitForm={handleFormSubmit} />
            </div>
            <div className="p-4 rounded">
                <h3 className="mt-6 text-lg font-semibold">List of Users</h3>
                <div className="mb-4">Total Users: {users.length}</div>

                <ul className="space-y-2">
                    {users.sort((a, b) => a.name.localeCompare(b.name)).map((user, idx) => (
                    <li key={idx} className="border p-2 rounded bg-gray-100">
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}