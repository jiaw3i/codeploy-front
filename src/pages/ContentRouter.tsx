import {Route, Routes} from "react-router-dom";
import Deploy from "../components/Deploy.tsx";
import Package from "../components/Package.tsx";

export default function ContentRouter() {
    return (
        <div className={"h-full"}>

            <Routes>
                <Route path={"/"} element={<Deploy/>}>
                </Route>
                <Route path={"/deploy"} element={<Deploy/>}>
                </Route>
                <Route path={"/package"} element={<Package/>}>
                </Route>
            </Routes>
        </div>
    )
}