import { test, expect } from '@playwright/test';

test('req', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });

  console.log(response.status());

  const body = await response.json();
  console.log(body);
});
