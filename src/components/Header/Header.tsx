// On oublie pas d'importer dans chacun de nos composants le fichier scss associé
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Titre du header</h1>
    </header>
  );
}

export default Header;
