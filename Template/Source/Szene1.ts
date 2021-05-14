namespace Template {
  export async function Scene(): fS.SceneReturn {
    console.log("Szene 1 started");

    //Text definieren
    let text = {
      Teacher: {
        T0000: "Herzlich Willkommen in der Akademie!",
        T0001: "Ich bin der Leiter der Akademie und darf heute die Einführungsveranstallung abhalten.",
        T0002: "Dann fangen wir mal an.",
        T0003: "Teilt euch bitte selbst nach euren Eigenschaften in zwei Gruppen ein.",
        T0004: "So, nachdem das geschafft ist kommen wir nun zu ein paar organisatorischen Dingen.",
        T0005: "Der Unterricht läuft so ab das ihr zwischen theoretischem und praktischem Unterricht wählen könnt.",
        T0006: "Für Magier wird eher der theoretische Teil empfohlen, für Swordsmen eher der praktische Unterricht.",
        T0007: "Trotz allem liegt die Wahl bei euch.",
        T0008: "Der Unterricht beginnt direkt nach dieser Veranstaltung.",
        T0009: "So, nun noch eine letzte, aber trotzdem wichtige Regel.",
        T0010: "Das betreten der Gebiete ausderhalb des Schulgeländes ist zu eurem eigenen Schutz verboten!",
        T0011: "Das war alles. Viel Spaß!"
      },

      Swordsmen: {
        T0000: "",
        T0001: "",
        T0002: ""
      }
    };
    await fS.Speech.hide();
    await fS.Location.show(location.academy);
    //await fS.update(2);
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    //
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
    await fS.Location.show(location.assembly_hall);
    await fS.Character.hide(characters.Principal);
    await fS.Character.show(characters.Principal, characters.Principal.pose.serious, fS.positions.bottomcenter);
    await fS.update();
    await fS.Speech.tell(characters.Principal, text.Teacher.T0003, false);
  
    /*Ticker Delay
    fS.Speech.setTickerDelays(3000, 2);*/

    /*hintergrund Musik einblenden
    fS.Sound.fade(sound.backgroundTheme, 0.6, 0.1, true);*/

    //Decision element
    let classDesicionAnswer = {
      iSayMage: "Gruppe der Magier beitreten",
      iSaySwordsmen: "Gruppe der Kämpfer beitreten"
    };

    let classDesicion = await fS.Menu.getInput(classDesicionAnswer, "class");

    switch(classDesicion){
      case classDesicionAnswer.iSayMage:
        //continue writing on this path
        fS.Sound.play(sound.click,1);
        await fS.Speech.tell(characters.Principal, "[Magier ausgewählt]");
        break;
      case classDesicionAnswer.iSaySwordsmen:
        //continue writing on this path
        fS.Sound.play(sound.click,1);
        await fS.Speech.tell(characters.Principal, "[Kämpfer ausgewählt]");
        break;
    }
    
    await fS.update(1);
    fS.Speech.hide();
    await fS.Character.hide(characters.Principal);
    await fS.Location.show(location.black);
    await fS.update(1);
    await fS.Text.print("Einige Zeit später...");
    fS.Text.close();
    await fS.update(1);
    

    await fS.Location.show(location.assembly_hall);
    await fS.Character.show(characters.Principal, characters.Principal.pose.happy, fS.positions.bottomcenter);
    await fS.update(1);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0004);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0005);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0006);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0007);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0008);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0009);
    await fS.Character.hide(characters.Principal);
    await fS.Character.show(characters.Principal, characters.Principal.pose.serious, fS.positions.bottomcenter);
    await fS.update();
    await fS.Speech.tell(characters.Principal, text.Teacher.T0010);
    await fS.Speech.tell(characters.Principal, text.Teacher.T0011);
    await fS.Character.hide(characters.Principal);

    //hintergrund Musik ausblenden
    fS.Sound.fade(sound.backgroundTheme, 0, 0.1, false);
  }
}