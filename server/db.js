const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://alamrangrej787:TEL1XfEEsWPwX87g@testregis.vr9pvvb.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

async function insertUser(userData) {
    const user = new User(userData);
    return await user.save();
}

module.exports = { insertUser };
