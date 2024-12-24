export const getDummyTodo = (id?: string , completed?: boolean, text?: string) => {
    return {
        id: id?? new Date().getTime().toString(),
        text: text ?? "",
        completed: completed || false
    }
}