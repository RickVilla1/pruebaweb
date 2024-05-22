export class Animator {
    static setOutElementAnimation (htmlElement) {
        htmlElement.style.transition = 'all 0.1s ease-out'
    }

    static setInElementAnimation (htmlElement) {
        htmlElement.style.transition = 'opacity 0.9s ease-in-out, transform 0.8s ease-in-out'
    }
}