import './GroceriesList.scss';

// 1er étape: on va créer notre contrat spécifiant qu'elle sont les props que l'on peut passer à notre composant
type GroceriesListProps = {
  list: string[];
};
// 2ème étape, on positionne le contrat sur notre composant
// La règle eslint sur la destructuration des props nous encourage à piocher directement les propriétés qui nous intéresse depuis notre paramètre props
function GroceriesList({ list }: GroceriesListProps) {
  return (
    <main className="groceries-list">
      <h2 className="groceries-list__title">Titre du main</h2>
      <p className="groceries-list__description">Liste de courses dans main</p>
      <ul className="groceries-list__list">
        {list.map((item) => (
          <li className="groceries-list__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GroceriesList;
