<script setup>
import { ref } from 'vue'

const items = ref([
  { src: '/public/img1.png', alt: 'Descrição da imagem 1' },
  { src: '/public/img2.png', alt: 'Descrição da imagem 2' },
  { src: '/public/img3.png', alt: 'Descrição da imagem 3' }
])

const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length
}

function goToSlide(index) {
  currentIndex.value = index
}
</script>

<template>
  <img src="/public/PortariaIFC.png" alt="" class="Portaria" />
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-item">
        <img :src="item.src" :alt="item.alt" />
      </div>
    </div>

    <button @click="prevSlide" class="carousel-control prev">‹</button>
    <button @click="nextSlide" class="carousel-control next">›</button>

    <div class="carousel-indicators">
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.Portaria {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.carousel {
  position: relative;
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  margin: auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-item img {
  width: 100%;
  height: 600px; /* Ajuste o tamanho da imagem conforme necessário */
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: white;
}
</style>
