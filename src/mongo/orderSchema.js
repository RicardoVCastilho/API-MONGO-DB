const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// redefinição do objeto contact
const contactSchema = new Schema({
    phone: {type: String, required: true},
    email: {type: String, required: true}
});

//redefinição do objeto order
const orderSchema = new Schema({
    repair: { type: Boolean, required: true}, 
    exchange: { type: Boolean, required: true},
    extendWarranty: { type: Boolean, required: true},
    purchaseDate: { type: Date, required: true},
    productType: { type: String, required: true},
    invoiceNumber: { type: String, required: true},
    purchaseValue: { type: Number, required: true}
});

//redefinição do objeto customer
const customerSchema = new Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: contactSchema, required: true},
    orders: {type: orderSchema, required: true}
});

const orderModel = mongoose.model('Order', customerSchema);

module.exports = { orderModel };

