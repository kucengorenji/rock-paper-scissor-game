import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-gray-700 sticky">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white mx-24">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to={"/"}><h1 className="font-bold text-xl tracking-tight">SUIT GAME</h1></Link>
                </div>
                <div className="inline-block lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to={"/register"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            REGISTER
                        </Link>
                        <Link to={"/login"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            LOGIN
                        </Link>
                    </div>
                </div>
            </nav >
        </div >)
}

export default Navbar;