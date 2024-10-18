const orders = [
    {
        costumer: {
            name: "Tiago Cal",
            cpf: "123.456.789-12",
            contact: {
                phone: "81 9.1234-5678", 
                email: "tiago@hotmail.com"
            },
            address: "Corno st, number 73, ap. 104",
            orders: {
                repair: true,
                exchange: false,
                extendWarranty: false,
                purchaseDate: new Date("2024-01-01"),
                productType: "Product A",
                invoiceNumber: "12345",
                purchaseValue: 100,
            },
        },
    },
];

module.exports = { orders };