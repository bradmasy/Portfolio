import { CSSProperties, ReactNode } from "react";

/**
 * @interface TileInterface
 * @description: Represents a tile to interact with.
 */
export interface TileInterface {
    onClick?: () => void;
    title: string;
    style?: CSSProperties;
    url?: string;
    img?: string;
}