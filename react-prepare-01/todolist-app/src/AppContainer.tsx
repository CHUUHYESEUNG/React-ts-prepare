import produce from 'immer'
import { useState } from 'react'
// import App from './components/App'

/****
 *  AppContainer
 *  : 상태를 정의하고 상태를 변경하는 메서드를 작성
 *    상태 변경시 immer를 이용해서 불변성을 가지도록 주의
 *    컴포넌트를 향해 상태와 메서드를 속성으로 전달하도록 작성
 */

export type TodoListItemType = {
    no: number;
    todo: string;
    done: boolean;
};

const AppContainer = () => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no: 1, todo: "React학습1", done: false },
        { no: 2, todo: "React학습2", done: false },
        { no: 3, todo: "React학습3", done: true },
        { no: 4, todo: "React학습4", done: false },
    ]);

    const addTodo = (todo: string) => {
        let newTodoList = produce(todoList, (draft) => {
            // 상태 트리의 끝단을 변경한다. (새로운 데이터 추가?)
            draft.push({ no: new Date().getTime(), todo: todo, done: false });
        });
        setTodoList(newTodoList);
    };

    const deleteTodo = (no: number) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
            draft.splice(index, 1);
        });
        setTodoList(newTodoList);
    };

    const toggleDone = (no: number) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
            draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
    };
    return <App todoList={todoList}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone} />;

};

export default AppContainer;
