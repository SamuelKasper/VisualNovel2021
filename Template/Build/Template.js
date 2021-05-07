"use strict";
var Template;
(function (Template) {
    async function Decision() {
        console.log("Desicion");
        let text = {
            Teacher: {
                T0000: "Test"
            },
            Swordsmen: {
                T0000: ""
            }
        };
        await Template.fS.Location.show(Template.location.academy);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0000);
        await Template.fS.update(1);
    }
    Template.Decision = Decision;
})(Template || (Template = {}));
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
        click: "Auidio/klopfen.mp3"
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
            name: "Principal: ",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: "Images/Characters/Teacher/HappyResized.png",
                laught: "Images/Characters/Teacher/laughtResized.png",
                serious: "Images/Characters/Teacher/seriousResized.png"
            }
        },
        Swordsmen: {
            name: "Josh: ",
            origin: Template.fS.ORIGIN.BOTTOMRIGHT,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: "Images/Characters/Swordsmen/Happy.png",
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
            { scene: Template.Scene, name: "Scene" }
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
                T0003: "So, nachdem ihr nun alle relevanten Information habt können wir endlich anfangen.",
                T0004: "Teilt euch bitte selbst nach euren Eigenschaften in zwei Gruppen ein."
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
        await Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.Character.hide(Template.characters.Principal);
        await Template.fS.update(1);
        //await fS.Text.print("Einige Zeit später...");
        //await fS.update(1);
        await Template.fS.Location.show(Template.location.assembly_hall);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.serious, Template.fS.positions.bottomcenter);
        await Template.fS.update(2);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0003);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0004);
        //Ticker Delay
        Template.fS.Speech.setTickerDelays(3000, 2);
        //hintergrund Musik einblenden
        Template.fS.Sound.fade(Template.sound.backgroundTheme, 0.6, 0.1, true);
        //Decision element
        let firstDialogueElementAnswer = {
            iSayMage: "Gruppe der Magier beitreten",
            iSaySwordsmen: "Gruppe der Swordsmen beitreten"
        };
        let firstDialogueElement = await Template.fS.Menu.getInput(firstDialogueElementAnswer, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswer.iSayMage:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Speech.tell(Template.characters.Principal, "Mage Dialog");
                break;
            case firstDialogueElementAnswer.iSaySwordsmen:
                //continue writing on this path
                Template.fS.Sound.play(Template.sound.click, 1);
                await Template.fS.Character.show(Template.characters.Swordsmen, Template.characters.Swordsmen.pose.happy, Template.fS.positions.bottomcenter);
                await Template.fS.update(1);
                await Template.fS.Speech.tell(Template.characters.Principal, "Swordsmen Dialog");
                break;
        }
        //hintergrund Musik ausblenden
        Template.fS.Sound.fade(Template.sound.backgroundTheme, 0, 0.1, false);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map