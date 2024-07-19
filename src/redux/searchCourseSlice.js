import {createSlice} from '@reduxjs/toolkit';

//Este searchSlice permite buscar los cursos pero dentro de la pagina Cursos para que pueda comprar el usuario y no es 
//el search para buscar dentro de la pagina de Administracion
const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchCourse:'',
    },
    reducers:{
        search(state,action){
            return {...state, searchCourse:action.payload}
        },
        remove(state,action){
            return {...state, searchCourse:''}
        }
    }
});

export const {search,remove} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
