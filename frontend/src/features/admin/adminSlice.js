import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adminService from "./adminService"

const initialState = {
    schedDate: [],
    schedTime: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}


// Get Filter Date
export const getDateFilter = createAsyncThunk('dateFilter/getAll',
    async (_, thunkAPI) => {
        try {

            // Calling al http req & res in service
            return await adminService.getDate()

        } catch (error) {
            // if any of this error exists it will be the message
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()

            // Reject and will send the message in the payload
            return thunkAPI.rejectWithValue(message)


        }
    });





// Slice Function ===================================================================
export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""

        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(getDateFilter.pending, (state) => {
                state.isLoading = true

            })
            .addCase(getDateFilter.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.schedDate = action.payload
            })

            .addCase(getDateFilter.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


    }

})

export const { reset } = adminSlice.actions
export default adminSlice.reducer

