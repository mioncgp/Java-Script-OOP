// Prototypical ingeritance
// Prototype is essentially a parent of another object
// Property discriptors - they are extra info about properties inside of objects
function Watch() {
    this.startTime = 0;
    this.stopTime = 0;
    this.running = 0;
    this.duration = 0;

    Watch.prototype.start = function() {
        if(this.running) {
            throw new Error('Watch has already started.');
        }
        this.running = true;
        this.startTime = new Date();
    }

    Watch.prototype.stop = function() {
        if(!this.running) {
            throw new Error('Watch has already stopped.');
        }
        this.running = false;
        this.stopTime = new Date();
        const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds;
    }

    Watch.prototype.stop = function() {
        this.startTime = null,
        this.stopTime = null,
        this.running = null,
        this.duration = 0
    }

    // Watch.prototype.defineProperty(this, 'duration', {
    //     get: function() {
    //         return duration;
    //     }
    // });
}

const w = new Watch();