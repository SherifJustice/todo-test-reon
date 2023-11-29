class ApiError extends Error {
	status
	errors

	constructor(status, message, errors = []) {
		super()
		this.status = status
		this.message = message
	}

	static badRequest(message, errors = []) {
		return new ApiError(404, message, errors)
	}

	static internal(message) {
		return new ApiError(500, message)
	}

	static forbidden(message) {
		return new ApiError(403, message)
	}
}

export default ApiError
