import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    // Desarrolla el test correspondiente aquí
    setApiKey('TEST');
    const apiKey=getApiKey();
    expect(apiKey).toBe('TEST');

  });
});

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
    const apiKey=getApiKey();
    expect(apiKey.length).toBe(4);
  });
});