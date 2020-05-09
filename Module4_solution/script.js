/*
Solution of assignment 4:

Expected output:

Hello Nasim
Hello Sara
good bye Jim
good bye Jack
Hello Paulo
Hello Franki
Hello Lily
Hello Pitter
Hello Leila
good bye Jahan
*/

(function() {
    var names = ["Nasim", "Sara", "Jim", "Jack", "Paulo", "Franki", "Lily", "Pitter", "Leila", "Jahan"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
