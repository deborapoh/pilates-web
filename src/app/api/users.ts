const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export const createUser = async (body: any) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })

      return await response.json();
  } catch (error: any) {
    console.error('Error while posting data:', error);
  }
}

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`)
  return await response.json()
}

export const softDeleteUser = async (docId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${docId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: false,
        })
      });

      return await response.json();
  } catch (error: any) {
    console.error('Error while deleting data:', error);
  }
}
