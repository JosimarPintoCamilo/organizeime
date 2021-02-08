import Sidebar from '../../components/painel/Sidebar';
import { useState } from 'react';
import style from '../../styles/dashboard.module.css';

export default function Dashboard(){
    const [menuSidebar, setmenuSidebar] = useState(false);

    function Menu(){
        setmenuSidebar(!menuSidebar);
        console.log("aqui");
    }
    return (
        <div>
            <section className={style.menuSuperior}>
                <div>
                    <div className={style.iconeSidebar} onClick={Menu}>
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                    <h2>Organizei.me</h2>
                </div>                
            </section>
            
            {menuSidebar ? <Sidebar />: ""}
        </div>
        
    );
}