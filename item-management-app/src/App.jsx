import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Header from './components/Header';
import ListItem from './components/ListItems';
import ItemProvider from './context/ItemContext';

function App() {
  return (
    <div className="container">
      <ItemProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListItem />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
      </ItemProvider>
    </div>
  );
}

export default App;
