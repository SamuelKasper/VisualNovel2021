namespace Template {
    export async function Scene2(): fS.SceneReturn {
      console.log("Szene 2 started");
  
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

      //Verzögerung (x sek nach letztem klick)
      let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);
      await signalDelay2s();

      //set - Text direkt anzeigen ohne erst zu schreiben
      fS.Speech.set(characters.Swordsmen, "Dieser Text wird nicht erst geschrieben, sondern direkt angezeigt");

      //name eingeben und in Progress speichern
      dataForSave.characterToSave.name = await fS.Speech.getInput();



      //Namens Eingabe Feld

    }
  }