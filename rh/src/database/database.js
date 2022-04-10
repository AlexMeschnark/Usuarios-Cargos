const { databaseConection } = require('./conection')


//      CARGO

async function salvarCargo(cargo)
{

    const insertCargo = {
        nome_cargo: cargo.nome_cargo,
        descricao: cargo.descricao
    }

    const result = await databaseConection('cargos').insert(insertCargo)

    if(result){
        return {
            nome_cargo: cargo.nome_cargo,
            descricao: cargo.descricao,
            id: result[0]
        }
    }else{
       console.error("Deu erro!")
       return {
           error: "Deu erro na inserção."
       }     
    }

}


async function mostrarCargos() {

    const result = await databaseConection.select().table('cargos')
    return result
}


async function mostrarCargosUsuarios() {

    const result = await databaseConection.from('usuarios').innerJoin('cargos', 'usuarios.id_cargo', 'cargos.id_cargo')
    return result
}

async function mostrarUsuarioPorId(id) {

    const result = await databaseConection.where({ id_usuario: id }).from('usuarios').innerJoin('cargos', 'usuarios.id_cargo', 'cargos.id_cargo')

    return result[0]
}


//   USUÁRIO

async function salvarUsuario(usuario)
{

    const insertUsuario = {
        id_cargo: usuario.id_cargo,
        id_gerente: usuario.id_gerente,
        nome_usuario: usuario.nome_usuario,
        email: usuario.email

    }

    const result = await databaseConection('usuarios').insert(insertUsuario)

    if(result){
        return {
            id_cargo: usuario.id_cargo,
            id_gerente: usuario.id_gerente,
            nome_usuario: usuario.nome_usuario,
            email: usuario.email,
            id: result[0]
        }
    }else{
       console.error("Deu erro!")
       return {
           error: "Deu erro na inserção."
       }     
    }

}


async function alterarCargo(id, cargo) {

    const updateCargo = {
        nome_cargo: cargo.nome_cargo,
        descricao: cargo.descricao
    }

    const result = await databaseConection('cargos').where({ id_cargo: id }).update(updateCargo)
    if(result){
        return {
            nome_cargo: cargo.nome_cargo,
            descricao: cargo.descricao,
            id: result[0]
        }
    }else{
       console.error("Deu erro!")
       return {
           error: "Deu erro na inserção."
       }     
    }
    
}


async function alterarUsuario(id, usuario) {

    const updateUsuario = {
        id_cargo: usuario.id_cargo,
        id_gerente: usuario.id_gerente,
        nome_usuario: usuario.nome_usuario,
        email: usuario.email
    }

    const result = await databaseConection('usuarios').where({ id_usuario: id }).update(updateUsuario)
    if(result){
        return {
            id_cargo: usuario.id_cargo,
            id_gerente: usuario.id_gerente,
            nome_usuario: usuario.nome_usuario,
            email: usuario.email,
            id: result[0]
        }
    }else{
       console.error("Deu erro!")
       return {
           error: "Deu erro na inserção."
       }     
    }
    
}

async function mostrarUsuarios() {

    const result = await databaseConection.select().table('usuarios')
    return result
}


async function deletarUsuario(id) {

    const result = await databaseConection('usuarios').where({ id_usuario: id }).del()

    return result[0]
}

module.exports = { salvarCargo, mostrarCargos, salvarUsuario, mostrarUsuarios, mostrarCargosUsuarios, mostrarUsuarioPorId, alterarCargo, alterarUsuario, deletarUsuario }