import React from 'react'
import './ModalAviso.scss'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
const ModalAviso = ({ conteudoParagrafo, conteudoButton }) => {

    const [fecharModal, setFecharModal] = React.useState("")

    const fecharModalAviso = () => {
        setFecharModal("fecharModal")
    }
    return (
        <div className={`container-modalAviso ${fecharModal}`}>
            <div className='modalAviso-arrow'>
                <ArrowBackIosRoundedIcon
                    className="arrowModal"
                    style={{
                        color: "rgba(255, 255, 255, 1)"
                    }} />
                <ArrowBackIosRoundedIcon
                    className="arrowModal"
                    style={{
                        color: "rgba(255, 255, 255, 0.66666666666)"
                    }} />
                <ArrowBackIosRoundedIcon
                    className="arrowModal"
                    style={{
                        color: "rgba(255, 255, 255, 0.33333333333)"
                    }} />
            </div>
            <div className='modalAviso-infos'>
                <div className="conteudoAviso">
                    <p>{conteudoParagrafo}</p>
                    <button
                        onClick={fecharModalAviso} className="modalAviso-button">
                        {conteudoButton}
                    </button>
                </div>

            </div>
        </div >
    )
}

export default ModalAviso