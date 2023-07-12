import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ContentRouter from "./pages/ContentRouter.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {


    return (
        <div className={"app grid grid-row grid-rows-layout grid-flow-row-dense w-screen h-screen"}>

            <div className="drawer h-screen">
                <input id="my-drawer-menu" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content h-full max-h-screen flex flex-col no-scrollbar">
                    <Header></Header>
                    <ContentRouter></ContentRouter>
                    <Footer></Footer>
                </div>
                <Sidebar></Sidebar>
            </div>

        </div>
    )
}

export default App
