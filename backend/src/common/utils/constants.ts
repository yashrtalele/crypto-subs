export enum UserType {
  CREATOR = "creator",
  FAN = "fan",
}

export enum HttpStatusMessages {
  OK = "success",
  BAD_REQUEST = "Bad request",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not found",
  INTERNAL_SERVER_ERROR = "Internal server error",
}

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  LENGTH_REQUIRED = 411,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
}
