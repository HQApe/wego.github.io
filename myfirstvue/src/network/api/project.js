import axHttp from '@/network/http'

export function getProjectList(params) {
    return axHttp.get("/api/project/list", {params})
}