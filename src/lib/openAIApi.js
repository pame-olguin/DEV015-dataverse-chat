
// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages, updateHtml = true) => {
  const apiKey = updateHtml ? getApiKey() : 'mocked-api-key';
  const url = 'https://api.openai.com/v1/chat/completions'; // Endpoint para GPT-4 u otro modelo
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4', // O el modelo que estés utilizando
        messages: messages
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json(); // Parse the JSON response
    })
      .then(data => {
        //console.log('Response from OpenAI:', data);
        if (updateHtml) {

          const assistantMessage = data.choices[0].message.content;

          const messagesDiv = document.querySelector('.messages');

          const p = document.createElement('p');
          p.classList.add('ai-message');
          p.innerHTML = assistantMessage;
          messagesDiv.appendChild(p);

          const messageBox = document.querySelector('textarea[name="message"]');
          messageBox.value = '';
          messageBox.focus();

          const button = document.querySelector('#send');
          button.classList.remove('hidden');

          const loading = document.querySelector('#loading');
          loading.classList.add('hidden');

          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        return data;
      })
      .catch(error => {
        //console.error('There was an error with the fetch operation:', error);
        throw new Error(`Network error`);
      });

      return response;
};