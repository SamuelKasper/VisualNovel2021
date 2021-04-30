namespace Template {
  export async function Scene(): fS.SceneReturn {
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
    await fS.Location.show(location.academy);
    //character
    await fS.Character.show(characters.Teacher, characters.Teacher.pose.happy, fS.positions.bottomright);
    //Transition
    //await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    //Fade duration
    await fS.update(1);
    //speak
    //await fS.Speech.tell(characters.Teacher, "Ich bin der Erzähler");
    await fS.Speech.tell(characters.Teacher, text.Teacher.T0000); 
    await fS.Speech.tell(characters.Teacher, text.Teacher.T0001);



    
  }
}