/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    other: {
        value: function () {
            console.log("other");
        }
    },

    handleButton2Action: {
        value: function (event) {
        }
    },

    handleButton2Something: {
        value: function (event) {
        }
    }

});
