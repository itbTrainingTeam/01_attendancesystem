class LoadHtml {
    constructor( el, url ) {
        this.el = document.querySelector(el);
        this.url = url;
        this.method = 'GET';
        this.xhr = new XMLHttpRequest();
        if( this.el !== null ) this._load();
    }

    _load() {
        this.xhr.open(this.method, this.url, this.el);
        this.xhr.onreadystatechange = this._readHtml.bind(this);
        this.xhr.send();
    }

    _readHtml() {
        if(this.xhr.readyState === 4 && this.xhr.status === 200) {
            var restxt = this.xhr.responseText;
            this.el.innerHTML = restxt;
        }
    }
}