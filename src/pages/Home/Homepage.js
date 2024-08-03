import React, { useEffect } from 'react';
import { getAll } from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import { search } from '../../services/foodService';
import Search from '../../components/Search/Search';

const initialState = {foods: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return { ...state, foods: action.payload };
        default:
            return state;
    }
};

export default function Homepage() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { foods } = state;
    const{ searchTerm } = useParams();

    useEffect( () => {
        const loadFoods = searchTerm ? search(searchTerm): getAll();

        loadFoods.then(foods => dispatch({type:'FOODS_LOADED', payload: foods}));
    }, [searchTerm]);
    
  return (
    <>
        <Search />
        <Thumbnails foods={foods}/>
    </>
  );
}
