import React, {Component} from "react";
import "./CFooter.css";
import logo from "../img/logo.svg";
import logo_yt from "../img/logo_yt.png";
import logo_fb from "../img/logo_fb.png";
class CHeader extends Component
{
    render()
    {
        return(
            <div className="footer">
                <div className="footer_comp">
                    <div className="footer_comp_header"><b>Zobacz Także</b></div>
                    <div className="footer_comp_social_media">
                        <a className="footer_social_media_link" href="https://www.youtube.com" target="_blank" rel="noreferrer"><img className="footer_social_media_logo" src={logo_yt} alt="logo_yt"></img></a>
                        <a className="footer_social_media_link" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img className="footer_social_media_logo" src={logo_fb} alt="logo_yt"></img></a>
                    </div>
                </div>
                <div className="footer_comp">
                    <div className="footer_comp_header"><b>Użyteczne linki</b></div>
                    <div className="footer_comp_item"><a className="footer_link" href="https://www.nfz.gov.pl">NFZ</a></div>
                    <div className="footer_comp_item"><a className="footer_link" href="https://www.gov.pl/web/zdrowie">Ministerstwo Zdrowia</a></div>

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