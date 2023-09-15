import { TileInterface } from "./TileInterface";
import { TileStyles } from "./styles";
import "./tile.css";

interface TileProps {
    tile: TileInterface
}

export const Tile: React.FC<TileInterface> = (tileProps) => {
    return (
        <div className="tile" style={{ ...TileStyles, ...tileProps.style }} onClick={(e) => {
            window.location.href = `${tileProps.url}`;
        }}>
            {tileProps.title}

            {tileProps.img && (
                <div style={{display:"flex", height:"70%", width:"100%" ,justifyContent:"center" }}>
                    <img style={{display:"flex", boxShadow:"0px 0px 10px 0px black",width:"60%",borderRadius:"50%"}} src={tileProps.img} alt={tileProps.title} /> 

                </div>
            )}
        </div>
    )
}