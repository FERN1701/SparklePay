<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '../../assets/style2.css'
import Navbar from '@/components/dashboards/Navbar.vue'
</script>
<template>
   
   <body>
      <Navbar />

    <!-- Main Content -->
    <div class="container">
        <!-- Header Section -->
         <div class="header-section mt-4">
            <div class="container">
                <h1 class="display-4 text-center mb-3">Transaction Dashboard</h1>
                <p class="text-center mb-0" style="color: var(--text-light);">Manage and monitor all your paid and unpaid transactions</p>
            </div>
        </div>
       <div class="row">
         <RouterView />
       </div>
   </div>
   <div class="footer">
        <div class="container">
            <p class="mb-2">© 2023 SparklePay Admin Dashboard. All rights reserved.</p>
            <p class="mb-0">Designed with <i class="bi bi-heart-fill text-danger"></i> for girlie aesthetics</p>
        </div>
    </div>
   </body>
   
   
   
</template>


