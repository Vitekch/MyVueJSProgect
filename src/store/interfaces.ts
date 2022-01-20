export interface ITask {
    id: string,
    text: string,
    isFavorite: boolean
    isDone: boolean
};

export interface IState {
    isLoading: boolean;
    tasks: ITask[]
}