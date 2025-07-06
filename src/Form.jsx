import { useState } from "react"

const Form = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Логин: ${login}, Пароль: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
            />
            <button type="submit">Отправить</button>
        </form>
    );
}

export default Form