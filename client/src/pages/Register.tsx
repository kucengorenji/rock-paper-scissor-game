import RegisterCard from "../components/RegisterCard"
import Navbar from '../components/Navbar'
import bg from '../assets/requirements-section.png'

const Register = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`
    }

    return (
        <div style={style} className="h-screen w-screen">
            <Navbar />
            <div className="flex justify-center items-center">
                <RegisterCard />
            </div>
        </div>
    )

}

export default Register;