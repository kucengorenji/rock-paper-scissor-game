import photo from '../assets/photo.png'

export interface card {
    name: string,
    bio: string,
    level: string,
}

const PlayerCard = (data: card) => {
    return (
        <>
            <div className="p-5 bg-gray-700 rounded-lg active:bg-yellow-500 my-1">
                <div className="card flex p-2 space-x-2">
                    <div>
                        <img className="" src={photo} alt="" />
                    </div>
                    <div className="my-auto">
                        <h1 className="text-yellow-400 text-xl">{data.name}</h1>
                        <p className="text-gray-400 text-sm">{data.level}</p>
                    </div>
                </div>
                <div className="justify-items-start">
                    <p className="text-white">{data.bio}</p>
                    <p className="text-gray-400 text-sm">Since October 18, 2018</p>
                </div>
                <button className="btn my-2 py-2 px-4 bg-yellow-400 rounded-full text-white">FIGHT</button>
            </div>
        </>
    )
}

export default PlayerCard;