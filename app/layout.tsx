import type { Metadata } from "next"
import "./globals.css"
import { Roboto } from "next/font/google"
import { MenuItem, MenuPath } from "../components/menu-item"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex min-h-screen m-0 box-border">
        <nav className="flex flex-col w-72 p-4 border-r-[1px] border-stone-200">
          <span className="font-semibold text-2xl m-4">
            Buy<span className="border-b-[3px] border-blue-800">M</span>ore
          </span>
          <div className="flex items-start justify-start flex-col h-full mt-9 mx-4">
            <MenuPath logo="/img/icons/lightning.svg">
              Popular Products
            </MenuPath>
            <MenuPath logo="/img/icons/explor.svg">Explor New</MenuPath>
            <MenuPath logo="/img/icons/cart.svg">Clothing and Shoes</MenuPath>
            <MenuPath logo="/img/icons/gift-box.svg">Gifts and Living</MenuPath>
            <hr className="w-full my-4 h-[1px] bg-stone-200 border-none" />
            <span className="font-semibold text-sm text-slate-400 pl-4">
              Quick actions
            </span>
            <MenuItem logo="/img/icons/plus.svg">Request for product</MenuItem>
            <MenuItem logo="/img/icons/plus.svg">Add member</MenuItem>
            <hr className="w-full my-4 h-[1px] bg-stone-200 border-none" />
            <span className="font-semibold text-sm text-slate-400 pl-4">
              Last Order
            </span>
            <MenuItem logo="/img/adidas.png">adidas</MenuItem>
            <MenuItem logo="/img/shirt.png">NASA</MenuItem>
            <span className="mt-2 font-semibold text-sm text-slate-400 pl-4">
              See all
            </span>
            <MenuItem
              className="mt-auto font-semibold"
              logo="/img/icons/logout.svg"
            >
              Log Out
            </MenuItem>
          </div>
        </nav>
        <main className="flex flex-1">{children}</main>
      </body>
    </html>
  )
}
