import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const user = {
        username: 'mikael',
        password: '123456'
    }
    const handleClick = (e: any) => {
        e.preventDefault();
        console.log(name)
        console.log(password)
        if (name === user.username && password === user.password) {
            navigate("/");
        } else {
            alert("anda salah gaboleh login, masukan username:mikael & password: 123456")
        }
    }

    return (
        <>
            <div className="grid p-5">
                <h1>Login</h1>
                <form onSubmit={handleClick} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setName(e.target.value)} id="username" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input minLength={6}  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <p className="text-red-500 text-xs italic">Silahkan Masukan Password</p>
                    </div>
                    <div className="flex items-center">
                        <button type='submit' className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default LoginCard;