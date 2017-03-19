export default class MenuItem {
    name: string;
    readableName: string;
    link: string;

    constructor(name?: string, readableName?: string, link?: string) {
        let self = this;
        self.name = name;
        self.readableName = readableName;
        self.link = link;
    }
}