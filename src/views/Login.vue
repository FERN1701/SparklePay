<script setup>
import '../assets/style.css'
import LoginForm from '../components/authentications/LoginForm.vue'
import Login from '@/views/Login.vue'
</script>

<template>
    <div class="login-container">
         <div class="login-right">
            <div class="login-card">
                <h2 class="login-title">Admin Login</h2>
                <p class="login-subtitle">Please enter your credentials to access the dashboard</p>
                
                <LoginForm />
            </div>
        </div>
        <div class="login-left">
            <div class="floating-icons">
                <div class="floating-icon"><i class="bi bi-gem"></i></div>
                <div class="floating-icon"><i class="bi bi-heart"></i></div>
                <div class="floating-icon"><i class="bi bi-star"></i></div>
                <div class="floating-icon"><i class="bi bi-flower1"></i></div>
                <div class="floating-icon"><i class="bi bi-diamond"></i></div>
                <div class="floating-icon"><i class="bi bi-cloud"></i></div>
            </div>
            
            <h1 class="login-brand">
                <i class="bi bi-gem me-2"></i>SparklePay
            </h1>
            
            <p class="login-tagline">
                Welcome back to your sparkling admin dashboard! Manage transactions with elegance and ease.
            </p>
            
            <ul class="login-features">
                <li>
                    <i class="bi bi-shield-check"></i>
                    <span>Secure & protected admin access</span>
                </li>
                <li>
                    <i class="bi bi-graph-up"></i>
                    <span>Real-time transaction monitoring</span>
                </li>
                <li>
                    <i class="bi bi-palette"></i>
                    <span>Beautiful girlie-themed interface</span>
                </li>
                <li>
                    <i class="bi bi-phone"></i>
                    <span>Fully responsive on all devices</span>
                </li>
            </ul>
        </div>
      
       
    </div>

</template>
