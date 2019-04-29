import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = (name, id)=> {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name,
        id
    };
};

export const removePlayer = (index, id) => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index, // I need this? 
        id
    }
};

export const scoreChange = (index, score, delta) => {
    return {
        type: PlayerActionTypes.SCORE_CHANGE,
        index, // I need this?
        score,
        delta
    };
};