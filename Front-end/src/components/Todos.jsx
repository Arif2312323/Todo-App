export function Todos({ todos }) {
    if (!todos || todos.length === 0) {
        return <p>No todos available</p>;
      }
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '15px',
            background: '#f5f5f5', // Light gray background
          }}>
            <h2 style={{
              marginBottom: '5px',
            }}>{todo.title}</h2>
            <h3 style={{
              color: '#666', // Lighter gray for description
            }}>{todo.description}</h3>
            <button style={{
              backgroundColor: todo.completed ? '#4CAF50' : '#ddd', // Green for completed, gray for pending
              color: todo.completed ? '#fff' : '#333', // White text for completed, dark text for pending
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
              {todo.completed ? 'Completed' : 'Mark as Done'}
            </button>
          </div>
        ))}
      </div>
    );
  }
  