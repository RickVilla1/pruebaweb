export class Animator {
    static setOutElementAnimation (htmlElement) {
        htmlElement.style.transition = 'all 0.4s ease-out'
        //htmlElement.style.transition = 'transform 0.2s ease-out'
    }

    static setInElementAnimation (htmlElement) {
        htmlElement.style.transition = 'all 0.4s ease-in'
        //htmlElement.style.transition = 'transform 0.2s ease-in'
    }
}