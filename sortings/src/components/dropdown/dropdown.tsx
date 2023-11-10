import './style.scss';

const DropDown = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Choice a</a>
                <a href="#">Choice b</a>
                <a href="#">Choice c</a>
            </div>
        </div>
    )
}

export default DropDown