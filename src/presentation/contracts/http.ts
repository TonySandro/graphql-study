export type HttpResponse<T = any> = {
    statusCode: number
    body: T
}

export const ServerError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: error.stack
})

export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})