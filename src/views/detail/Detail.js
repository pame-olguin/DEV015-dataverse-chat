import data from '../../data/dataset.js'; //importa data
import { renderCard } from '../../card.js';
import { communicateWithOpenAI } from '../../lib/openAIApi.js';

const ExtractDataDetailById = (id) => {
  return data.filter((el)=>{ return el.id === id; })[0] || [];
};


const Detail = (params) => {

  const cardData = ExtractDataDetailById(params['id']);
  const view = document.createElement('div');

  const link = document.createElement('link');
  // Set the necessary attributes
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './views/detail/style.css';
  view.appendChild(link);

  if (cardData.length === 0) {
    // si se escribe mal el id, se devolvera un error y no se renderizara la pagina
    view.innerHTML = `
        <h1>Disculpa! no logre encontrar a la persona que buscas</h1>
        <a href="/">Link a Home</a>
      `;
  } else {
    view.classList.add('detail-card');
      
    view.append(renderCard(cardData, true));
    const right = document.createElement('div');
    right.classList.add('chat');
    
    const messagesDiv = document.createElement('div');
    messagesDiv.classList.add('messages');

    const writeDiv = document.createElement('div');
    writeDiv.classList.add('write');

    const div1 = document.createElement('div');
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name','message');
    textarea.setAttribute('rows',6);
    textarea.setAttribute('placeholder','Chatea conmigo aqui...');
    div1.appendChild(textarea);

    const div2 = document.createElement('div');
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('id','send');
    button.textContent='ENVIAR';

    button.addEventListener('click',function(){
      const messageBox = document.querySelector('textarea[name="message"]');
      const userMessage = messageBox.value.trim();

      if(!userMessage){
        alert('Por favor ingrese su solicitud!');
        return false;
      }

      const messages = [
        //{ role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage }
      ];

      const p = document.createElement('p');
      p.innerHTML=userMessage;
      p.classList.add('user-message');
      messagesDiv.appendChild(p);

      this.classList.add('hidden');

      const loading = document.querySelector('#loading');
      loading.classList.remove('hidden');

      communicateWithOpenAI(messages);
    });

    div2.appendChild(button);

    const loading = document.createElement('img');
    loading.setAttribute('id','loading');
    loading.setAttribute('src','https://media.tenor.com/YyiAFrG9bFMAAAAj/loading-buffering.gif');
    loading.classList.add('hidden');
    div2.appendChild(loading);

    writeDiv.appendChild(div1);
    writeDiv.appendChild(div2);

    right.appendChild(messagesDiv);
    right.appendChild(writeDiv);

    view.append(right);
  }

    
  return view;
};
  
export default Detail;