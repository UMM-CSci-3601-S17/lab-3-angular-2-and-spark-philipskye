export interface Todo {
    id: string,
    owner: string,
    status: string, // Could possibly be boolean?
    body: string,
    category: string
}