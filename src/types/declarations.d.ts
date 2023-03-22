declare namespace App {
  type AppContext = {
    isDarkTheme: boolean;
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
    dispatch: React.Dispatch<Action<unknown>>;
    state: AppState;
  };

  type Todo = {
    done: boolean;
    title: string;
    id: number;
  };

  type AppState = {
    todos: Set<Todo>;
  };

  type Action<T = unknown> = {
    type: string;
    payload?: T;
  };
}
