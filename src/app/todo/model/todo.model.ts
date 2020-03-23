export interface TodoDescription {
    description: string;
}

export interface TodoId {
    id: number;
}

export interface Todo {
    description: string;
    id: number;
    completed: boolean;
}

export function generateMock() {
    return {
        description: 'todo 1',
        id: 1,
        completed: false
    }
}