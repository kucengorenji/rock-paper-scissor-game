import PlayerCard from "./PlayerCard"
import data from "../data/opponent.json"

const PlayerList = (level: {level: string | undefined}) => {
    const filterPlayer = data.filter(player => player.level === level.level)
    
    const playerList = filterPlayer.map((e) => {
        return (
            <div key={e.id}>
                <PlayerCard level={e.level} bio={e.bio} name={e.name} />
            </div>
        )
    })

    const defaultCard = data.map((e) => {
        return (
            <div key={e.id}>
                <PlayerCard level={e.level} bio={e.bio} name={e.name} />
            </div>
        )
    })

    const isSelected = level.level !== "";

    return (
        <>
            <div className="grid grid-cols-4 grid-flow-row auto-rows-max mx-10 my-3 px-10">
                {isSelected? playerList: defaultCard}
            </div>
        </>
    )
}

export default PlayerList;
