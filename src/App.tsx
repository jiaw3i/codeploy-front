import './App.css'
import Header from "./components/Header.tsx";
// import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";
import Content from "./pages/content.tsx";

function App() {


    return (
        <div className={"app grid grid-row grid-rows-layout grid-flow-row-dense w-screen h-screen"}>
            <Header></Header>

            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default App
