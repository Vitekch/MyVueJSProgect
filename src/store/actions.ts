import fb from '@/firebase';

const actions = {
    async getTasks(context){
        context.commit('setLoading', true);
        const snapshot = await fb.collection('tasks').get();
        const tasks = snapshot.docs.map(doc => {return { id: doc.id, ...doc.data() }});
        console.log(tasks);
        context.commit('setTasks', tasks);
        context.commit('setLoading', false);
    },
    async addTask(context, payload){
        context.commit('setLoading', true);
        const task = await fb.collection('tasks').add(payload);
        context.commit('addTask', {id: task.id, ...payload});
        context.commit('setLoading', false);
    },
    async switchFavorite(context, payload){
        context.commit('setLoading', true);
        await fb.collection('tasks').doc(payload.id).update({isFavorite: payload.status})
        context.commit('switchFavorite', payload.id);
        context.commit('setLoading', false);
    },
    async switchDone(context, payload){
        context.commit('setLoading', true);
        await fb.collection('tasks').doc(payload.id).update({isDone: payload.status})
        context.commit('switchDone', payload.id);
        context.commit('setLoading', false);
    },
    async deleteTask(context, payload){
        context.commit('setLoading', true);
        await fb.collection('tasks').doc(payload).delete();
        context.commit('deleteTask', payload);
        context.commit('setLoading', false);
    }
}

export default actions;