"use strict";
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        //Text definieren
        let text = {
            Narrator: {
                T0000: "Willkommen.",
                T0001: "",
                T0002: ""
            },
            CharacterName: {
                T0000: "",
                T0001: "",
                T0002: ""
            }
        };
        await Template.fS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        //Background Image
        await Template.fS.Location.show(Template.location.academy);
        await Template.fS.update(1);
        //Text definieren Version 2
        await Template.fS.Speech.tell(Template.characters.Narrator, "Ich bin der Erzähler");
    }
    Template.Scene = Scene;
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
        backgroundTheme: "src",
        //sound
        click: ""
    };
    Template.location = {
        academy: {
            name: "academy",
            background: "Images/Backgrounds/academy.jpg"
        }
    };
    //define character
    Template.characters = {
        Narrator: {
            name: ""
        },
        CharacterName: {
            name: "CharacterName",
            origin: Template.f.ORIGIN2D.BOTTOMRIGHT,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                normal: "",
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
//# sourceMappingURL=Template.js.map