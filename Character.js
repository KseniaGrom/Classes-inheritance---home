class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error ('Ошибка имени персонажа')
        }

        const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (validType.indexOf(type === -1)) {
            throw new Error ('Ошибка класса персонажа')
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;

    }
}
