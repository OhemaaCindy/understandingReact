import "./App.css";
import Countercomponent from "./countercomponent";
import DisplayingData from "./displayingData";
import Header from "./header";
// import GlobalAuthentication from "./globalAuthentication";
import InputstateManagement from "./inputstateManagement";
import NestedList from "./nestedList";
import RenderingList from "./renderingList";
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
      {/* <GlobalAuthentication /> */}
      <RenderingList />
      <NestedList />
      <Header title="Little red ridding hood" />
    </>
  );
}

export default App;
