const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

async function create(userData) {
    const { name, profilePic, email, password } = userData;

    // Verifica si el correo ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('El correo electrónico ya está en uso');
    }

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        profilePic,
        email,
        password: hashedPassword,
    });

    return newUser.save();
}

module.exports = {
    create,
};
