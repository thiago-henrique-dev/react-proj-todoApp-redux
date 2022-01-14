const INITIAL_STATE = {description: '', list: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload} // ACTION PAYLOAD VEM DA AÇÃO QUE FOI CRIADA QUE É DISPARADA APARTIR DO EVENTO QUE O USUARIO DIGITOU
        case 'TODO_SEARCHED':
            return { ...state,  list: action.payload.data }
        case 'TODO_CLEAR':
            return {...state, description: ''}
            default:
                    return state
        }

}

// O REDUCER RECEBE O ESTADO ATUAL E RECEBE UMA ACTION E 
//SEMPRE QUE UMA ACTION FOR EXECUTADA OS REDUCERS DA SUA 
//APLICAÇÃO SAO CHAMADOS E VOCE VAI DIZER SE QUE MUDAR O ESTADO 
//DENTRO DESTE REDUCER OU SE VOCE QUER MANTER O ESTADO ATUAL DO JEITO QUE ESTA
