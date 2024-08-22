import { CarItem } from 'components/screens/home/main/ItemCar/СarItem'
import { FC, useState } from 'react'
import { ICatalog } from 'types/content.interface'

const Catalog: FC<ICatalog> = ({ data = [] }) => {
	const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)
	const handleMenuIndex = (index: number) => {
		setActiveMenuIndex(prevIndex => (prevIndex === index ? null : index))
	}
	return (
		<div className='container'>
			{data.length ? (
				data.map((car, index) => (
					<CarItem
						key={car.id}
						car={car}
						active={activeMenuIndex === index}
						onToggle={() => handleMenuIndex(index)}
					/>
				))
			) : (
				<p>There are no cars</p>
			)}
		</div>
	)
}
export { Catalog }
