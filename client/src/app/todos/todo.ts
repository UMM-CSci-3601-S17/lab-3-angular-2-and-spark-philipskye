export interface Todo {
    id: string,
    owner: string,
    status: boolean, // Could possibly be boolean?
    body: string,
    category: string
}