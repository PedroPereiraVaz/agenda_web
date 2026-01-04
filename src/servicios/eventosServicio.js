import eventosJSON from "../datos/eventos.json"
const eventos = Array.isArray(eventosJSON) ? eventosJSON : []

export function obtenerEventos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventos)
    }, 500)
  })
}


export function obtenerEventoPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!eventos.length) {
        reject("No hay eventos disponibles")
        return
      }
      const evento = eventos.find(e => e.id === parseInt(id))
      if (evento) {
        resolve(evento)
      } else {
        reject("Evento no encontrado")
      }
    }, 500)
  })
}