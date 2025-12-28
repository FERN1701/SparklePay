import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const productStore = defineStore('productStore', () => {

    const products = ref([])
    const productForm = ref(false)
    const newProducts = ref({ id:'', name:'', price:0, stock:0, description: '' })
    const generateId = () => Math.random().toString(36).substr(2, 9)
    
    const stored = localStorage.getItem('listproducts')
    if (stored) products.value = JSON.parse(stored)

    watch(products, (val) =>{
        localStorage.setItem('listproducts', JSON.stringify(val))
    },{ deep: true })

    const addProducts = () => {
        if(newProducts.value.name.trim() && newProducts.value.price > 0 && newProducts.value.stock >= 0 ){
            products.value.push({...newProducts.value, id: generateId()})
            console.log('Added New Product')
        }
        Object.assign(newProducts.value, { id:'', name:'', price:0, stock:0, description: '' })
    }
    const deleteProducts = (id) =>{
        products.value.splice(id, 1)
        console.log('Delete Product')
    }

    const formTrigger = () =>{
        productForm.value = !productForm.value
    }

    return {
        products,
        formTrigger,
        productForm,
        newProducts,
        addProducts,
        deleteProducts,
    }
})