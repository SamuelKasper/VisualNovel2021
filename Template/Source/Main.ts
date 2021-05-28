namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("Start");

  //define transition
  export let transition = {
    clock: {
      duration: 1.5,
      alpha: "Transitions/circlewipe-cw.jpg",
      edge: 1
    }
  };

  //define sound
  export let sound = {
    //music
    backgroundTheme: "Audio/tetris.mp3",

    //sound
    click: "Audio/klopfen.mp3"
  };

  export let location = {
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
  export let characters = {
    Principal: {
      name: "Principal",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        /**Auflistung der Posen/Emotionen*/
        happy: "Images/Characters/Teacher/HappyResized.png",
        laught: "Images/Characters/Teacher/laughtResized.png",
        serious: "Images/Characters/Teacher/seriousResized.png"
      }
    },

    Swordsmen: {
      name: "Josh ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        /**Auflistung der Posen/Emotionen*/
        happy: "Images/Characters/Swordsmen/happy2.png",
        smile: ""
      }
    }
  };

  //Progress - kontrolle der Szenenstruktur (reihenfolge) - verzweigung der Pfade
  //Alles was sich vom Programm gemerkt werden soll, kommt in Progress rein
  export let dataForSave = {
    characterToSave: {
      name: "charToSave",
    },

    punkte: 0

  };

  export let items = {
    Image: {
      name: "Foto",
      description: "Ein Foto",
      image: "Images/Backgrounds/ladscape.jpg"
    }
  };

  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case f.KEYBOARD_CODE.F4:
        console.log("Save");
        await fS.Progress.save();
        break;
      case f.KEYBOARD_CODE.F9:
        console.log("Load");
        await fS.Progress.load();
        break;
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      { scene: Scene, name: "Scene" },
      { scene: Scene2, name: "Scene2" }
    ];

    //Progress Daten setzten
    fS.Progress.setData(dataForSave);

    // start the sequence
    fS.Progress.go(scenes);
  }
}