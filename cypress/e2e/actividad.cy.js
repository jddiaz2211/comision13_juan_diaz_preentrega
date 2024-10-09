import { LoginPage } from "../support/pages/login_page";
import { HomePage } from "../support/pages/home_page";
import { ProductsPage } from "../support/pages/products_page";
import { ShoppingCartPage } from "../support/pages/shopping_cart_page";

describe    ('Preentrega', () => {
const loginPage = new LoginPage
const homePage = new HomePage    
const productsPage = new ProductsPage
const shoppingCartPage = new ShoppingCartPage
var precio_carrito_total

let data    
    before (() => {
         cy.fixture('productos').then((puente) => {
             data = puente
         })
    })
    
    beforeEach(() => {
        loginPage.visitarPaginalogin()
        loginPage.iniciarSesion(Cypress.env().user, Cypress.env().pass)
        //cy.wait(15000) 

    })
    
    /it.only('desafio', () => {
    
        homePage.visitarOnlineShop()
        productsPage.agregarProducto(data.producto_1.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.agregarProducto(data.producto_1.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.agregarProducto(data.producto_2.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.visitarShoppingCart()
        //Validacion producto 1
        cy.log ("Validacion producto 1")
        shoppingCartPage.verificarProducto(data.producto_1.nombre)
        shoppingCartPage.verificarCantidadProducto(data.producto_1.nombre, data.producto_1.cantidad)
        shoppingCartPage.verificarPrecioProducto(data.producto_1.nombre, data.producto_1.precio)
        shoppingCartPage.verificarTotalPrice(data.producto_1.nombre, data.producto_1.precio, data.producto_1.cantidad)
        //Validacion producto 2
        cy.log ("Validacion producto 2")
        shoppingCartPage.verificarProducto(data.producto_2.nombre)
        shoppingCartPage.verificarCantidadProducto(data.producto_2.nombre, data.producto_2.cantidad)
        shoppingCartPage.verificarPrecioProducto(data.producto_2.nombre, data.producto_2.precio)
        shoppingCartPage.verificarTotalPrice(data.producto_2.nombre, data.producto_2.precio, data.producto_2.cantidad)


        shoppingCartPage.mostrarTotalPrice()
        precio_carrito_total = (data.producto_1.precio*data.producto_1.cantidad)+(data.producto_2.precio*data.producto_2.cantidad)
        shoppingCartPage.verificarPrecioShoppingCartTotal(precio_carrito_total)
        


    })



})