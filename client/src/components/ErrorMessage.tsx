interface ErrorMessageProps {
	error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
	return <h1 className="text-center text-3xl text-white">{error}</h1>
}

export default ErrorMessage
