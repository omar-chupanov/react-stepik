import { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Не удалось загрузить данные');
                }
                return response.json();
            })
            .then(user => {
                setUser(user);
                setTimeout(() => {
                    setLoading(false);
                }, 1500); 
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>
            <p>Загрузка...</p>
        </div>;
    }

    if (error) {
        return <div>
            <p>Ошибка: {error}</p>
        </div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <p>Город: {user.address.city}</p>
            <p>Компания: {user.company.name}</p>
        </div>
    );
}

export default UserProfile;