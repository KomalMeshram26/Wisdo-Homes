const jsonwebtoken = require('jsonwebtoken');
const secretKey = 'secret';
const userSecretKey = 'KEy';

const jwt = {
    verifyTokenFn: async (req, res, next) => {
        var token = req.headers.authorization
        await jsonwebtoken.verify(token, secretKey, function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: err.message,
                });
            } else {
                req.user = {
                    id: 'dummyUserId',
                    communities: ['community1', 'community2'],
                }
                return next();
            }
        });
    },

}

module.exports = jwt;
