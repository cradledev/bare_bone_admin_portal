// import
import Reac from "react"

// App imports
import Menu from './Menu'

// component
const Layout = ({children}) => {
    return (
        <>
            {/* Header */}
            <header>
                {/* Menu */}
                <Menu />
            </header>
            <hr/>
            {/* Page content */}
            <section>
                { children }
            </section>
        </>
    )
}

export default Layout