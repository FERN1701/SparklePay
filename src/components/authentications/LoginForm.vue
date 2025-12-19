<script setup>

</script>
<template>
    <form id="loginForm">
                    <div class="form-group">
                        <label class="form-label" for="email">
                            <i class="bi bi-envelope"></i> Email Address
                        </label>
                        <div class="input-with-icon">
                            <input type="email" class="form-control" id="email" placeholder="admin@sparklepay.com" required>
                            <div class="input-icon">
                                <i class="bi bi-envelope"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="password">
                            <i class="bi bi-lock"></i> Password
                        </label>
                        <div class="input-with-icon">
                            <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                            <div class="input-icon password-toggle" id="passwordToggle">
                                <i class="bi bi-eye"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="remember-forgot">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">
                                Remember me
                            </label>
                        </div>
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </div>
                    
                    <button type="submit" class="login-btn">
                        <i class="bi bi-box-arrow-in-right"></i> Sign In
                    </button>
                    
                    <div class="divider">
                        <span>Or sign in with</span>
                    </div>
                    
                    <div class="social-login">
                        <button type="button" class="social-btn">
                            <i class="bi bi-google"></i>
                        </button>
                        <button type="button" class="social-btn">
                            <i class="bi bi-github"></i>
                        </button>
                        <button type="button" class="social-btn">
                            <i class="bi bi-microsoft"></i>
                        </button>
                    </div>
                    
                    <div class="signup-link">
                        Don't have an admin account? <a href="#">Request access</a>
                    </div>
        </form>
</template>