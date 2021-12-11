import PlayerCard from "./PlayerCard"
import data from "../data/opponent.json"

const PlayerList = (level: {level: string | undefined}) => {
    const filterPlayer = data.filter(player => player.level === level.level)
    console.log(filterPlayer)
    const playerList = filterPlayer.map((e) => {
        return (
            <div key={e.id}>
                <PlayerCard level={e.level} bio={e.bio} name={e.name} />
            </div>
        )
    })

    return (
        <>
            <div className="grid space-x-2 grid-cols-4 grid-flow-row auto-rows-max mx-10 my-3">
                {playerList}
            </div>
        </>
    )
}

export default PlayerList;
