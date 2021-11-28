import LoginCard from "../components/LoginCard"
import bg from '../assets/requirements-section.png'

const Login = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`
    }

    return (
        <div style={style} className="flex w-screen h-screen justify-center items-center">
            <LoginCard />
        </div>
    )
}

export default Login;