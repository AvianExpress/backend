export class Valid {
    public check(id:string){
        const checkId = +id;
        if (!Number.isInteger(checkId) || checkId<1 || checkId>13)
            return false;
        return true;
    }
}