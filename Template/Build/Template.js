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
        }
    };
    //define character
    Template.characters = {
        Teacher: {
            name: "Teacher",
            origin: Template.fS.ORIGIN.BOTTOMRIGHT,
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: "Images/Characters/Teacher/HappyResized.png",
                smile: ""
            }
        },
        Josh: {
            name: "Josh",
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
                T0000: "Willkommen.",
                T0001: "Ich bin der Leiter der Akademie und darf heute die Einführungsveranstallung abhalten.",
                T0002: ""
            },
            CharacterName: {
                T0000: "Test Text Test Text",
                T0001: "",
                T0002: ""
            }
        };
        //Background Image
        await Template.fS.Location.show(Template.location.academy);
        //character
        await Template.fS.Character.show(Template.characters.Teacher, Template.characters.Teacher.pose.happy, Template.fS.positions.bottomright);
        //Transition
        //await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        //Fade duration
        await Template.fS.update(1);
        //speak
        //await fS.Speech.tell(characters.Teacher, "Ich bin der Erzähler");
        await Template.fS.Speech.tell(Template.characters.Teacher, text.Teacher.T0000);
        await Template.fS.Speech.tell(Template.characters.Teacher, text.Teacher.T0001);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map