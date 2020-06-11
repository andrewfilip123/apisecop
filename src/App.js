import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Session from './pages/session'
import MainSECOP from './pages/main'
import ContratoSECOP from './pages/contrato'
import NuevoContratoSECOP from './pages/nuevoContrato'
import NotFound from './pages/notFound'


const App = () => (
    
    <BrowserRouter>
        <Switch>
            <Route path="/session" component={Session} />
            <Route path="/main/secop" component={MainSECOP} />
            <Route path="/contrato/:idContrato" component={ContratoSECOP} />
            <Route path="/nuevo" component={NuevoContratoSECOP} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
   
        

)
export default App