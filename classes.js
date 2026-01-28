class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error ('Ошибка имени персонажа')
        }
        const validType = {
            Bowman: { attack: 25, defence: 25 },
            Swordsman: { attack: 40, defence: 10 },
            Magician: { attack: 10, defence: 40 },
            Undead: { attack: 25, defence: 25 },
            Zombie: { attack: 40, defence: 10 },
            Daemon: { attack: 10, defence: 40 }
        };

        if (!validType[type]) {
            throw new Error ('Ошибка класса персонажа')
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = validType[type].attack;
        this.defence = validType[type].defence;

    }
}
