import MainHero from './components/MainHero';
import MainLayout from './layouts/MainLayout';
import TodosItemsContainer from './containers/TodosItemsContainer';

import "./styles/main.scss";

function App() {
  return (
    <MainLayout>
      <MainHero />
      <TodosItemsContainer />
    </MainLayout>
  )
}

export default App;
