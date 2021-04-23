namespace Template {
  export async function Scene(): fS.SceneReturn {
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
    await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);

    //Background Image
    await fS.Location.show(location.academy);
    await fS.update(1);

    //Text definieren Version 2
    await fS.Speech.tell(characters.Narrator, "Ich bin der Erzähler");
    
  }
}