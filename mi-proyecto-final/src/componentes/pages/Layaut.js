import { Outlet, Link} from "react-router-dom";

const Layaut = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='Luces'> Luces</Link>
          </li>

          <li>
            <Link to="Cables"> Cables </Link >
          </li>
           
          <li>
            <Link  to='Baterías'> Baterías </Link >
          </li>

          <li>
            <Link to='Placas'> Placas </Link>
          </li>

          <li>
            <Link to="Ventas"> Ventas </Link>
          </li>

          <li>
            <Link to="SonbreNosotros"> Sobre nosotros </Link>
          </li>

          <li>
            <Link to="Contactos"> Contactos </Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layaut;
