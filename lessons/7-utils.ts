/**
 *
 * 📚 Utility types
 *
 * TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.
 *
 * Complete list is available here: https://www.typescriptlang.org/docs/handbook/utility-types.html
 *
 **/

/**
 * 📚 Partial<T>
 * Constructs a type with all properties of T set to optional. This utility will return a type that represents all subsets of a given type.
 **/
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: 'organize desk',
  description: 'clear clutter',
  completed: true
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash'
});

/**
 * 📚 Pick<T,K>
 * Constructs a type by picking the set of properties K from T.
 **/
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
};
