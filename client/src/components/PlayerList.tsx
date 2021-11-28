import PlayerCard from "./PlayerCard"

const PlayerList = () => {
    return (
        <>
            <div className="flex space-x-2">
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
            </div>
        </>
    )
}

export default PlayerList;
