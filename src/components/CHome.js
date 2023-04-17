import React, {Component} from "react";
import './CHome.css';

class CHome extends Component
{
    
    render()
    {
        return(
            <div className="container_home">
                {this.props.statusCCon}

            </div>
        )
    }
}

export default CHome;