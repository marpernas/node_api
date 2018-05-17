var Products = require('./../entity/products');
var Service = function (req, res, next) {
    var product = new Products(req.body);
    product
        .save()
        .then(function () {
            if (!product) {
                return res.status(404)
                    .json({
                        status: false,
                        data: {}
                    })
            }
            return res.status(200)
                .json({
                    status: true,
                    data: product
                });
        })
        .catch(function (error) {
            return res.status(500)
                .json({
                    status: false,
                    data: {}
                })
        });
};

module.exports = Service;