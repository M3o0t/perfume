import { defineStore } from "pinia";

export const store = defineStore('store', {
  state: () => ({
     cart : []
  }),
  actions: {
    add(item) {
      this.cart.push(item)
    }
  },
  getters: {
    totalSalary: (state) => {
      return state.cart.reduce((sum, item) => sum + item.salary , 0);
    }
  }
})