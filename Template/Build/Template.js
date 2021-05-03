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
        backgroundTheme: "src",
        //sound
        click: ""
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
        Josh: {
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
                T0002: "Dann fangen wir mal an."
            },
            CharacterName: {
                T0000: "Test Text Test Text",
                T0001: "",
                T0002: ""
            }
        };
        await Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.academy);
        await Template.fS.update(1); //5
        await Template.fS.Location.show(Template.location.assembly_hall);
        await Template.fS.update(1);
        await Template.fS.Character.show(Template.characters.Principal, Template.characters.Principal.pose.happy, Template.fS.positions.bottomcenter);
        await Template.fS.Speech.show();
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0000);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0001);
        await Template.fS.Speech.tell(Template.characters.Principal, text.Teacher.T0002);
        await Template.fS.Character.hide;
        (Template.characters.Principal);
        await Template.fS.update(1);
        await Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        await Template.fS.Text.print("Einige Zeit später...");
        await Template.fS.update(1);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map