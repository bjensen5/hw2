function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
          const newTodo = { 
              title: action.title,
              description: action.description, 
              dateCreated: new Date().toString(),
              
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
            const toggledTodo = {
                completed: action.completed,
                dateCompleted: new Date().toString(),
            }
            return [ toggledTodo, ...state ]
        case 'DELETE_TODO':
            const deletedTodo = {
                title: '',
                description: '',
                dateCreated: '',
                completed: ''
            }
            return [ deletedTodo, ...state ]

        default:
           return state;
    }
  }

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}
