import { reactive } from 'vue'

export const tripStore = reactive({
  selected: [],

  toggle(monastery) {
    const index = this.selected.findIndex(m => m.id === monastery.id)
    if (index >= 0) {
      this.selected.splice(index, 1)
    } else {
      this.selected.push(monastery)
    }
  },

  isSelected(monastery) {
    return this.selected.some(m => m.id === monastery.id)
  },

  clear() {
    this.selected = []
  }
})
