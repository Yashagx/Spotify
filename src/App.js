import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Leftbar from './Leftbar'
import Playbar from './Playbar'
import Page from './Page'
import Search from './Search';
import LikedSongs from './Liked';
import Library from "./Library";
import Playlist from "./Playlist";
import Preview from "./Preview";
function App() {
  return (
    <Router>
      <div className="containerofmainpage">
        <Leftbar />
      <Playbar song="callyou"></Playbar>
        <Switch>
          <Route exact path="/Spotify">
            <Page />
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/playlist">
            <Playlist />
            {/* <Preview></Preview> */}
          </Route>
          <Route exact path="/liked">
            <LikedSongs />
          </Route>
          <Route exact path="/prev1">
            <Preview singer="Taylor Cash" name="Counting on You" img="ctng" />
          </Route>
          <Route exact path="/prev2">
            <Preview singer="Arman Malik" name="Besabriyaan" img="raaste" />
          </Route>
          <Route exact path="/prev3">
            <Preview singer="XXXTENTACION" name="Hope" img="xxxso" />
          </Route>
          <Route exact path="/prev4">
            <Preview singer="Why Don't We" name="Love Back" img="loveback" />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;
