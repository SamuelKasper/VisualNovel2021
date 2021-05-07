namespace Template {
  export async function Scene(): fS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    //Text definieren
    let text = {
      Teacher: {
        T0000: "Herzlich Willkommen in der Akademie!",
        T0001: "Ich bin der Leiter der Akademie und darf heute die Einführungsveranstallung abhalten.",
        T0002: "Dann fangen wir mal an.",
        T0003: "So, nachdem ihr nun alle relevanten Information habt können wir endlich anfangen.",
        T0004: "Teilt euch bitte selbst nach euren Eigenschaften in zwei Gruppen ein."
      },

      Swordsmen: {
        T0000: "",
        T0001: "",
        T0002: ""
      }
    };
    await fS.Speech.hide();
    await fS.Location.show(location.academy);
    await fS.update(3);
    await fS.Location.show(location.assembly_hall);
    await fS.update(1);
    await fS.Character.show(characters.Principal, characters.Principal.pose.happy, fS.positions.bottomcenter);
    await fS.Speech.show();
    await fS.update(1);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0000); 
    await fS.Character.hide(characters.Principal);
    await fS.Character.show(characters.Principal, characters.Principal.pose.laught, fS.positions.bottomcenter);
    await fS.update();
    await fS.Speech.tell(characters.Principal, text.Teacher.T0001);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0002);
    await fS.Character.hide(characters.Principal);
    await fS.Character.show(characters.Principal, characters.Principal.pose.happy, fS.positions.bottomcenter);
    await fS.update();
    await fS.Speech.hide();
    await fS.Location.show(location.black);
    await fS.Character.hide(characters.Principal);
    await fS.update(1);
    //await fS.Text.print("Einige Zeit später...");
    //await fS.update(1);
    await fS.Location.show(location.assembly_hall);
    await fS.Character.show(characters.Principal, characters.Principal.pose.serious, fS.positions.bottomcenter);
    await fS.update(2);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0003);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0004, false); //false macht, das kein extra klick benötigt wird

    //Ticker Delay
    //fS.Speech.setTickerDelays(3000, 2);

    //hintergrund Musik einblenden
    fS.Sound.fade(sound.backgroundTheme, 0.6, 0.1, true);

    //Decision element
    let classDesicionAnswer = {
      iSayMage: "Gruppe der Magier beitreten",
      iSaySwordsmen: "Gruppe der Swordsmen beitreten"
    };

    let classDesicion = await fS.Menu.getInput(classDesicionAnswer, "class");

    switch(classDesicion){
      case classDesicionAnswer.iSayMage:
        //continue writing on this path
        fS.Sound.play(sound.click,1);
        await fS.Speech.tell(characters.Principal, "Mage Dialog");
        break;
      case classDesicionAnswer.iSaySwordsmen:
        //continue writing on this path
        fS.Sound.play(sound.click,1);
        await fS.Character.show(characters.Swordsmen, characters.Swordsmen.pose.happy, fS.positions.bottomcenter);
        await fS.update(1);
        await fS.Speech.tell(characters.Principal, "Swordsmen Dialog");
        break;
    }
    
    //hintergrund Musik ausblenden
    fS.Sound.fade(sound.backgroundTheme, 0, 0.1, false);
  }
}