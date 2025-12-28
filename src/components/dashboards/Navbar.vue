<script setup>

import Products from '@/views/dashboards/Products.vue'
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-custom sticky-top">
        <div class="container">
            <a class="navbar-brand brand" href="#">
                <i class="bi bi-gem me-2"></i>SparklePay
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link " to="/dashboard"><i class="bi bi-speedometer2 me-1"></i> Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/dashboard/products"><i class="bi bi-shop me-1"></i> Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/dashboard/histories"><i class="bi bi-arrow-counterclockwise me-1"></i> History</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <button class="btn btn-secondary-subtile dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <i class="fi fi-rr-user-trust me-1"></i> Account
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">System Settings</a></li>
                            <li><a class="dropdown-item" href="#">News Letter</a></li>
                        <li class="border-top"></li>    
                        <li><RouterLink class="nav-link" to="/"><i class="bi bi-door-closed"></i> Logout</RouterLink></li>
                    </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>