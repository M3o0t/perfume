// store.js
import { defineStore } from "pinia";

export const store = defineStore('store', {
  state: () => ({
     cart : []
  }),
  actions: {
    add(item) {
      const itemexist = this.cart.find(p => p.id == item.id)
      if(itemexist){
        itemexist.quantity++
      }
      else{
        this.cart.push(item)
      }
    },

    remove(item) {
      const itemexist = this.cart.find(p => p.id == item.id)
      if(itemexist){
        if(itemexist.quantity > 1){
           itemexist.quantity--
        }
        else{
           this.cart = this.cart.filter(i => i.id !== itemexist.id)
        }
      }
    }},

  getters: {
    totalprice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity , 0);
    }
  }
})