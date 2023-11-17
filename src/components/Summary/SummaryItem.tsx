const SummaryItem = ({
	itemName,
	itemValue,
}: {
	itemName: string
	itemValue: number
}) => {
	return (
		<div>
			<article className="bg-blue-50 w-36 rounded-md flex justify-between m-1 p-2">
				<h3 className="font-bold">{itemName}</h3>
				<span className="bg-blue-900 text-white px-2 rounded-sm">
					{itemValue}
				</span>
			</article>
		</div>
	)
}

export default SummaryItem
