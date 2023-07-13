import {Route, Routes} from "react-router-dom";
import Deploy from "./deploy/Deploy.tsx";
import Package from "../components/Package.tsx";
import DeployDetail from "./deploy/DeployDetail.tsx";

export default function ContentRouter() {
    return (
        <div className={"h-full"}>

            <Routes>
                <Route path={"/"} element={<Deploy/>}>
                </Route>
                <Route path={"deploy"} element={<Deploy/>}>
                </Route>
                <Route path={"deploy/:dtype"} element={<DeployDetail/>}/>

                <Route path={"package"} element={<Package/>}>
                </Route>
            </Routes>
        </div>
    )
}