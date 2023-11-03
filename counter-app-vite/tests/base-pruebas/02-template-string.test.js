import { getSaludo } from  "../../src/base-pruebas/02-template-string"


describe("Pruebas en 02-Template-string",()=> {
    test('getSaludo debe retornar "Hola Geo"', ()=> {
        const name  = "Geo"
        const message =  getSaludo(name)
        

        expect(message).toBe(`Hola ${name}!!`)
    
    })
})