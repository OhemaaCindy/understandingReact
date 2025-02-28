import "./App.css";
import Countercomponent from "./countercomponent";
import DisplayingData from "./displayingData";
import InputstateManagement from "./inputstateManagement";
import SearchBar from "./searchBar";
import Toogle from "./toogle";
import UpdateDocumentTitle from "./updateDocumentT";

function App() {
  return (
    <>
      <SearchBar />
      <DisplayingData />
      <Countercomponent />
      <InputstateManagement />
      <UpdateDocumentTitle />
      <Toogle />
    </>
  );
}

export default App;
