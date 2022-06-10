import { Controller } from '../../presentation/contracts'

export const adaptRoute = (controller: Controller) => {
    return (async (req, res) => {
        const httpResponse = await controller.handler()
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })
}