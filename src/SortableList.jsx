import { useEffect, useState } from "react";

export default function SortableList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setUsers(data))
    }, [])

    return (
        <div>
            <button onClick={()=> setUsers([...users].sort())}>Сортировка</button>
            <ul>
                {users.map(user => (<li key={user.id}>
                    {user.name}
                </li>))}
            </ul>
        </div>
    )
}