import data from '../../data/dataset.js'; //importa data
import Home from './views/home/Home.js';
import Detail from './views/detail/Detail.js';
import Error from './views/Error.js';
import { setApiKey } from './lib/apiKey.js';

import { renderStats } from './view.js'; //importa view
import { computeStats } from './lib/dataFunctions.js';

// Importa otras vistas según sea necesario
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define las rutas y las vistas asociadas
const routes = {
  '/': Home,
  '/detail': Detail,
  '/error': Error,
};

// Configura las rutas
setRoutes(routes);

// Asigna el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  // elemento raíz en el HTML es un div con id 'root'
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);

  // Maneja la carga de la página inicial
  onURLChange(window.location);

  // Escucha los cambios de URL (navegación)
  window.onpopstate = () => onURLChange(window.location);

  // mostrar o ocultar formulario para ingresar el API KEY de OpenAi
  const showApiKeyLink = document.getElementById('showform');
  showApiKeyLink.addEventListener('click',function(){
    
    const form = document.getElementById('apikeyform');
    form.classList.toggle('hidden');

  });

  // Guardar Api Key de OpenAi
  const button = document.getElementById('sendkey');
  button.addEventListener('click',function(){
    
    const inputKey = document.querySelector('input[name="apikey"]');
    const apiKey = inputKey.value.trim();

    if( !apiKey ){
      alert('Por favor ingrese la API KEY de Open Ai!');
    }else{
      setApiKey(apiKey);
      inputKey.value='';

      // ocultamos el formulario de nuevo
      const form = document.getElementById('apikeyform');
      form.classList.add('hidden');
      alert('Api Key fue guardado con éxito.');
    }

  });

  const facts = document.querySelector("#curious_fact");
  facts.textContent = renderStats(computeStats(data));

});
