import { Link } from 'react-router-dom';
import Search from './Search';

const Header  = (props) => {
    return (
      <div className="nav">
        <div style={{flex: '2', textAlign: 'left'}}>
          <Link to="/" style={{color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none'}}>FINPROH8</Link>
        </div>
        {props.enableSearch && <div style={{flex: '1'}}><Search handleSearch={props.handleSearch} /></div>}
      </div>
    )
}

export default Header;