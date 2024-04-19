// paymentService.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/payments';

async function createPayment(paymentData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el pago');
    }

    return response.json();
  } catch (error) {
    console.error('Error al crear el pago:', error);
    throw error;
  }
}

async function getAllPayments() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los pagos');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener los pagos:', error);
    throw error;
  }
}

async function getPaymentById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener el pago');
    }

    return response.json();
  } catch (error) {
    console.error('Error al obtener el pago:', error);
    throw error;
  }
}

async function updatePayment(id, paymentData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el pago');
    }

    return response.json();
  } catch (error) {
    console.error('Error al actualizar el pago:', error);
    throw error;
  }
}

async function deletePayment(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el pago');
    }

    return response.json();
  } catch (error) {
    console.error('Error al eliminar el pago:', error);
    throw error;
  }
}

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
