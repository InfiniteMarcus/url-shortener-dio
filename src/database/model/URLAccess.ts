import { getModelForClass, prop } from '@typegoose/typegoose'

export class URLAccess {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    ipAddress: string

    @prop({ required: true })
    accessDate: Date
}

export const URLAccessModel = getModelForClass(URLAccess);