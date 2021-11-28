const PlayerCard = () => {
    return (
        <>
            <div className="p-5 bg-gray-700 rounded-lg">
                <div className="card flex">
                    <div>
                        <img className="" src="" alt="" />
                    </div>
                    <h3>Evan Lathi</h3>
                    <p>Grand Master</p>
                </div>
                <div>
                    <p>Never should have come here!</p>
                    <p>Since October 18, 2018</p>
                </div>
                <button className="btn my-2 py-2 px-4 bg-yellow-400 rounded-full">FIGHT</button>
            </div>
        </>
    )
}

export default PlayerCard;