import "./App.css";
import Categories from "./Components/Categories";
import Main from "./Components/Main";
import MonthSell from "./Components/MonthSell";
import Music from "./Components/Music";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import SecondPage from "./Components/SecondPage";
import UpFooter from "./Components/UpFooter";


function App() {
  return (
   <>
   <div className="w-full h-full">
   <UpFooter/>
    <NavBar/>
    <Main/>
    <SecondPage/>
    <Categories/>
    <MonthSell/>
    <Music/>
    <Product/>
   </div>
  
   </>
  );
}

export default App;
