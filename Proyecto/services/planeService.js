
// planeService.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/planes';

async function createPlane(planeData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planeData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el avión');
    }

    return response.json();
  } catch (error) {
    console.error('Error al crear el avión:', error);
    throw error;
  }
}

async function getAllPlanes() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los aviones');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener los aviones:', error);
    throw error;
  }
}

async function getPlaneById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener el avión');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener el avión:', error);
    throw error;
  }
}

async function updatePlane(id, planeData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planeData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el avión');
    }

    return response.json();
  } catch (error) {
    console.error('Error al actualizar el avión:', error);
    throw error;
  }
}

async function deletePlane(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el avión');
    }

    return response.json();
  } catch (error) {
    console.error('Error al eliminar el avión:', error);
    throw error;
  }
}

module.exports = {
  createPlane,
  getAllPlanes,
  getPlaneById,
  updatePlane,
  deletePlane,
};
