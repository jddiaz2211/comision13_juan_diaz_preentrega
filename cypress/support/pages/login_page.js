export class LoginPage {

    visitarPaginalogin() {
        cy.visit('')
        cy.xpath('//*[@id="registertoggle"]').dblclick()
    }

    iniciarSesion(usuario, clave) {
        cy.xpath('//*[@id="user"]').type(usuario)
        cy.xpath('//*[@id="pass"]').type(clave)
        cy.get('button[type="submit"]').click()
    }

}
