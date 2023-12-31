import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Kitchen from "./Kitchen";
import Recipes from "./Recipes";
import Footer from "./Footer";

function App() {

  const [page, setPage] = useState("home");

  function handlePage(){
    if (page==="home"){
      return <Home/>;
    } else if (page === "kitchen"){
      return <Kitchen/>
    } else if (page === "recipes"){
      return <Recipes/>
    }
  }

  return (
    <div className="container">
      <Header/>
      <main>
        <Nav page={page} setPage={setPage}/>
        {handlePage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
