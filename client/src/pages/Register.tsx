import RegisterCard from "../components/RegisterCard"
import bg from '../assets/requirements-section.png'

const Register = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`
    }

    return (
        <div style={style} className="flex w-screen h-screen justify-center items-center">
            <RegisterCard />
        </div>
    )
}

export default Register;