import Navbar from '../components/Navbar'
import OpponentSelect from '../components/OpponentSelect'
import PlayerList from '../components/PlayerList'
import Footer from '../components/Footer'
import bg from '../assets/requirements-section.png'

const Main = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`
    }

    return (
        <>
            <div style={style} className="h-screen w-screen">
                <Navbar />
                <div className="grid justify-items-center py-12 m-10 bg-blue-300">
                    <OpponentSelect />
                    <PlayerList />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Main;