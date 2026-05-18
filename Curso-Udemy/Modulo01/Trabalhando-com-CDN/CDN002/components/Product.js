app.component('product-display', {
    setup(){
         const image = ref("../assets/images/foto.png");
        // Função anonima () => {}
        const changeImage = (variantImage) => {
          image.value = variantImage
        }

        const product_title = 'T-Shirt';
        const brand = 'OlavoMV';
        const titleWithBrand = computed(()=>{
          return product_title  + "  " +  brand;
        });

        const inStock = 15;
        const inStockComputed = computed(()=>{
          if(inStock > 10)
            return "In Stock"
          else if(inStock <= 10 && inStock > 0 )
            return "Almost of Stock"
          else
            return "out of Stock"
        })
        const message = ref('Hello vue!')
        return {
          product_title: ref('T-Shirt'),
          image,
          inStock: ref(15),
          details: ['50% Cotton', '30% Polyester', '20% Wool'],
          variants: [
            {id: 1, color:'Blue', image: "../assets/images/foto.png" },
            {id: 2, color: 'green', image: "../assets/images/t-shirt-green.png" }],
          changeImage,
          titleWithBrand,
          inStockComputed
        }
      },
    template: 
    `
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="camisa azul">
          </div>
          <div class="product-info">
                <!-- INFO PRODUTO-->
            <h1> {{ titleWithBrand }} </h1>
            <p </p> {{ inStockComputed }}</p> 
            <ul>
              <li v-for="detail in details">
                {{ detail }}
              </li>
            </ul>
            <!-- podemos abreviar o v-on para @NOME-DO-EVENTO -->
            <div v-for="variant in variants" :key="variant.id" @mouseover="changeImage(variant.image)" class="color-circle" :style="{backgroundColor: variant.color}"> 
            
            </div>
            <!-- v-on é uma diretiva para trabalhar com eventos -->
            <button class="button" :class="{disabledButton : inStock < 1}"
            v-on:click="$emit('add-to-cart')" :disabled="inStock < 1"> Add To Cart</button>
            
          </div>
        </div>
    
    `
})