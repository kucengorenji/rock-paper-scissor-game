import photo from '../assets/photo.png'

const PlayerCard = () => {
    return (
        <>
            <div className="p-5 bg-gray-700 rounded-lg hover:bg-yellow-500 active:bg-yellow-500">
                <div className="card flex justify-between p-2">
                    <div>
                        <img className="" src={photo} alt="" />
                    </div>
                    <div className="my-auto">
                        <h1 className="text-yellow-400 text-xl">Evan Lathi</h1>
                        <p className="text-gray-400 text-sm">Grand Master</p>
                    </div>
                </div>
                <div className="justify-items-start">
                    <p className="text-white">Never should have come here!</p>
                    <p className="text-gray-400 text-sm">Since October 18, 2018</p>
                </div>
                <button className="btn my-2 py-2 px-4 bg-yellow-400 rounded-full text-white">FIGHT</button>
            </div>
        </>
    )
}

export default PlayerCard;