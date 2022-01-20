import { ITask } from "./interfaces";

const mutations = {
    setLoading(state, payload: boolean){
        state.isLoading = payload;
    },
    setTasks(state, payload: ITask[]){
        state.tasks = payload;
    },
    switchFavorite(state, payload: string){
        const idx = state.tasks.findIndex((el) => el.id === payload)
        if(idx > -1){
            state.tasks[idx].isFavorite = !state.tasks[idx].isFavorite;
        }
    },
    switchDone(state, payload: string){
        const idx = state.tasks.findIndex((el) => el.id === payload)
        if(idx > -1){
            state.tasks[idx].isDone = !state.tasks[idx].isDone;
        }
    },
    addTask(state, payload: ITask){
        state.tasks.push(payload);
    },
    deleteTask(state, payload: string){
        const idx = state.tasks.findIndex((el) => el.id === payload)
        if(idx > -1){
            state.tasks.splice(idx, 1);
        }
    }
}

export default mutations;