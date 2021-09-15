import React from 'react'
import  ReactDOM  from 'react-dom'
import Paifilho from './componentes/Paifilho'
//import Primeiro from './componentes/Primeiro.jsx'
//import Bomdia from './componentes/Bomdia'

//import Saudacao  from './componentes/Saudacao'

import Pai from './componentes/Paifilho'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Souza"/>
            

            
            </Pai>
        

    </div>
    ,document.getElementById('root')
)

//ReactDOM.render(<Bomdia nome="Douglas"/>,document.getElementById('root'))

//render renderiza para mostrar na pagina web root