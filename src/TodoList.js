import React, { useContext } from 'react'
import StateContext from './StateContext'
import TodoItem from './TodoItem'

export default function TodoList (props) {
    const items = useContext(StateContext)

    return items.map(item =>
        <TodoItem {...item} {...props} key={item.id} />
    )
}