import { TileRowInterface } from "./tileRowInterface";
import { TileRowStyles, columnStyles, tileContainerStyles } from './styles';
import { Tile } from "../Tile/Tile";

export const TileRow: React.FC<TileRowInterface> = (tileRowProps) => {
    const tileCount = tileRowProps.tiles?.length;
    console.log(tileCount)
    if (tileCount == 3) {
        return (
            <div style={{ ...TileRowStyles, ...tileRowProps.style }}>
                {tileRowProps.tiles?.map((tile) => {
                    return (
                        <div style={columnStyles}>
                            <div style={tileContainerStyles}>
                                <Tile {...tile} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    else if (tileCount == 4) {
        return (
            <div style={{ ...TileRowStyles, ...tileRowProps.style }}>

                <div style={columnStyles}>
                    <div style={tileContainerStyles}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (

                            <Tile {...tileRowProps.tiles[0]} />)}
                    </div>

                </div>
                <div style={columnStyles}>
                    <div style={{ ...tileContainerStyles, justifyContent: "space-between" }}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                            <>
                                <Tile {...tileRowProps.tiles[1]} />
                                <Tile {...tileRowProps.tiles[2]} />

                            </>
                        )}
                    </div>

                </div>
                <div style={columnStyles}>
                    <div style={tileContainerStyles}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (

                            <Tile {...tileRowProps.tiles[3]} />)}
                    </div>

                </div>

            </div>

        )
    }
    else if (tileCount == 6) {
        return (
            <div style={{ ...TileRowStyles, ...tileRowProps.style }}>

                <div style={{ ...columnStyles }}>
                    <div style={{ ...tileContainerStyles, flexDirection: "row", justifyContent: "space-between" }}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                            <>
                                <Tile {...tileRowProps.tiles[0]} />
                                <Tile {...tileRowProps.tiles[1]} />
                            </>)}
                    </div>

                </div>
                <div style={columnStyles}>
                    <div style={{ ...tileContainerStyles, justifyContent: "space-between" }}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                            <>
                                <Tile {...tileRowProps.tiles[2]} />

                            </>
                        )}
                    </div>

                </div>
                <div style={columnStyles}>
                    <div style={{display:"flex",justifyContent:"center", flexDirection:"column",height:"90%"}}>
                        <div style={{ ...tileContainerStyles, justifyContent: "space-between", flexDirection: "row" }}>
                            {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                                <>
                                    <Tile {...tileRowProps.tiles[3]} />

                                    <Tile {...tileRowProps.tiles[4]} />

                                </>
                            )}
                        </div>
                        <div style={{ ...tileContainerStyles,height:"40%", justifyContent: "end", flexDirection: "column" }}>
                            {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                                <>
                                    <Tile {...tileRowProps.tiles[5]} />


                                </>
                            )}
                        </div>
                    </div>


                </div>

            </div>

        )

    }
    else if (tileCount == 7) {
        return (
            <div style={{ ...TileRowStyles, ...tileRowProps.style }}>
                <div style={{ ...columnStyles, flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-around", width: "100%", height: "90%" }}>
                        <div style={{ ...tileContainerStyles, width: "50%", height: "100%", justifyContent: "left" }}>
                            {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "90%" }}>
                                    <Tile {...tileRowProps.tiles[0]} />
                                    <Tile {...tileRowProps.tiles[1]} />
                                </div>
                            )}
                        </div>
                        <div style={{ ...tileContainerStyles, width: "50%", height: "100%" }}>
                            {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                                <Tile {...tileRowProps.tiles[2]} />
                            )}
                        </div>
                    </div>
                </div>
                <div style={columnStyles}>
                    <div style={tileContainerStyles}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                            <Tile {...tileRowProps.tiles[3]} />
                        )}
                    </div>
                </div>
                <div style={{ ...columnStyles, flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{
                        ...tileContainerStyles, flexDirection: "column", justifyContent: "center", height: "100%", width: "35%"
                    }}>
                        <div style={{ display: "flex", height: "90%", width: "100%" }}>
                            {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                                <>
                                    <Tile {...tileRowProps.tiles[4]} />
                                </>
                            )}
                        </div>
                    </div>
                    <div style={{ ...tileContainerStyles, height: "100%", width: "60%", flexDirection: "column", justifyContent: "center" }}>
                        {tileRowProps.tiles && tileRowProps.tiles.length > 0 && (
                            <div style={{ display: "flex", height: "90%", flexDirection: "column", justifyContent: "space-between" }}>
                                <Tile {...tileRowProps.tiles[5]} />
                                <Tile {...tileRowProps.tiles[6]} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        </>
    )

}