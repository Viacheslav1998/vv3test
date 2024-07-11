// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      currentFontSize: localStorage.getItem('fontSize') || 'text-lg' // Используем значение из localStorage или по умолчанию 'text-lg'
    };
  },
  mutations: {
    setFontSize(state, newSize) {
      state.currentFontSize = newSize;
      localStorage.setItem('fontSize', newSize); // Сохраняем значение в localStorage
    }
  },
  actions: {
    changeFontSize({ commit }, newSize) {
      commit('setFontSize', newSize);
    }
  },
  getters: {
    getCurrentFontSize: state => state.currentFontSize
  }
});

export default store;
