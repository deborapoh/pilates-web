export const createUser = async (body: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body,
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json();
  } catch (error: any) {
    console.error('Error while posting data:', error.message);
  }
}

export const getUsers = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
  return await response.json()
}

export const softDeleteUser = async (docId: string) => {
  console.log('Soft delete', docId)
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${docId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: false,
        })
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json();
  } catch (error: any) {
    console.error('Error while posting data:', error.message);
  }
}
