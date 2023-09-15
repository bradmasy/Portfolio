import { TileInterface } from "./TileInterface";
import { TileStyles } from "./styles";
import "./tile.css";

interface TileProps {
    tile: TileInterface
}

export const Tile: React.FC<TileInterface> = (tileProps) => {
    return (
        <div className="tile" style={{...TileStyles, ...tileProps.style}} onClick={(e)=>{

            console.log(e)
            console.log(tileProps.title)
            window.location.href = `/${tileProps.title}`;
        }}>
            {tileProps.title}
        </div>
    )
}