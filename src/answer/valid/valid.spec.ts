import { Valid } from "./valid"

test('validator create test', ()=>{
    const valid = new Valid
    expect(valid.check('1')).toBe(true);
})

test('validator create test fail', ()=>{
    const valid = new Valid
    expect(valid.check('asafasf')).toBe(false);
})

test('validator не менше 1', ()=>{
    const valid = new Valid
    expect(valid.check('0')).toBe(false);
})
test('validator не больше 13', ()=>{
    const valid = new Valid
    expect(valid.check('14')).toBe(false);
})


