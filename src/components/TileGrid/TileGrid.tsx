
import { TileGridInterface } from './TileGridInterface';
import { Tile } from '../Tile/Tile';
import { TileGridStyles } from './TileGridStyles';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { columnStyles, tileContainerStyles, rowStyles } from './styles';
import { TileRow } from '../TileRow/tileRow';
import { TileRowInterface } from '../TileRow/tileRowInterface';


const rowStyle: React.CSSProperties = {

}

const TileRowOneProps: TileRowInterface = {
    style: rowStyle,
    tiles: [
        {
            title: "My Resume",
            style: {
                backgroundColor: "#BAE8E8",
            }
        },
        {
            title: "GitHub",
            style: {
                backgroundColor: "#272643",
                color:"white",
                width:"47%"
            }
        },
        {
            title: "About me",
            style: {
                backgroundColor: "#F5F5F5",
                width:"47%"

            }
        },
        {
            title: "Transferable Work Experience",
            style: {
                backgroundColor: "#2C698D",
                color:"white",
            }
        }


    ],
}

const TileRowTwoProps: TileRowInterface = {
    style: {...rowStyle, height:"50%"},
    tiles: [

        {
            title: "Frameworks",
            style: {
                backgroundColor: "#2C698D",
                color:"white",
                width:"100%",
                height:"25%",
              
            }
        },
        {
            title: "Languages",
            style: {
                backgroundColor: "#272643",
                color:"white",
                height:"70%",

            }
        },
        {
            title: "Professional Experience",
            style: {
                backgroundColor: "white",

            }
        },
        {
            title: "Bradley Nicholas Masciotra",
            style: {
                backgroundColor: "#2C698D",
                color:"white",
                fontSize:"2.5em"

            }
        },
    
        {
            title: "Technical Skills",
            style: {
                backgroundColor: "white",
                width:"100%",
                height:"100%",

            }
        },
        {
            title: "Interests",
            style: {
                backgroundColor: "#BAE8E8",
                color:"black",
                width:"100%",
                height:"65%"

            }
        },
        {
            title: "Another tile",
            style: {
                backgroundColor: "#272643",
                color:"white",
                width:"100%",
                height:"30%"

            }
        }
    ],
}



const TileRowThreeProps: TileRowInterface = {
    style: rowStyle,
    tiles: [

        {
            title: "Tile 10",
            style:{
                backgroundColor: "#BAE8E8",
                color:"black",
                width:"100%",
            }
        },
        {
            title: "Projects",
            style:{
                backgroundColor: "#272643",
                color:"white",
            }
        },
        
        {
            title: "Tile 9",
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
