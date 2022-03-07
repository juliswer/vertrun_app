const months = (state = [], action) => {
    switch (action.type) {
        case 'ULTIMATE_MONTH':
            return [
                ...state,
                {
                    month: 'ultimate',
                }
            ]
        case 'ANTEULTIMATE_MONTH':
            return [
                ...state,
                {
                    month: 'ante-ultimate',
                }
            ]
        case 'ANTEPENULTIMATE_MONTH':
            return [
                ...state,
                {
                    month: 'ante-penultimate',
                }
            ]
        default:
            return state
    }
}

export default months