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
    }
  };

  //define character
  export let characters = {
    Narrator: {
      name: ""
    },

    CharacterName: {
      name: "CharacterName",
      origin: f.ORIGIN2D.BOTTOMRIGHT,
      pose: {
        /**Auflistung der Posen/Emotionen*/
        normal: "",
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