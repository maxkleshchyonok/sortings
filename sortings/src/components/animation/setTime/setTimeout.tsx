import './style.scss';

const SetTimeout = () => {

    function move() {
        document.getElementById('rect')?.classList.add('move');
        setTimeout(() => {
            document.getElementById('rect')?.classList.remove('move');
        }, 2001);
        setTimeout(() => {
            move();
        }, 4002)
    }

    move();

    return (
        <div id='container' className="containerTimeout">
            <div id='rect' className="rectangleTimeout"></div>
        </div>
    )
}

export default SetTimeout;