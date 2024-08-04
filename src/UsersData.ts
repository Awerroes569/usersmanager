const consola = require('consola');
const {Message, MessageVariant} = require('./Message');

export interface User {
    name: string;
    age: number;
}


export class UsersData {
    private data: User[];

    constructor() {
        this.data = [];
    }

    showAll(): void {
        if (this.data.length === 0) {
            consola.error('No data...');
            return;
        }
        consola.info('Users data:')
        console.table(this.data);
    }

    public add(user: User): void {
        if (
            typeof user.age !== 'number'
            ||
            user.age <= 0
            ||
            user.name.length === 0
            ||
            typeof user.name !== 'string'
        ) {
            Message.showColorized(MessageVariant.Error, 'Wrong data!');
            return;
        }
        this.data.push(user);
        Message.showColorized(MessageVariant.Success, 'User has been successfully added!');
    }

    public remove(name: string): void {
        const index = this.data.findIndex(user => user.name === name);
        if (index === -1) {
            Message.showColorized(MessageVariant.Error, 'User not found!');
            return;
        }
        this.data.splice(index, 1);
        Message.showColorized(MessageVariant.Success, 'User has been successfully removed!');
    }
}