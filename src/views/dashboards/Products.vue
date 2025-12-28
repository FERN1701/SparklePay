<script setup>
import { productStore } from '../../stores/stores'
const list_products = productStore()
</script>
<template>
    <div class="col-lg-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2><i class="bi bi-shop me-1"></i> My Products</h2>
                     <div class="d-flex">
                        <button class="btn mark-paid-btn me-2"><i class="bi bi-download me-1"></i> Export</button>
                        
                        <button v-if="list_products.productForm" class="btn btn-secondary" @click="list_products.formTrigger"><i class="fi fi-rr-circle-xmark me-1"></i> Close Form</button>
                        <button v-else class="btn btn-success " @click="list_products.formTrigger"><i class="bi bi-plus-circle me-1"></i>Add New</button>
                    </div>
                </div>
                <div v-if="list_products.productForm" class="transaction-card">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3>Product Overview</h3>
                            <div class="row">
                                <div class="col-sm-6">
                                    <img src="https://www.shutterstock.com/image-photo/various-cosmetic-products-containers-bottles-600nw-2568529501.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex justify-content-between mt-4">
                                         <h4><b>{{ list_products.newProducts.name ? list_products.newProducts.name : 'Product Name' }}</b></h4>
                                         <h4>₱ {{ list_products.newProducts.price ? list_products.newProducts.price : 0 }}</h4>
                                    </div>
                                    <span class="badge bg-success align-self-center">In Stock {{ list_products.newProducts.stock ? list_products.newProducts.stock: 0 }}</span>
                                    <p class="mt-2 text-justify">{{list_products.newProducts.description ? list_products.newProducts.description : 'No Descriptions'}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <h3>Detail Forms</h3>
                            <form @submit.prevent="list_products.addProducts">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="product-name">Image</label>
                                        <input type="file" name="product-name" id="product-name" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label for="product-name">Product Name</label>
                                        <input type="text" v-model="list_products.newProducts.name" id="product-name" class="form-control">
                                    </div>
                                    
                                    <div class="col-6">
                                        <label for="cost">Cost</label>
                                        <input type="Number" v-model="list_products.newProducts.price" id="cost" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label for="cost">Stocks</label>
                                        <input type="Number" v-model="list_products.newProducts.stock" id="cost" class="form-control">
                                    </div>
                                    <div class="col-12">
                                        <label for="cost">Description</label>
                                        <textarea v-model="list_products.newProducts.description" class="form-control" id=""></textarea>
                                    </div>
                                     <div class="col-12 mt-3 text-end">
                                        <button type="submit" class="btn btn-success">Save</button>  <button type="reset" @click="list_products.formTrigger" class="btn btn-secondary">Cancel</button> 
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Transaction Cards -->
                <div id="transaction-list">
                    <!-- Paid Transaction -->
                    <div v-for="(prods, id) in list_products.products" :key="id" class="transaction-card" data-status="paid" data-value="high">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <h5 class="m-0">{{ prods.name }}</h5>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 12, 2023</div>
                            </div>
                            <div class="col-sm-4 d-flex justify-content-between align-items-center mb-3">
                                 <div class="fw-bold fs-5">${{ prods.price }}</div>
                                <span class="amount-badge paid-badge"><i class="bi bi-check-circle me-1"></i>Stock {{ prods.stock }}</span>
                            </div>
                            
                            <div class="col-sm-4 text-end">
                                <button class="btn btn-success me-2"> <i class="fi fi-rr-pencil"></i></button>
                                <button class="btn btn-danger"><i class="fi fi-rr-person-dragging-bag"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Paid Transaction -->
                    
                </div>
                
                <!-- Pagination -->
                
            </div>
</template>
