import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // no need to provide parameter because react will automatically get the loader
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
