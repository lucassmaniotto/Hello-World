import { Link } from "./styles"

export default function MenuLink({ children, to }) {

    return (
        <Link
            to={to}
            className={({ isActive }) => `
                ${isActive ? 'active' : ''}
            `}
            end
        >
            {children}
        </Link>
    )
}
