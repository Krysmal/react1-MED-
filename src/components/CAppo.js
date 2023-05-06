import React, {Component} from "react";
import './CAppo.css';

class CAppo extends Component
{
    
    render()
    {
        return(
            <div className="container_appo" >
                <div className="container_appo_header">
                    Zarezerwuj wizytę
                </div>
                <div className="container_appo_item">
                    
                <form className="container_appo_item_login">
                                        <div className="form_group">
                                            <input type="email" className="form-control form-control-user" id="InputEmail" aria-describedby="emailHelp" placeholder="Wpisz adres mailowy"/>
                                        </div>
                                        <div class="form_group">
                                            <input type="password" className="form-control form-control-user" id="InputPassword" placeholder="Hasło"/>
                                        </div>
                                        <div className="form_group">
                                            <div className="form_remember">
                                                <input type="checkbox" className="" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Zapamiętaj mnie</label>
                                            </div>
                                        </div>
                                        <a href="index.html" className="">
                                            Login
                                        </a>
                                        <hr/>
                                        <a href="index.html" className="">
                                            <i className="fab fa-google fa-fw"></i> Zaloguj się przy pomocy Google
                                        </a>
                                        <a href="index.html" className="">
                                            <i className=""></i> Zaloguj się przy pomocy Facebook
                                        </a>
                                    </form>
                </div>
            </div>
        )
    }
}
export default CAppo;