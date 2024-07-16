import { ReactNode } from "react"

const AuthWrapper = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default AuthWrapper