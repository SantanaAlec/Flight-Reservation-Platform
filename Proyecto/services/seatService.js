const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/seats';

async function handleResponse(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'Error en la solicitud');
  }
  return response.json();
}

async function createSeat(seatData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seatData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error al crear el asiento:', error);
    throw error;
  }
}

async function getAllSeats() {
  try {
    const response = await fetch(BASE_URL);
    return handleResponse(response);
  } catch (error) {
    console.error('Error al obtener los asientos:', error);
    throw error;
  }
}

async function getSeatById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error al obtener el asiento:', error);
    throw error;
  }
}

async function updateSeat(id, seatData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seatData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error al actualizar el asiento:', error);
    throw error;
  }
}

async function deleteSeat(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error al eliminar el asiento:', error);
    throw error;
  }
}

module.exports = {
  createSeat,
  getAllSeats,
  getSeatById,
  updateSeat,
  deleteSeat,
};
