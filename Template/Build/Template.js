"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("Start");
    //define transition
    Template.transition = {
        clock: {
            duration: 1.5,
            alpha: "Transitions/circlewipe-cw.jpg",
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //music
        backgroundTheme: "Audio/tetris.mp3",
        //sound
        click: "Audio/klopfen.mp3"
    };
    Template.location = {
        academy: {
            name: "academy",
            background: "Images/Backgrounds/academy.jpg"
        },
        assembly_hall: {
            name: "assembly_hall",
            background: "Images/Backgrounds/assembly_hall.jpg"
        },
        black: {
            name: "black",
            background: "Images/Backgrounds/black.png"
        },
        dojo: {
            name: "dojo",
            background: "Images/Backgrounds/dojo.jpg"
        }
    };
    //define character
    Template.characters = {
        Principal: {
            name: "Principal",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: "Images/Characters/Teacher/HappyResized.png",
                laught: "Images/Characters/Teacher/laughtResized.png",
                serious: "Images/Characters/Teacher/seriousResized.png"
            }
        },
        Swordsmen: {
            name: "Josh ",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: "Images/Characters/Swordsmen/happy2.png",
                smile: ""
            }
        }
    };
    //Progress - kontrolle der Szenenstruktur (reihenfolge) - verzweigung der Pfade
    //Alles was sich vom Programm gemerkt werden soll, kommt in Progress rein
    Template.dataForSave = {
        characterToSave: {
            name: "charToSave",
        },
        punkte: 0,
        itemImage: {
            name: "Foto",
            description: "Description",
            image: "Images/Backgrounds/ladscape.jpg"
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.f.KEYBOARD_CODE.F4:
                console.log("Save");
                await Template.fS.Progress.save();
                break;
            case Template.f.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.fS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" },
            { scene: Template.Scene2, name: "Scene2" }
        ];
        //Progress Daten setzten
        Template.fS.Progress.setData(Template.dataForSave);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("Szene 1 started");
        //Text definieren
        let text = {
            Teacher: {
                T0000: "Herzlich Willkommen in der Akademie!",
                T0001: "Ich bin der Leiter der Akademie und darf heute die Einführungsveranstallung abhalten.",
                T0002: "Dann fangen wir mal an.",
                T0003: "Teilt euch bitte selbst nach euren Eigenschaften in zwei Gruppen ein.",
                T0004: "So, nachdem das geschafft ist kommen wir nun zu ein paar organisatorischen Dingen.",
                T0005: "Der Unterricht läuft so ab das ihr zwischen theoretischem und praktischem Unterricht wählen könnt.",
                T0006: "Für Magier wird eher der theoretische Teil empfohlen, für Swordsmen eher der praktische Unterricht.",
                T0007: "Trotz allem liegt die Wahl bei euch.",
                T0008: "Der Unterricht beginnt direkt nach dieser Veranstaltung.",
                T0009: "So, nun noch eine letzte, aber trotzdem wichtige Regel.",
                T0010: "Das betreten der Gebiete ausderhalb des Schulgeländes ist zu eurem eigenen Schutz verboten!",
                T0011: "Das war alles. Viel Spaß!"
            },
            Swordsmen: {
                T0000: "",
                T0001: "",
                T0002: ""
            }
        };
        await Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.academy);
        //await fS.update(2);
        await Template.fS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //
        await Template.fS.Location.show(Template.location.assembly_hall);
        await Template.fS.update(1);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.Speech.show();
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0000);
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.laught, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0001);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0002);
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.assembly_hall);
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.serious, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        //false = nicht auf userinput warten
        //className = css Klasse für den Text
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0003, false, "className");
        /*Ticker (Text wird erst geschrieben)
        fS.Speech.setTickerDelays(3000, 2);*/
        /*hintergrund Musik einblenden
        fS.Sound.fade(sound.backgroundTheme, 0.6, 0.1, true);*/
        //Decision element
        let classDesicionAnswer = {
            iSayMage: "Gruppe der Magier beitreten",
            iSaySwordsmen: "Gruppe der Kämpfer beitreten"
        };
        //Object kann mit dem klassen namen angesprochen werden
        let classDesicion = await Template.fS.Menu.getInput(classDesicionAnswer, "class");
        switch (classDesicion) {
            case classDesicionAnswer.iSayMage:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Speech.tell(Template.characters.Principal, "[Magier ausgewählt]");
                //Punkte verteilen
                Template.dataForSave.punkte += 1;
                break;
            case classDesicionAnswer.iSaySwordsmen:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Speech.tell(Template.characters.Principal, "[Kämpfer ausgewählt]");
                //Punkte verteilen
                Template.dataForSave.punkte += 50;
                break;
        }
        //Punkte kontrolle
        console.log(Template.dataForSave.punkte);
        //Text auf schwarzem Hintergrund
        await Template.fS.update(1);
        Template.fS.Speech.hide();
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        await Template.fS.Text.print("Einige Zeit später...");
        Template.fS.Text.close();
        await Template.fS.update(1);
        await Template.fS.Location.show(Template.location.assembly_hall);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0004);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0005);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0006);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0007);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0008);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0009);
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.serious, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0010);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0011);
        await Template.fS.Character.hide(Template.characters.Principal);
        //hintergrund Musik ausblenden
        Template.fS.Sound.fade(Template.sound.backgroundTheme, 0, 0.1, false);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene2() {
        console.log("Szene 2 started");
        //Text definieren
        let text = {
            Swordsmen: {
                T0000: "Das ist also das der Bereich für das Praktische Training."
            }
        };
        await Template.fS.Location.show(Template.location.dojo);
        await Template.fS.Character.show(Template.characters.Swordsmen, Template.characters.Swordsmen.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Swordsmen, text.Swordsmen.T0000);
        //Verzögerung (x sek nach letztem klick)
        let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
        await signalDelay2s();
        //set - Text direkt anzeigen ohne erst zu schreiben
        Template.fS.Speech.set(Template.characters.Swordsmen, "Dieser Text wird nicht erst geschrieben, sondern direkt angezeigt");
        //name eingeben und in Progress speichern
        Template.dataForSave.characterToSave.name = await Template.fS.Speech.getInput();
        //Inventar
        await Template.fS.Inventory.open();
        //Geht noch nicht!!
        Template.fS.Inventory.add(Template.dataForSave.itemImage);
        //Namens Eingabe Feld
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map