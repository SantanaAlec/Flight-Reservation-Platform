// flightService.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/flights';

async function createFlight(flightData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flightData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el vuelo');
    }

    return response.json();
  } catch (error) {
    console.error('Error al crear el vuelo:', error);
    throw error;
  }
}

async function getAllFlights() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los vuelos');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener los vuelos:', error);
    throw error;
  }
}

async function getFlightById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener el vuelo');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener el vuelo:', error);
    throw error;
  }
}

async function updateFlight(id, flightData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flightData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el vuelo');
    }

    return response.json();
  } catch (error) {
    console.error('Error al actualizar el vuelo:', error);
    throw error;
  }
}

async function deleteFlight(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el vuelo');
    }

    return response.json();
  } catch (error) {
    console.error('Error al eliminar el vuelo:', error);
    throw error;
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlightById,
  updateFlight,
  deleteFlight,
};
