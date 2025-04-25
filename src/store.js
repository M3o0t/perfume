import { defineStore } from "pinia";

export const store = defineStore('store', {
  state: () => ({
    cart: []
  }),
  actions: {
    add(item) {
      this.cart.push(item)
    }
  }
})