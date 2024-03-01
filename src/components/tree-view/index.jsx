import MenuList from "./menu-list";
import './styles.css'

export default function TreeView({ menus = [] }) {
  return (
    <div className="header"><h1>Tree View</h1>
    <div className="container">
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
    </div>
    </div>
  );
}