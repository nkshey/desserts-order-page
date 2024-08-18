import DessertItem from "./DessertItem";
import dessertsData from "./dessertData";

function DessertsList() {
  return (
    <ul className="sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 space-y-8">
      {dessertsData.map((dessert) => (
        <DessertItem dessert={dessert} key={dessert.id} />
      ))}
    </ul>
  );
}

export default DessertsList;
