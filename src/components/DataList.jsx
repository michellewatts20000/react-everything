import { useState } from "react"

const DataList = () => {

const [data, setData] = useState(
[
      { name: 'Daniel', age: 25 },
      { name: 'John', age: 24 },
      { name: 'Jen', age: 31 },
    ])

  return (
    <div>
<ul>
{data.map((item, index) => (
  <li key={index}>{item.name} is {item.age} years old</li>
))}
</ul>
    </div>
  )
}

export default DataList