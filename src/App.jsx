import { useState } from 'react'
import notifications from './notifications'

function Container(props) {
  return <div className="container mt-4">{props.children}</div>
}

function App() {
  const [list, setList] = useState(notifications)

  function clearOne(id) {
    const updated = list.filter(function (n) {
      return n.id !== id
    })
    setList(updated)
  }

  function clearAll() {
    setList([])
  }

  return (
    <Container>
      <h1 className="mb-3">Notifications</h1>

      <p className="mb-3">
        You have <strong>{list.length}</strong> notifications
      </p>

      <button className="btn btn-primary mb-4" onClick={clearAll}>
        Clear All
      </button>

      {list.map(function (n) {
        return (
          <div className="card mb-3" key={n.id}>
            <div className="card-body">
              <h5 className="card-title">{n.name}</h5>
              <p className="card-text">{n.message}</p>

              <button
                className="btn btn-danger btn-sm"
                onClick={function () {
                  clearOne(n.id)
                }}
              >
                Clear
              </button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}

export default App