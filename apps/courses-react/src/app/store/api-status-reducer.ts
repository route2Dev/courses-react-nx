import { AnyAction } from '@reduxjs/toolkit';

const actionTypeEndsInSuccess = (type: string) => {
  return type.substring(type.length - 7) === 'Success';
};

const actionTypeEndsInStart = (type: string) =>
  type.substring(type.length - 5) === 'Start';
const actionTypeEndsInFailure = (type: string) =>
  type.substring(type.length - 7) === 'Failure';

export const apiCallsInProgressReducer = (state = 0, action: AnyAction) => {
  if (actionTypeEndsInStart(action.type)) {
    return state + 1;
  } else if (actionTypeEndsInFailure || actionTypeEndsInSuccess(action.type)) {
    return state > 0 ? state - 1 : 0;
  }

  return state;
};
