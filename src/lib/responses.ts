export enum STATUS_ENUM {
    ERROR = 'ERROR',
    OK = 'OK'
}
export type CustomResponse = {
    status: STATUS_ENUM,
    message?: string,
    data?: object,
    statusCode: number
}
export const BadRequestResponse: CustomResponse = {
    status: STATUS_ENUM.ERROR,
    message: 'Please provide correct data.',
    statusCode: 400
}

export const InternalErrorResponse: CustomResponse = {
    status: STATUS_ENUM.ERROR,
    message: 'DB operations are in problem',
    statusCode: 500
}

export const CreateSuccessResponse: CustomResponse = {
    status: STATUS_ENUM.OK,
    message: 'Successfully created',
    statusCode: 201
}

export const UpdateSuccessResponse: CustomResponse = {
    status: STATUS_ENUM.OK,
    message: 'Successfully updated',
    statusCode: 200
}

export const SuccessResponse: CustomResponse = {
    status: STATUS_ENUM.OK,
    statusCode: 200
}
export const ErrorResponse: CustomResponse = {
    status: STATUS_ENUM.ERROR,
    statusCode: 500
}