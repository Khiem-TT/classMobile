class Mobile {
    name;
    battery;
    status;
    message;
    inbox;
    outbox;

    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.status = false;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
    }

    checkStatus() {
        this.decreaseBattery();
        return this.status;
    }

    writeMessage(text) {
        if (this.status) {
            this.decreaseBattery();
            this.message = text;
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    decreaseBattery() {
        if (this.battery > 0) {
            this.battery--;
        } else {
            this.turnOff();
        }
    }

    chargeBattery() {
        this.battery += 1;
    }

    sendMessage(phone) {
        this.decreaseBattery();
        let date = new Date();
        this.outbox.push(this.name + ': ' + this.message + ' (time: ' + date.getHours() + ')');
        phone.inbox.push(this.name + ': ' + this.message + ' (time: ' + date.getHours() + ')');
    }

    getInbox() {
        this.decreaseBattery();
        return this.inbox;
    }

    getOutbox() {
        this.decreaseBattery();
        return this.outbox;
    }
}