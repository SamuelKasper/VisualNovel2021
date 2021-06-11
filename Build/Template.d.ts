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
        assembly_hall: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
        dojo: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Principal: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: string;
                laught: string;
                serious: string;
            };
        };
        Swordsmen: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                /**Auflistung der Posen/Emotionen*/
                happy: string;
                smile: string;
            };
        };
    };
    let dataForSave: {
        characterToSave: {
            name: string;
        };
        punkte: number;
        skala: {
            a: number;
        };
    };
    let items: {
        Image: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Template {
    function Scene(): fS.SceneReturn;
}
declare namespace Template {
    function Scene2(): fS.SceneReturn;
}
