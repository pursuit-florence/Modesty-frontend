import { Link } from "react-router-dom";

export default function Category({category}){
  return (
    <tr>
      <td>
        
      </td>
      
      <td>
        <Link to={`/category/${category.category_id}`}>{category.name}</Link>
      </td>
    </tr>
  )
}