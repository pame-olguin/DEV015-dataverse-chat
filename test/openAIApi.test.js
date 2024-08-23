// openAIApi.test.js

import { communicateWithOpenAI } from '../src/lib/openAIApi';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('communicateWithOpenAI', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should fetch and return a response from OpenAI', async () => {
      fetch.mockResolvedValue({
        ok: true,
        json: async () => ({
          choices: [
            { message: { content: 'This is a test response from OpenAI.' } },
          ],
        }),
      });
  
      const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Tell me a joke.' },
      ];
  
      const response = await communicateWithOpenAI(messages,false);
  
      expect(fetch).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mocked-api-key',
          },
          body: JSON.stringify({
            model: 'gpt-4',
            messages: messages,
          }),
        }
      );
  
      expect(response).toEqual({
        choices: [
          { message: { content: 'This is a test response from OpenAI.' } },
        ],
      });
    });
  
    it('should handle fetch errors', async () => {
      fetch.mockRejectedValue(new Error('Network error'));
  
      const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Tell me a joke.' },
      ];
  
      await expect(communicateWithOpenAI(messages,false)).rejects.toThrow(
        'Network error'
      );
    });
  });