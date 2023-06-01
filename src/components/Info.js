import "../style.css"
import Image from "../images/image.jpg"

function Info() {
    return(
        <main className="info">
            <img src={Image} alt="" className="image"/>
            <h2>Katiso Ledwaba</h2>
            <h5>Security Engineer</h5>
            <button className="button-email">Email</button>
            <button className="button-linkedin">LinkedIn</button>
        </main>
    )
}

export default Info