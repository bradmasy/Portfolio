
import { TileGridInterface } from './TileGridInterface';
import { Tile } from '../Tile/Tile';
import { TileGridStyles } from './TileGridStyles';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { columnStyles, tileContainerStyles, rowStyles } from './styles';
import { TileRow } from '../TileRow/tileRow';
import { TileRowInterface } from '../TileRow/tileRowInterface';
import headShot from "../../assets/images/headshot.png";

const rowStyle: React.CSSProperties = {

}

const TileRowOneProps: TileRowInterface = {
    style: rowStyle,
    tiles: [
        {
            title: "My Resume",
            style: {
                backgroundColor: "#BAE8E8",
            },
            url: "/resume"
        },
        {
            title: "GitHub",
            style: {
                backgroundColor: "#272643",
                color: "white",
                width: "47%"
            },
            url: "https://github.com/bradmasy"
        },
        {
            title: "About me",
            style: {
                backgroundColor: "#F5F5F5",
                width: "47%"

            },
            url: "/about"
        },
        {
            title: "Transferable Work Experience",
            style: {
                backgroundColor: "#2C698D",
                color: "white",
            },
            url: "/experience"
        }
    ],
}

const TileRowTwoProps: TileRowInterface = {
    style: { ...rowStyle, height: "50%" },
    tiles: [

        {
            title: "Frameworks",
            style: {
                backgroundColor: "#2C698D",
                color: "white",
                width: "100%",
                height: "25%",

            },
            url: "/frameworks",
        },
        {
            title: "Languages",
            style: {
                backgroundColor: "#272643",
                color: "white",
                height: "70%",

            },
            url: "/languages"
        },
        {
            title: "Professional Experience",
            style: {
                backgroundColor: "white",

            },
            url: "/experience"
        },
        {
            title: "Bradley Nicholas Masciotra",
            style: {
                backgroundColor: "#2C698D",
                color: "white",
                fontSize: "2.5em"


            },
            url: "/",
            img: headShot
        },

        {
            title: "Technical Skills",
            style: {
                backgroundColor: "white",
                width: "100%",
                height: "100%",
            }
        },
        {
            title: "Interests",
            style: {
                backgroundColor: "#BAE8E8",
                color: "black",
                width: "100%",
                height: "65%"

            }
        },
        {
            title: "Another tile",
            style: {
                backgroundColor: "#272643",
                color: "white",
                width: "100%",
                height: "30%"

            }
        }
    ],
}



const TileRowThreeProps: TileRowInterface = {
    style: rowStyle,
    tiles: [

        {
            title: "Tile 10",
            style: {
                backgroundColor: "#2C698D",
                color: "white",
                width: "60%",
            }
        },
        {
            title: "Tile 10",
            style: {
                backgroundColor: "#BAE8E8",
                color: "black",
                width: "35%",
            }
        }, {
            title: "Projects",
            style: {
                backgroundColor: "white",
                color: "black",
                width: "100%",
            }
        },

        {
            title: "Projects",
            style: {
                backgroundColor: "#272643",
                color: "white",
                height: "90%",
                width: "47%"
            }
        }, {
            title: "LinkedIn",
            style: {
                height: "90%",
                width: "47%",
                backgroundColor: "#2C698D",
                color: "white",

            }
        },

        {
            title: "Email",
            style: {
                backgroundColor: "#BAE8E8",
                height: "90%",
                width: "100%"

            }
        },
    ],
}



export const TileGrid: React.FC<TileGridInterface> = (tileProps) => {


    return (
        <div style={TileGridStyles}>
            <TileRow {...TileRowOneProps} />
            <TileRow {...TileRowTwoProps} />
            <TileRow {...TileRowThreeProps} />
        </div>
    )
}
