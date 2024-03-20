import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (_,thunkAPI) => {
    try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

const UserSlice = createSlice({
    name:'user',
    initialState:{
        data:null,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading=false;
        })
        .addCase(fetchUser.fulfilled, (state,action) => {
            
            state.loading=false;
            state.error=null;
            state.data=action.payload;
        })
        .addCase(fetchUser.rejected,(state,action) => {
            state.loading=false;
            state.error=action.payload.message;
        })
    }
});


export const userData = (state) => state.user.data;
export default UserSlice.reducer;