export default class MenuItem {
    name: string;
    readableName: string;
    link: string;
    icon: string;

    constructor(name?: string, readableName?: string, link?: string, icon?: string) {
        let self = this;
        self.name = name;
        self.readableName = readableName;
        self.link = link;
        self.icon = icon;
    }
}