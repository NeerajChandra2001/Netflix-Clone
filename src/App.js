import React from "react";
import './App.css'
import { originals, action, ComedyMovies, RomanceMovies, Documentaries, HorrorMovies} from './Url/Url'
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <RowPost url={originals} title='Netflix Originals' />
      {/* <RowPost url={trending} title='Trending' isSmall /> */}
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />

    </div>
  );
}

export default App;




//       <RowPost url={HorrorMovies} title='Action' isSmall />
//       <RowPost url={RomanceMovies} title='Action' isSmall />
//       <RowPost url={Documentaries} title='Action' isSmall />
//       <RowPost url={trending} title='Trending' isSmall />