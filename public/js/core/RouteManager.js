import { ID_CONTENT } from "./Constans.js"
import { Animator } from "./Animator.js"

 class RouteManager {
    static inTransition = false
    static ContentApp =  document.getElementById(ID_CONTENT)
    

    static NavigateTo(classView, history = true) {
        console.log("NavigateTo");
        if (RouteManager.inTransition) {
            return
        } {
            RouteManager.inTransition = true
        }
        
        const currentContentView = RouteManager.ContentApp.firstElementChild;
    

        const newContentViewObject = (typeof classView === 'string') ? window[classView].buildView() :classView.buildView()

        Animator.setOutElementAnimation(currentContentView)
        const divContainer = document.createElement('div')
        Animator.setInElementAnimation(divContainer)
        
        currentContentView.addEventListener('transitionend', function (event) {
            if (event.propertyName === 'opacity' && this.style.opacity == '0') {
                RouteManager.ContentApp.innerHTML = ''
                
                divContainer.append(newContentViewObject)
                divContainer.style.opacity = '0'
                divContainer.style.transform = 'translateY(35px)'
                RouteManager.ContentApp.append(divContainer)
                divContainer.offsetHeight; 
                
                divContainer.style.opacity = '1'
                divContainer.style.transform = 'translateY(0px)';
                if (history) {
                    ManagerHistory.pushState(classView.name);
                }
                RouteManager.inTransition = false
            }
        });

        currentContentView.style.opacity = '0'
        //currentContentView.style.transform = 'translateX(20px)'

    }
}

window.RouteManager = RouteManager;



class ManagerHistory {
    static pushState (state) {
        console.log(state)
        const stateId =  (typeof state === 'string') ? window[state].name : state.name
        history.pushState({pageId:  stateId} , null, '')
    }
}

window.onpopstate = function(event) {
    if (event.state.pageId != null) {
        RouteManager.NavigateTo(event.state.pageId, false)
    }
}

window.ManagerHistory = ManagerHistory;