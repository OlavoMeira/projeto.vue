const { createApp, ref, computed } = Vue

    const app = createApp({
      setup() {
        const cart = ref(9);
        const addToCart = () => {
          // Como estamos no escopo de script devemos utilizar o value pois esta função é lida como um objeto por isso usamos cart.value diferente de quando estamos no DOM.
          cart.value += 1
        }

        return {
          cart,
          addToCart
        }
      }
    })
  