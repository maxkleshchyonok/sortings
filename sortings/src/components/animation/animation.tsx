import KeyframesAnimation from "./keyframes/keyframesAni";
import RequestAniFrame from "./request/request";
import SetTimeout from "./setTime/setTimeout";
import TransitionAnimation from "./transition/transitionAni";

const Animation = () => {
    return (
        <>
            <KeyframesAnimation />
            <TransitionAnimation />
            <SetTimeout />
            <RequestAniFrame />
        </>
    )
}

export default Animation;