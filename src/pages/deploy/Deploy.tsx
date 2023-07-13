import {DeployCardData} from "../../data/deploy.tsx";
import {useNavigate} from "react-router-dom";

export default function Deploy() {
    const navigate = useNavigate()
    return (
        <div className={"h-full text-center"}>
            <div className={"flex flex-row p-5 flex-wrap "}>

                {
                    DeployCardData.map((item) => {
                        return (
                            <div key={item.title}
                                 className="card w-96 bg-base-300 shadow-xl hover:shadow-2xl hover:cursor-pointer p-0 m-2">
                                <div className="card-body text-left">
                                    <h2 className="card-title">{item.cnTitle}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => {
                                            navigate(item.path)
                                        }}>去部署
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}