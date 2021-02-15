import About from "../pages/Saiba Mais/SaibaMais";
import Home from "../pages/Home/Home";
import NewProcess from "../pages/Novo Processo/NovoProcesso";
import Consultation from "../pages/Consulta/Consulta";

const routes = [
    { path: '/Home', component: Home},
    { path: '/saiba-mais', component: About},
    { path: '/novo-processo', component: NewProcess}, 
    { path: '/consulta', component: Consultation}

]

export default routes;