class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.length = 1;
        this.at = 0;
    }

    /** 
     * @param {string} url
     * @return {void}
     * */
    visit(url) {
        if (this.length !== this.at + 1) {
            this.history.length = this.at + 1;
            this.length = this.at + 1;
        }
        this.history.push(url);
        this.length++;
        this.at++;
    }

    /** 
     * @param {number} steps
     * @return {string}
     * */
    back(steps) {
        this.at = (this.at - steps) > -1 ? this.at - steps : 0;
        return this.history[this.at];
    }

    /** 
     * @param {number} steps
     * @return {string}
     * */
    forward(steps) {
        this.at = this.at + steps < this.length ? this.at + steps : this.length - 1;
        return this.history[this.at];
    }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');
browserHistory.visit('facebook.com');
browserHistory.visit('youtube.com');

console.log(browserHistory.back(1)); // facebook.com
console.log(browserHistory.back(1)); // google.com
console.log(browserHistory.forward(1)); // facebook.com

browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2)) // linkedin.com
console.log(browserHistory.back(2)); // google.com
console.log(browserHistory.back(7)); // leetcode.com