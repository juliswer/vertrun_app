export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    ULTIMATE_MONTH: 'ULTIMATE_MONTH',
    ANTEULTIMATE_MONTH: 'ANTEULTIMATE_MONTH',
    ANTEPENULTIMATE_MONTH: 'ANTEPENULTIMATE_MONTH',
    LAST_THREE_MONTHS: 'LAST_THREE_MONTHS'
}