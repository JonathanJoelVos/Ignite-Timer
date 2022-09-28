import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CycleContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { register } = useFormContext()
  const { activeCycle } = useContext(CycleContext)

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions" />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={1}
        min={0}
        max={60}
        {...register('minutesAmout', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
