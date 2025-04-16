import styles from "./Register.module.css"
import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEnail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = usestate("")
    const { createUser, error: authError, loading } = useAuthetication()

    const handleSubimit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais.")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])
}