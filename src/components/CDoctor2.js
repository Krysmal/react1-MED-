import React,{Component} from "react";
import './CDoctor.css';
import img from "../img/Sławomir_Kowalski.jpg";

class CDoctor2 extends Component
{
    render()
    {
        return(
            <div className="container_doctor">
                <div className="container_doctor_img">
                    <img className="container_doctor_img" src={img} alt="profile_picture" ></img>

                </div>
                <div className="container_doctor_info">
                    <div className="container_doctor_info_item">
                        Imię: Sławomir
                    </div>
                    <div className="container_doctor_info_item">
                        Nazwisko: Kowalski
                    </div>
                    <div className="container_doctor_info_item">
                        Specjalizacja: Kardiolog
                    </div>
                    <div className="container_doctor_info_item">
                        Kontakt: Sławomir_Kowalski@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}
export default CDoctor2