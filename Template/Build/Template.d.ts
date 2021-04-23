declare namespace Template {
    function Scene(): fS.SceneReturn;
}
declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let location: {
        academy: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        CharacterName: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                /**Auflistung der Posen/Emotionen*/
                normal: string;
                smile: string;
            };
        };
    };
}
