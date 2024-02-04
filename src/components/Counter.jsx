import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={incrementCount}>
                Count
            </button>
            <p>
                {count}
            </p>
        </div>
    )
}

export default Counter