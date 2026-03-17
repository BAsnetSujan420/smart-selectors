import BreadCrumb from './components/BreadCrumb';
import ParentSelector from './components/ParentSelector';
import QAList from './components/QAList';
import TodoList from './components/ToDoList';

function App() {
  return (
    <>
      {/* <ParentSelector /> */}
      <BreadCrumb />
      <TodoList />
      <QAList />
    </>
  );
}

export default App;
