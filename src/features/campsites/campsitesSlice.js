import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsiteSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsiteSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

export const selectCampsiteByID = (id) => {
    return(
        CAMPSITES.find((campsite) => campsite.id === parseInt(id))
    );
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};
