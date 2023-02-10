import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/About'}> About</Link>
            <Link to={'/Contact'}> Contact</Link>
            <Link to={'/Ourteam'}> OurTeam</Link>
            <Link to={'/Fortfolio'}> Portfolio</Link>
        </div>
    )
}

export default Navbar