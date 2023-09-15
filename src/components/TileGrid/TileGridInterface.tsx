import { TileInterface } from "../Tile/TileInterface"

export interface TileGridInterface {
    tiles: Array<TileInterface>
    rows: number
    columns: number
    style?: React.CSSProperties
}