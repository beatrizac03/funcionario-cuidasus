let prod = false

let api_url = prod ? 'https://api-cuida-sus.onrender.com' : 'http://localhost:8080'

export function logarFuncionario(obj) {
    const requestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    return fetch(api_url + "/auth/login/funcionarios", requestInit)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao fazer login")
            }
            return response.json()
        })
        .then(data => {
            localStorage.setItem("token", data.token)
            return data
        })
        .catch(error => {
            console.error("Erro:", error)
            throw error
        })

}

export async function cadastrarFuncionario(obj) {
    const requestInit = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    const response = await fetch(api_url + "auth/registro/funcionarios", requestInit)

    if( !response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Erro ao cadastrar funcionário")
    }

    const data = await response.json()

    return data
}

export function vincularSalaAoMedico() {
    
}

export function chamarPacienteNaSala() {

}