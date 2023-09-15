import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TileGrid } from '../TileGrid';
import { TileGridInterface } from '../TileGrid/TileGridInterface';

function App() {



  const tileProps: TileGridInterface = {
    tiles: [
      {
        title: "Tile 1",
        style:{
          backgroundColor: "red"
        }
      },
      {
        title: "Tile 2",
      },
      {
        title: "Tile 3",
      },
      {
        title: "Tile 4",
      },
      {
        title: "Tile 5",
      },
      {
        title: "Tile 6",
      },
      {
        title: "Tile 7",
      },
      {
        title: "Tile 8",
      },
      {
        title: "Tile 9",
      }

    ],
    rows: 3, // Adjust as needed
    columns: 3, // Adjust as needed
    style: { /* Add grid container styles here */ },
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TileGrid {...tileProps} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
