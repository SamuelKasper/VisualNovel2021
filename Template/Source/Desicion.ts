namespace Template {
    export async function Decision(): fS.SceneReturn {
        console.log("Desicion");

        let text = {
            Teacher: {
                T0000: "Test"
            },

            Swordsmen: {
                T0000: ""
            }
        };

        await fS.Location.show(location.academy);
        await fS.Character.show(characters.Principal, characters.Principal.pose.happy, fS.positions.bottomcenter);
        await fS.Speech.tell(characters.Principal, text.Teacher.T0000);
        await fS.update(1);
    }
}