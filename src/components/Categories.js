import { Outlet, Link } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>

      <ul className="categories">
        {categories.map(cat => (
          <li key={cat.id}>
            <Link to={cat.id}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
