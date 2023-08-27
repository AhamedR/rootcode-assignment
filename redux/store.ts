import { configureStore } from '@reduxjs/toolkit'

import vehicleSlice from '@/features/vehicleSlice'

export const store = configureStore({
  reducer: { vehicleSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
