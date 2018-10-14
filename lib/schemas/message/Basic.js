
export default class Basic {

    toJS () {
        return {};
    }

    toJSON () {
        return JSON.stringify(this.toJS());
    }

    toString () {
        return this.toJSON();
    }

}