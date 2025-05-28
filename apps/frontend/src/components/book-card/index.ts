import { Router } from "vue-router"



export const goToBook = (router:Router,id:string) => {
  router.push(`/books/${id}`)
}


export const statusLabels: Record<string, string> = {
  toRead: "To Read",
  reading: "Reading",
  finished: "Finished",
}

export const statusColors: Record<string, string> = {
  toRead: "bg-gray-100 text-gray-800",
  reading: "bg-teal-100 text-teal-800",
  finished: "bg-indigo-100 text-indigo-800",
}
