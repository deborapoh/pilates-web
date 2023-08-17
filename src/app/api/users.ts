const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export const createUser = async (body: any) => {
  const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

  if (!response.ok) {
    throw new Error(`Error: ${await response.text()}`);
  }

  return await response.json();
}

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`)
  return await response.json()
}

export const softDeleteUser = async (docId: string) => {
  const response = await fetch(`${BASE_URL}/users/${docId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isActive: false,
      })
    });

  if (!response.ok) {
    throw new Error(`Error: ${await response.text()}`);
  }
}
