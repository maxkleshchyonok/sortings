import './style.scss';

const RequestAniFrame = () => {

    let position = 0;
    let direction = 'right';
    let width = 900;

    function move() {
        if (direction == 'right') {
            position += 5;
            document.getElementById('reqRect')!.style.transform = `translate(${position}%)`;
            if (position > width) {
                direction = 'left';
            }
        }
        if (direction == 'left') {
            position -= 5;
            document.getElementById('reqRect')!.style.transform = `translate(${position}%)`;
            if (position == 0) {
                direction = 'right';
            }
        }
        requestAnimationFrame(move);
    }
    window.requestAnimationFrame(move)


    
    return (
        <div id="reqCont" className='reqContainer'>
            <div id='reqRect' className='reqRect'></div>
        </div>
    )
}

export default RequestAniFrame;