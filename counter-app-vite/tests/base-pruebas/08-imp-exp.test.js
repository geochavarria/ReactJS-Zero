import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe de retornar un heroe por ID", () => {

        const id = 1;
        const heroe =  getHeroeById(id);
        

        expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC"})

    })

    test("getHeroeById debe de retornar undefines si no existe", () => {

        const id = 100;
        const heroe =  getHeroeById(id);
        

        expect(heroe).toBeFalsy();

    })

    test("getHeroesByOwner debe regresar heroes de DC", () => {

        const owner = "DC"
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }])


        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner ===  owner))
    })
})