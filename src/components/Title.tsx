import { NavLink } from "react-router-dom";

function Title(props: { className: string }) {

    return (
        <NavLink to="/" className={props.className} >🐤 Tweeter 🐣</NavLink>
    );
}

export default Title;