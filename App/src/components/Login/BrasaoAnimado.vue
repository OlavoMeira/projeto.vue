<template>
  <div class="flex flex-center q-pa-lg">
    <svg 
      viewBox="0 0 400 500" 
      class="brasao-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="coroa-animada">
        <g class="torre-par par-externo">
           <rect x="75" y="60" width="40" height="80" fill="#BDBDBD" stroke="#424242" />
           <rect x="285" y="60" width="40" height="80" fill="#BDBDBD" stroke="#424242" />
        </g>
        <g class="torre-par par-interno">
           <rect x="120" y="50" width="40" height="90" fill="#BDBDBD" stroke="#424242" />
           <rect x="240" y="50" width="40" height="90" fill="#BDBDBD" stroke="#424242" />
        </g>
        <g class="torre-central">
           <rect x="170" y="40" width="60" height="110" fill="#9E9E9E" stroke="#424242" />
        </g>
      </g>

      <g id="escudo-central">
        <path d="M100,150 L300,150 L300,300 C300,380 200,400 100,300 Z" fill="#1976D2" stroke="#0D47A1" stroke-width="2"/>
        </g>

      <g id="container-pergaminho">
        <path id="pathTexto" d="M 60,380 Q 200,450 340,380" fill="none" />
        
        <path 
          class="pergaminho-path" 
          d="M 60,380 Q 200,450 340,380" 
          fill="none" 
          stroke="#E0E0E0" 
          stroke-width="40" 
          stroke-linecap="round"
        />

        <text class="texto-vitoria">
          <textPath href="#pathTexto" startOffset="50%" text-anchor="middle">
            VITÓRIA DA CONQUISTA
          </textPath>
        </text>
      </g>
    </svg>

    <q-btn 
      flat 
      round 
      icon="refresh" 
      class="absolute-bottom-right q-ma-md" 
      @click="reiniciarAnimacao" 
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const animando = ref(true)

const reiniciarAnimacao = () => {
  animando.value = false
  setTimeout(() => animando.value = true, 50)
}
</script>

<style lang="scss" scoped>
.brasao-svg {
  width: 100%;
  max-width: 400px;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

/* --- ANIMAÇÃO DAS TORRES --- */
.torre-par {
  opacity: 0;
  transform-origin: center top;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Quando o componente carrega, ativamos as animações */
.par-interno {
  animation: slideOutTorre 1s forwards 2s; /* 2s de delay */
}

.par-externo {
  animation: slideOutTorre 1s forwards 2.8s; /* 2.8s de delay */
}

@keyframes slideOutTorre {
  from {
    opacity: 0;
    transform: scaleY(0) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }
}

/* --- ANIMAÇÃO DO PERGAMINHO --- */
.pergaminho-path {
  /* O valor do dasharray deve ser o comprimento do path (getTotalLength) */
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: desenrolar 2s ease-in-out forwards;
}

@keyframes desenrolar {
  to {
    stroke-dashoffset: 0;
  }
}

.texto-vitoria {
  font-weight: bold;
  font-size: 18px;
  fill: #0D47A1;
  opacity: 0;
  animation: fadeIn 0.5s forwards 1.8s;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
</style>