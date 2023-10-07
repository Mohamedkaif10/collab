import "../styles/Modalthree.css"
const Modal3=({closeModal3})=>{
   return(
    <>
    <div className="modal3">
        <div className="main_div_modal">
        <button className="button_modal3" onClick={closeModal3}>close</button>
            <p>Share with Professors </p>
            <button className="share_button">Share</button>
             </div>
    </div>
    </>
   )
}
 export default Modal3
