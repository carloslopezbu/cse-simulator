import React from "react"
import { IconShoppingCart, IconSearch, IconKeyboard } from "@tabler/icons-react"

const categories = ['Tienda', 'Novedades', 'Teclas', 'Teclados', 'Diseños', 'Ayuda', 'Descuentos']
const aStyle = "hover:-translate-y-1 transition-transform duration-300 ease-in-out p-1"
const iconStyle = "hover:-translate-y-1 transition-transform duration-300 ease-in-out mt-1 text-gray-300"

export default function Header() {

    return (
        <header className="bg-black text-gray-200 p-3 flex justify-center gap-5 text-xs">

        <IconKeyboard size={22} className="hover:text-gray-50 duration-300 ease-in-out text-gray-300 mt-0.5"/>

        {categories.map((category) => {
            return <a href="#" className={aStyle}>{category}</a>
        })}

        <IconShoppingCart size={18} className={iconStyle}/>
        <IconSearch size={18} className={iconStyle}/>
        </header>
    )
}