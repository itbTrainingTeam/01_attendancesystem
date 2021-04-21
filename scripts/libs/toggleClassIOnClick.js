/*|--------------------------------------------------------------------------------------------------|*/
/*| class           : ToggleClassOnClick                                                             |*/
/*| explanation     : When creating a constructor, create a Click Event that grants the specified    |*/
/*|                   class when the specified HTML elements are clicked.                            |*/
/*|                   If HTML elements to which the class is given is not specified, the specified   |*/
/*|                   class is given to the elements to witch Click Event is given.                  |*/
/*| first argument  : Class given to HTML elements.                                                  |*/
/*| second argument : HTML elements that trigger Click Event.                                        |*/
/*| third argument  : HTML elements to which a class is given by a Click Event. (optional arugument) |*/
/*|--------------------------------------------------------------------------------------------------|*/

class ToggleClassOnClick {

    constructor(toggleClass, triggerEls, toggledEls) {

        /* Initialize */
        this.DOM = {};
        this.toggleClass = toggleClass;
        this.DOM.triggerEls = [];
        this.DOM.toggledEls = [];
        this.argumentType = [];
        this.toggledElsDef = toggledEls === undefined ? false : true;
        this.eventType = this._getEventType();

        /* arguments arrange */
        this._argumentTypeCheck(triggerEls, 1);
        this._triggerElsArrange(triggerEls);
        if ( this.toggledElsDef ) {
            this._argumentTypeCheck(toggledEls, 2);
            this._toggledElsArrange(toggledEls);
        }

        /* Grant Click Event */
        this._addEvent();

    }

    /* Store the second argument as HTML elements in an array */
    _triggerElsArrange(triggerEls) {

        if ( this.argumentType[1] === '[object Array]' ) {

            triggerEls.forEach( triggerElsEl => {

                if ( toString.call(triggerElsEl) === '[object String]' ) {

                    [].slice.call(document.querySelectorAll(triggerElsEl)).forEach( triggerEl => { this.DOM.triggerEls.push(triggerEl) } );

                } else if ( toString.call(triggerElsEl) === '[object NodeList]' ) {
                    
                    [].slice.call(triggerElsEl).forEach( triggerEl => { this.DOM.triggerEls.push(triggerEl) } );

                } else if (triggerElsEl instanceof HTMLElement) {

                    this.DOM.triggerEls.push(triggerElsEl);

                } else {
                    console.log( `error _triggerElsArrange : second argument ( ${triggerEls} ) is not expected` );
                }

            } );

        } else if ( this.argumentType[1] === '[object String]' ) {

            [].slice.call(document.querySelectorAll(triggerEls)).forEach( triggerEl => { 
                this.DOM.triggerEls.push(triggerEl);
            } );

        } else if ( this.argumentType[1] === '[object NodeList]' ) {

            [].slice.call(triggerEls).forEach( triggerEl => { this.DOM.triggerEls.push(triggerEl) } );

        } else if ( this.argumentType[1] === '[object HTMLElement]' ) {

            this.DOM.triggerEls.push(triggerEls);

        } else {
            console.log( `error _triggerElsArrange : second argument ( ${triggerEls} ) is not expected` );
        }

    }

    /* Store the third argument as HTML elements in an array */
    _toggledElsArrange(toggledEls) {

        if ( this.argumentType[2] === '[object Array]' ) {

            toggledEls.forEach( toggledElsEl => {

                if ( toString.call(toggledElsEl) === '[object String]' ) {

                    [].slice.call(document.querySelectorAll(toggledElsEl)).forEach( toggledEl => { this.DOM.toggledEls.push(toggledEl) } );

                } else if ( toString.call(toggledElsEl) === '[object NodeList]' ) {
                    
                    [].slice.call(toggledElsEl).forEach( toggledEl => { this.DOM.toggledEls.push(toggledEl) } );

                } else if (toggledElsEl instanceof HTMLElement) {

                    this.DOM.toggledEls.push(toggledElsEl);

                } else {
                    console.log( `error _toggledElsArrange : third argument ( ${toggledEls} ) is not expected` );
                }

            } );

        } else if ( this.argumentType[2] === '[object String]' ) {

            [].slice.call(document.querySelectorAll(toggledEls)).forEach( toggledEl => { this.DOM.toggledEls.push(toggledEl) } );

        } else if ( this.argumentType[2] === '[object NodeList]' ) {

            [].slice.call(toggledEls).forEach( toggledEl => { this.DOM.toggledEls.push(toggledEl) } );

        } else if ( this.argumentType[2] === '[object HTMLElement]' ) {

            this.DOM.toggledEls.push(toggledEls);

        } else {
            console.log( `error _toggledElsArrange : third argument ( ${toggledEls} ) is not expected` );
        }

    }

    /* Check the type and save the type */
    _argumentTypeCheck(argument, argumentIndex) {

        if ( argument instanceof HTMLElement ) {
            this.argumentType[argumentIndex] = '[object HTMLElement]';
        } else {
            this.argumentType[argumentIndex] = toString.call(argument);
        }

    }

    /* Decide an event with a touch or click */
    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    /* Given Click Event to HTML elements */
    _addEvent() {
        this.DOM.triggerEls.forEach( triggerEls => {
            triggerEls.addEventListener(this.eventType, this._toggleClass.bind(this));
        });

    }

    /* Toggle class to HTML elements */
    _toggleClass() {

        if ( this.toggledElsDef ) {

            this.DOM.toggledEls.forEach( toggledEl => {
                toggledEl.classList.toggle(this.toggleClass);
            } );

        } else {
            this.DOM.triggerEls.forEach( triggerEl => {
                triggerEl.classList.toggle(this.toggleClass);
            } );
        }
        
    }

}