<!-- <template>
    <div class="board">
      <div v-for="(row, y) in grid" :key="y" class="row">
        <div
          v-for="(cell, x) in row"
          :key="x"
          class="cell"
          :class="{
            snake: isSnake(x, y),
            food: food.x === x && food.y === y
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const gridSize = 10
  
  // 🟦 Create grid
  const grid = ref(
    Array.from({ length: gridSize }, () => Array(gridSize).fill(0))
  )
  
  // 🐍 Snake: starts in the center
  const snake = ref([{ x: 5, y: 5 }])
  const food = ref({ x: 2, y: 3 })
  const direction = ref('ArrowRight')
  
  // ✅ Check if a cell has snake
  const isSnake = (x, y) => {
    return snake.value.some(part => part.x === x && part.y === y)
  }
  </script>
  
  <style scoped>
  .board {
    display: inline-block;
  }
  .row {
    display: flex;
  }
  .cell {
    width: 25px;
    height: 25px;
    border: 1px solid #ddd;
  }
  .snake {
    background-color: green;
  }
  .food {
    background-color: red;
  }
  </style> -->