import React,{Component} from "react";
import './CDoctor.css';
import img from "../img/Andrzej_Markiewicz.jpg";

class CDoctor1 extends Component
{
    render()
    {
        return(
            <div className="container_doctor">
                <div className="container_doctor_img">
                    <img className="container_doctor_img" src={img} alt="proflile_picture"></img>

                </div>
                <div className="container_doctor_info">
                    <div className="container_doctor_info_item">
                        Imię: Andrzej
                    </div>
                    <div className="container_doctor_info_item">
                        Nazwisko: Markiewicz
                    </div>
                    <div className="container_doctor_info_item">
                        Specjalizacja: Kardiolog
                    </div>
                    <div className="container_doctor_info_item">
                        Kontakt: Andrzej_Markiewicz@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}
export default CDoctor1