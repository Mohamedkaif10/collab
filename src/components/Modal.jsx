import "../styles/Modal.css"
import like from "../assets/like.png"
const Modal =({closeModal})=>{
    return(
        <>
        <div className="modal">
            <div className="box_modal">
                <span><img src={like}/></span>
                    <span className="write">Your Project form has been created</span><br/>
                    <button className="clse_btn" onClick={closeModal}>Close</button>
            </div>
            </div></>
    )
}
export default Modal