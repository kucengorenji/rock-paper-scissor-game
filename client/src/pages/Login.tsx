import LoginCard from "../components/LoginCard"
import Navbar from '../components/Navbar'
import bg from '../assets/requirements-section.png'

const Login = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`
    }

    return (
        <div style={style} className="h-screen w-screen">
            <Navbar />
            <div className="flex justify-center items-center">
                <LoginCard />
            </div>
        </div>
    )
}

export default Login;