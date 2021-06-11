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

    punkte: 0,

    skala: {
      a: 0
    }

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

  //Menu
  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    volUp: "Volume Up",
    volDown: "Volume Down",
    credits: "Credits",
    about: "About"
  };

  //create Menu with Buttons
  let gameMenu: fS.Menu;

  async function MenuStuff(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await fS.Progress.save();
        break;
      case inGameMenu.load:
        await fS.Progress.load();
        break;
      case inGameMenu.close:
        //Schließt das Menü
        gameMenu.close();
        break;
      case inGameMenu.volUp:
        volumeUp();
        break;
      case inGameMenu.volDown:
        volumeDown();
        break;
      case inGameMenu.credits:
        break;
      case inGameMenu.about:
        break;
    }
  }

  //Menu functions
  let volume: number = 1;
  export function volumeUp(): void {
    if (volume < 100) {
      volume += 0.1;
      fS.Sound.setVolume(sound.backgroundTheme, volume);
    }
  }

  export function volumeDown(): void {
    if (volume > 0) {
      volume -= 0.1;
      fS.Sound.setVolume(sound.backgroundTheme, volume);
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {

    //Menu
    gameMenu=fS.Menu.create(inGameMenu, MenuStuff, "gameMenu");

    //Szenen
    let scenes: fS.Scenes = [
      { scene: Scene, name: "Scene" },
      { scene: Scene2, name: "Scene2" }
    ];

    let uiElement: HTMLElement = document.querySelector('[type=interface]');
    dataForSave.skala = fS.Progress.setData(dataForSave.skala, uiElement);

    //Progress Daten setzten
    //fS.Progress.setData(dataForSave);

    // start the sequence
    fS.Progress.go(scenes);
  }
}