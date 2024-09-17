import "./App.css";

function generateId(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const projects = [
  {
    id: generateId(),
    name: "todoList",
    url: "https://tasklist-app-todo.vercel.app/",
  },
  {
    id: generateId(),
    name: "passwordGenerator",
    url: "https://passoword-generator-bakid.vercel.app/",
  },
];

function App() {
  console.log(projects.id);
  return (
    <div className="App">
      <p className="container m">
        {" "}
        Hello! I'm Joseph Bawo, and this page showcases a selection of my mini
        projects. Each project represents a unique challenge I’ve tackled and is
        a small piece of my journey in web development. Feel free to explore the
        links below to see what I’ve been working on. Your feedback is always
        welcome!
      </p>
      <ul className="container">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              className="link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
