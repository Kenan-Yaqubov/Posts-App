import "./Header.css"

function Header(props) {
    let {toggle} = props
    return <header className="container">
        <div className="logo">Posts</div>
        <div className="menuToggle" onClick={toggle}>
            <i className="fa-solid fa-bars"></i>
        </div>
    </header>;
}

export default Header;