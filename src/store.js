// store.js
import { defineStore } from "pinia";

export const store = defineStore('store', {
  state: () => ({
     cart : JSON.parse(localStorage.getItem('cart')) || []
  }),
  actions: {
    fetchcart(){
      const saved = localStorage.getItem('cart')
      if(saved){
        this.cart = JSON.parse(saved)
      }
    },

    add(item) {
      const itemexist = this.cart.find(p => p.id == item.id)
      if(itemexist){
        itemexist.quantity++
      }
      else{
        this.cart.push(item)
      }
      this.updatecart()
    },

    remove(item) {
           this.cart = this.cart.filter(i => i.id !== item.id)
           this.updatecart()

      },
      updatecart(){
        localStorage.setItem('cart' , JSON.stringify(this.cart))
      }
 },

  getters: {

    totalprice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity , 0);
    }
  }
})