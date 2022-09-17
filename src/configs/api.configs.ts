
const baseURL = process.env.REACT_APP_API_URL || "http://localhost";
const PORT= process.env.REACT_APP_API_PORT || "8081";

const url=`${baseURL}:${PORT}`

export const urls = {
  addTodo: `${url}/todos`,

  getTodos: `${url}/todos`,

  deleteTodo: (id: string) => `${url}/todos/${id}`,

  updateTodo: (id: string) => `${url}/todos/${id}`,
};
