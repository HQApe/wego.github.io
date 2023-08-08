import axHttp from '@/network/http'

export function logIn(params) {
    return axHttp.post("/auth/login", params)
}

export function logOut() {
    return axHttp.get("/auth/logout")
}