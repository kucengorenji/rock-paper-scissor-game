import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlayerList from '../components/PlayerList'
import bg from '../assets/requirements-section.png'

const Main = () => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    const [playerLevel, setPlayerLevel] = useState<string | undefined>("")

    const handleClick: React.MouseEventHandler = (e) => {
        const { value } = (e.target as HTMLButtonElement).dataset
        setPlayerLevel(value)
        console.log(value)
    };

    return (
        <>
            <div style={style} className="h-100 w-screen">
                <Navbar />
                <div>
                    <div className="grid justify-items-center py-12 m-10">
                        <div className="py-6 text-white">
                        <h1 className="py-6 text-3xl font-bold">CHOOSE YOUR OPPONENT</h1>
                            <div className="flex space-x-2 text-white">
                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='NOVICE' className="">NOVICE</button>
                                </div>
                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='CLASS A' className="">CLASS A</button>
                                </div>
                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='CLASS B' className="">CLASS B</button>
                                </div>
                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='CLASS C' className="">CLASS C</button>
                                </div>

                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='CLASS D' className="">CLASS D</button>
                                </div>

                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='CANDIDATE MASTER' className="">CANDIDATE MASTER</button>
                                </div>

                                <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                                    <button onClick={handleClick} data-value='GRAND MASTER' className="">GRAND MASTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PlayerList level={playerLevel} />
                <Footer />
            </div>

        </>
    )
}

export default Main;