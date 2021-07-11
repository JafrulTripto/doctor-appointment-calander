import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {newAppointmentAdded: false, isReesetAppointmentFOrm:false}

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: initialState,
    reducers:{
        setNewAppointmentAdded(state, action) {
            state.newAppointmentAdded = action.payload;
        },
        resetAppointmentForm(state, action){
            state.isReesetAppointmentFOrm = action.payload
        }
    }
});

const store = configureStore({
    reducer:appointmentSlice.reducer
});
export const appointmentActions = appointmentSlice.actions;
export default store;