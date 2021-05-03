namespace Template {
  export async function Scene(): fS.SceneReturn {
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
    await fS.Speech.hide();
    await fS.Location.show(location.academy);
    await fS.update(1); //5
    await fS.Location.show(location.assembly_hall);
    await fS.update(1);
    await fS.Character.show(characters.Principal, characters.Principal.pose.happy, fS.positions.bottomcenter);
    await fS.Speech.show();
    await fS.update(1);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0000); 
    await fS.Speech.tell(characters.Principal, text.Teacher.T0001);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0002);
    await fS.Character.hide;(characters.Principal);
    await fS.update(1);
    await fS.Speech.hide();
    await fS.Location.show(location.black);
    await fS.update(1);
    await fS.Text.print("Einige Zeit später...");
    await fS.update(1);


    
  }
}