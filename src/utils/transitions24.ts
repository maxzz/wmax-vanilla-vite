//https://github.com/jakearchibald/svgomg/blob/main/src/js/page/utils.js

function transitionClassFunc({ doRemoveClass = false } = {}) {
    return <T extends HTMLElement>(element: T, className = 'active', transitionClass = 'transition'): Promise<void> => {
        const hasClass = element.classList.contains(className);

        if ((doRemoveClass && !hasClass) || (!doRemoveClass && hasClass)) {
            return Promise.resolve();
        }

        const transitionEnd = new Promise<void>((resolve) => {

            function listener(event: TransitionEvent) {
                if (event.target === element) {
                    console.log('transitionend');
                    element.removeEventListener('transitionend', listener);
                    element.classList.remove(transitionClass);
                    resolve();
                }
            }

            element.classList.add(transitionClass);

            requestAnimationFrame(() => {
                element.addEventListener('transitionend', listener);
                element.classList[doRemoveClass ? 'remove' : 'add'](className);
            });
        });

        const transitionTimeout = new Promise<void>((resolve) => {
            // setTimeout(resolve, 10000); //tm: 1000
            setTimeout(() => {
                console.log('transitionTimeout');
                resolve()}, 10000); //tm: 1000
        });

        return Promise.race([transitionEnd, transitionTimeout]);
    };
}

export const transitionToClass = transitionClassFunc();
export const transitionFromClass = transitionClassFunc({ doRemoveClass: true });
