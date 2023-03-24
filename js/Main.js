let nokia = new Mobile('Nokia');
let iphone = new Mobile('Iphone');

nokia.turnOn();
nokia.writeMessage('Hello!');
nokia.sendMessage(iphone);

document.write(iphone.getInbox());