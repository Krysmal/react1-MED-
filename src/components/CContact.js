import React,{Component} from "react";
import "./CContact.css";

class CContact extends Component
{
    render()
    {
        return(
            <div className="container_contact">
                <div className="container_contact_header">
                    Skontaktuj się z nami poprzez:
                </div>
                <div className="container_contact_content">
                    <div className="container_contact_content_item">
                        <a className="container_contact_link" href="https://www.facebook.com">Facebook</a>
                    </div>
                    <div className="container_contact_content_item">
                        klinika_medreact@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}
export default CContact;