// userService.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/users';

export async function getUsers() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
}

export async function createUser(userData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }

    return response.json();
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
}

export async function updateUser(id, userData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el usuario');
    }

    return response.json();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el usuario');
    }

    return response.json();
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
}
