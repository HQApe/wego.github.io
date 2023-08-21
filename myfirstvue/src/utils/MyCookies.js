import cookie from 'js-cookie'

const BearerAuthTokenkey = "My_Bearer_Auth_Token_Key"


const myCookie = {

    getBearerAuthToken() {

        let token = localStorage.getItem(BearerAuthTokenkey)
        if (token !== undefined) {
            return token
        }

        return cookie.get(BearerAuthTokenkey)
    },

    setBearerAuthToken(authToken, expires) {

        localStorage.setItem(BearerAuthTokenkey, authToken)

        cookie.set(BearerAuthTokenkey, authToken, {
            expires: new Date(expires * 1000)
        })
    },
    removeBearerAuthToken() {
        localStorage.removeItem(BearerAuthTokenkey)
    }
}

export default myCookie