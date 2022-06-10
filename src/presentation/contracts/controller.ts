import { HttpResponse } from './http';

export interface Controller {
    handler(): Promise<HttpResponse>
}