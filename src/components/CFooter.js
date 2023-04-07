import React, {Component} from "react";
import "./CFooter.css";

class CHeader extends Component
{
    render()
    {
        return(
            <div className="footer">
                <div className="footer_comp">MED</div>
                <div className="footer_comp">MED</div>
                <div className="footer_comp">autor: Krzysztof Malinowski</div>
                <div className="footer_comp">MED</div>
            </div>
        )
    }

}

export default CHeader;