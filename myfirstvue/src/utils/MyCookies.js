import cookie from 'js-cookie'

const BearerAuthTokenkey = "My_Bearer_Auth_Token_Key"


const myCookie = {

    getBearerAuthToken: function () {
        return cookie.get(BearerAuthTokenkey)
    },

    setBearerAuthToken: function (authToken, expires) {
        cookie.set(BearerAuthTokenkey, authToken, {
            expires: new Date(expires * 1000)
        })
    }
}

export default myCookie