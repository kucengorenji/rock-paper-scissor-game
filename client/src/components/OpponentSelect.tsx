import PlayerList from './PlayerList'

const OppenentSelect = () => {

    const handleClick: React.MouseEventHandler = () => {
        return (
            <PlayerList />
        );
    };

    return (
        <>
            <div className="py-6 text-white">
                <h1 className="p-6">CHOOSE YOUR OPPONENT</h1>
                <div className="flex space-x-2 text-white">
                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">NOVICE</button>
                    </div>
                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">CLASS A</button>
                    </div>
                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">CLASS B</button>
                    </div>
                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">CLASS C</button>
                    </div>

                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">CLASS D</button>
                    </div>

                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">CANDIDATE MASTER</button>
                    </div>

                    <div className="p-5 bg-gray-700 rounded-lg">
                        <button onClick={handleClick} className="">GRAND MASTER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OppenentSelect;