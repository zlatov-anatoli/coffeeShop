import {makeAutoObservable} from "mobx"

class BasketStore {
  basket = []
  selectedCoffee = {}
  snackBar = false
  message = ''

  constructor() {
    makeAutoObservable(this);
  }

  showSnackBar(state, message) {
    this.message = message
   return this.snackBar = state
  }

  getSelectedCoffe(state) {
    return this.selectedCoffe = this.basket.find(item => item.id === state.id)
  }

  deleteSelectedItem(state) {
    return this.basket = this.basket.filter(item => item.id !== state.id)
  }

  clearAllBasket() {
    return this.basket = []
  }

  decrementBasketItem(state) {
    const currentItem = this.basket.find(item => item.id === state.id)
    if (currentItem.count !== 1) {
      currentItem.count--
    } else {
      return this.basket = this.basket.filter(item => item.id !== state.id)
    }
  }

  addToBasket(state) {
    const isExist = this.basket.find(item => item.id === state.id);

    if (isExist) {
      isExist.count++;
    } else {
      this.basket.push({
        ...state,
        count: 1
      });
    }
  }

}

export default new BasketStore()
