declare namespace App {
  type AppContext = {
    isDarkTheme: boolean;
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
    setTodos: React.Dispatch<React.SetStateAction<Set<Todo>>>;
    todos: Set<Todo>;
  };

  type Todo = {
    done: boolean;
    title: string;
    id: number;
  };
}
