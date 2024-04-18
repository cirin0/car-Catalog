import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { CarService } from '../../../../../services/car.service'
import { ICarData } from '../../../../../types/car.interface'

const useCreateCar = (reset: UseFormReset<ICarData>) => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation({
		mutationKey: ['create car'],
		mutationFn: (data: ICarData) => CarService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cars'] })
			reset()
		},
	})
	const createCar: SubmitHandler<ICarData> = data => {
		mutate(data)
	}
	return { createCar }
}
export { useCreateCar }
