// reservationService.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/reservations';

async function createReservation(reservationData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error('Error al crear la reserva');
    }

    return response.json();
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    throw error;
  }
}

async function getAllReservations() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener las reservas');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    throw error;
  }
}

async function getReservationById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener la reserva');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener la reserva:', error);
    throw error;
  }
}

async function updateReservation(id, reservationData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar la reserva');
    }

    return response.json();
  } catch (error) {
    console.error('Error al actualizar la reserva:', error);
    throw error;
  }
}

async function deleteReservation(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar la reserva');
    }

    return response.json();
  } catch (error) {
    console.error('Error al eliminar la reserva:', error);
    throw error;
  }
}

module.exports = {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
};
