import React, {Component} from "react";
import "./CFooter.css";
import logo from "../img/logo.svg";

class CHeader extends Component
{
    render()
    {
        return(
            <div className="footer">
                <div className="footer_comp">
                    <div className="footer_comp_header"><b>Zobacz Także</b></div>
                    <div className="footer_comp_item"></div>
                </div>
                <div className="footer_comp">
                    <div className="footer_comp_header"><b>Użyteczne linki</b></div>
                    <div className="footer_comp_item"><a href="https://www.nfz.gov.pl">NFZ</a></div>
                    <div className="footer_comp_item"><a href="https://www.gov.pl/web/zdrowie">Ministerstwo Zdrowia</a></div>

                </div>
                <div className="footer_comp">
                    <div className="footer_comp_header"><b>Autor:</b></div>
                    <div className="footer_comp_item">Krzysztof Malinowski</div>
                </div>
                <div className="footer_comp">
                    <img className="logo_footer" src={logo} alt="logo"></img>
                </div>
            </div>
        )
    }

}

export default CHeader;