import { ActionsTypes, Cycle } from './reducer'

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionsTypes.INTERRUPTED_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionsTypes.MARK_CURRENT_AS_FINISHED,
  }
}
