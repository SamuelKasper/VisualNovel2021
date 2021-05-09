namespace Template {
    export async function Scene2(): fS.SceneReturn {
      console.log("FudgeStory Template Scene starting");
  
      //Text definieren
      let text = {
  
        Swordsmen: {
          T0000: "Das ist also das der Bereich für das Praktische Training."
        }
      };
      await fS.Location.show(location.dojo);
      await fS.Character.show(characters.Swordsmen, characters.Swordsmen.pose.happy, fS.positions.bottomcenter);
      await fS.update();
      await fS.Speech.tell(characters.Swordsmen, text.Swordsmen.T0000); 
    }
  }