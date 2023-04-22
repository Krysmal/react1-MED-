import React,{Component} from "react";
import "./CManagment.css";

class CManagment extends Component
{
    render()
    {
        return(
            <div className="container_managment">
                <div className="container_managment_header">
                    Zarząd
                </div>
                <div className="container_managment_content">
                    <div className="container_managment_content_item">
                        Nadzorca: Maciej Czerniak
                    </div>
                    <div className="container_managment_content_item">
                        Zastępca Nadzorcy: Marcin Czerniak
                    </div>
                </div>
            </div>
        )
    }
}
export default CManagment;