interface ModalProps {
	children: React.ReactNode
	onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
	return (
		<>
			<div
				className="fixed bg-black/50 top-0 left-0 bottom-0 right-0 "
				onClick={onClose}
			/>
			<div className="w-[500px] p-5 rounded-md bg-blue-400 absolute top-[258px] left-1/2 -translate-x-1/2">
				{children}
			</div>
		</>
	)
}

export default Modal
