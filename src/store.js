// store.js
import { defineStore } from "pinia";

export const store = defineStore('store', {
  state: () => ({
     cart : []
  }),
  actions: {
    add(item) {
      this.cart.push(item)
    },
    remove(item) {
      this.cart = this.cart.filter(i => i.id !== item.id);
    }
  },
  getters: {
    totalprice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.price , 0);
    }
  }
})