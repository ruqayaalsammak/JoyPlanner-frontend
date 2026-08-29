import { Link } from 'react-router'

const Nav = (props) => {
    return (
        <nav>
            <Link className='nav-brand' to="/">The Joy Planner</Link>
            {props.user ? (
            <ul>
                <li>Welcome, {props.user.username}!</li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/events/new'>NEW EVENT</Link></li>
                <li><Link to='/' onClick={props.handleSignOut}>SIGN OUT</Link></li>
            </ul>
            ):(
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/sign-up'>SIGN UP</Link></li>
                <li><Link to='/sign-in'>SIGN IN</Link></li>
            </ul>
        )}   
        </nav>
    )
}

export default Nav