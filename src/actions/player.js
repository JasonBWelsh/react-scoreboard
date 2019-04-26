import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = id => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        // index, // I need this? 
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