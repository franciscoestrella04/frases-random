import Phrase from './Phrase'

function Card ({phrase, onChange}) {

    return (
        <div className='card'>
           <Phrase phrase={phrase} />
                <button type='button' className='card-btn'
                onClick={onChange}>
                    selecciona otra frase
                </button>
                </div>
    )
}

export default Card