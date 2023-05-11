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
                                            <input type="email" className="form_login" id="InputEmail" aria-describedby="emailHelp" placeholder="Wpisz adres mailowy"/>
                                        </div>
                                        <div class="form_group">
                                            <input type="password" className="form_password" id="InputPassword" placeholder="Hasło"/>
                                        </div>
                                        <div className="form_group">
                                            <div className="form_remember">
                                                <input type="checkbox" className="form_checkbox" id="customCheck"/>
                                                <label  for="customCheck">Zapamiętaj mnie</label>
                                            </div>
                                        </div>
                                        <div className="form_group">
                                            <input type="submit" className="form_submit" value="Zaloguj się"/>
                                               
                                        </div>
                                        
                                        <hr/>
                                        <a href="index.html" className="container_appo_item_login_ext" target="_blank">
                                            Zaloguj się przy pomocy Google
                                        </a>
                                        <a href="index.html" className="container_appo_item_login_ext" target="_blank">
                                            Zaloguj się przy pomocy Facebook
                                        </a>
                                    </form>
                </div>
            </div>
        )
    }
}
export default CAppo;