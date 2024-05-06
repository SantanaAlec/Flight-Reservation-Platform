const bcrypt = require('bcrypt');
const User = require('../models/User');

// Controlador para el login
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Buscar al usuario por su email en la base de datos
        const user = await User.findOne({ email });

        // Verificar si el usuario existe y si la contraseña es correcta
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Si el usuario y la contraseña son válidos, enviar una respuesta exitosa
        res.status(200).json({ message: 'Login exitoso', user });
    } catch (error) {
        next(error);
    }
};

// Controlador para el registro
exports.registerUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Verificar si el email ya está registrado
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        // Si el email no está registrado, crear un nuevo usuario en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Enviar una respuesta exitosa
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        next(error);
    }
};