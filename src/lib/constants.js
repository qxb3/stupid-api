const ErrorTypes = {
  NO_PARAMETERS: 'NO_PARAMETERS_FOUND',
  INVALID_QUERY: 'INVALID_QUERY',
  INVALID_QUERY_TYPE: 'INVALID_QUERY_TYPE',
  INVALID_ROUTE: 'INVALID_ROUTE',
  INVALID_METHOD: 'INVALID_METHOD'
}

const ErrorMessages = {
  NO_PARAMETERS: 'You did not provide a parameter(s)',
  NUMBERS_ONLY: 'The parameter(s) you provided cannot have any letters and special characters',
  STRINGS_ONLY: 'The parameter(s) you provided cannot have any numbers',
  INVALID_ROUTE: 'This is a invalid route, please go away',
  INVALID_METHOD: 'You cannot use any methods other than GET'
}

const Errors = {
  NO_PARAMETERS: {
    error: ErrorTypes.NO_PARAMETERS,
    message: ErrorMessages.NO_PARAMETERS
  },
  INVALID_ROUTE: {
    error: ErrorTypes.INVALID_ROUTE,
    message: ErrorMessages.INVALID_ROUTE
  },
  INVALID_METHOD: {
    error: ErrorTypes.INVALID_METHOD,
    message: ErrorMessages.INVALID_METHOD
  }
}

module.exports = {
  ErrorTypes,
  ErrorMessages,
  Errors
}
