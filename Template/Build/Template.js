"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("Start");
    //define transition
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "",
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
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
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
        await Template.fS.update(3);
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
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0003, false);
        /*Ticker Delay
        fS.Speech.setTickerDelays(3000, 2);*/
        /*hintergrund Musik einblenden
        fS.Sound.fade(sound.backgroundTheme, 0.6, 0.1, true);*/
        //Decision element
        let classDesicionAnswer = {
            iSayMage: "Gruppe der Magier beitreten",
            iSaySwordsmen: "Gruppe der Kämpfer beitreten"
        };
        let classDesicion = await Template.fS.Menu.getInput(classDesicionAnswer, "class");
        switch (classDesicion) {
            case classDesicionAnswer.iSayMage:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Speech.tell(Template.characters.Principal, "[Magier ausgewählt]");
                break;
            case classDesicionAnswer.iSaySwordsmen:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Speech.tell(Template.characters.Principal, "[Kämpfer ausgewählt]");
                break;
        }
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
        console.log("FudgeStory Template Scene starting");
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
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map