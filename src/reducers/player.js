import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
    {
        playerName: 'Arwen',
        id: 1,
        score: 0,
        isHighScore: false
    },
    {
        playerName: 'Moya',
        id: 2,
        score: 0,
        isHighScore: false
    },
    {
        playerName: 'Senor',
        id: 3,
        score: 0,
        isHighScore: false
    },
    {
        playerName: 'Lily',
        id: 4,
        score: 0,
        isHighScore: false
    }
];

export default function Player(state=initialState, action) {
    switch(action.type) {

        case PlayerActionTypes.ADD_PLAYER:
        console.log('DRD __ ADD_PLAYER action'); 
        return [
            ...state,
            {
                playerName: action.name,
                id: action.id, // will this work?
                score: 0,
                isHighScore: false
            }
        ];

        case PlayerActionTypes.REMOVE_PLAYER:
            console.log('DRD __ REMOVE_PLAYER action');
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            // return state.filter(p => p.id !== id);

        case PlayerActionTypes.SCORE_CHANGE:
            console.log('DRD __ SCORE_CHANGE action');
            return state.map((player, index) => {
                if(index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player;
            });
        default:
            return state;
    }
}