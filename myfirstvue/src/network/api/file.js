import download from "@/network/download"

export function downloadFile(url, params) {
    return download.get(url, {params})
}

