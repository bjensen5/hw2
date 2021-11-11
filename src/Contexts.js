import React from 'react'

export const ThemeContext = React.createContext({
    primaryColor: 'red',
    secondaryColor: 'yellow'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})