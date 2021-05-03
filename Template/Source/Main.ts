namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("Start");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };

  //define sound
  export let sound = {
    //music
    backgroundTheme: "src",

    //sound
    click: ""
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
      name: "Principal: ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        /**Auflistung der Posen/Emotionen*/
        happy: "Images/Characters/Teacher/HappyResized.png",
        laught: "Images/Characters/Teacher/laughtResized.png",
        serious: "Images/Characters/Teacher/seriousResized.png"
      }
    },

    Josh: {
      name: "Josh: ",
      origin: fS.ORIGIN.BOTTOMRIGHT,
      pose: {
        /**Auflistung der Posen/Emotionen*/
        happy: "Images/Characters/Swordsmen/Happy.png",
        smile: ""
      }
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
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    fS.Progress.go(scenes);
  }
}