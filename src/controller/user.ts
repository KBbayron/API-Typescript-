import User from "../model/user"

export default class UserController {
    public create() {
        const user = new User();
        user.name = 'Eduardo Salas'
        user.id = 402290575;
        user.email = 'esalasc@uca.ac.cr'
        user.status = 1;
        user.dateOfBirth = new Date('12/12/1995');
        return user;
    }
}