import "../styles/Modal5.css"
const Modal5 =({closeModal5})=>{
    const sendMail = () => {
        const subject = "asdf";
        const body = "ywah simehtiuh";
    
        // Construct the `mailto` URL with subject and body parameters
        const mailtoURL = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Open the user's default email client with the pre-filled email
        window.open(mailtoURL, "_blank");
      };
    return(
        <>
        <div className="modal5">
            <div className="share_button_modal">
            <button onClick={closeModal5}>close</button>
            <br/>
            <button className="Send_mail_button" onClick={sendMail}>Send Mail</button>
            </div>
        </div>
        </>
    )
}
export default Modal5