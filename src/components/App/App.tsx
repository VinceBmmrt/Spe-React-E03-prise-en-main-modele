import Footer from '../Footer/Footer';
import GroceriesList from '../GroceriesList/GroceriesList';
import Header from '../Header/Header';

import './App.scss';

const groceries = [
  'farine',
  'lait',
  'oeuf',
  'sucre',
  'pain',
  'framboises',
  'cerises',
];

function App() {
  return (
    <div className="app">
      <Header />
      {/* 3ème étape. Je passe les propriétés nécessaires à mon compsant */}
      <GroceriesList list={groceries} />
      <Footer />
    </div>
  );
}

export default App;
