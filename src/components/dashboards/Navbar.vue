<script setup>

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
                        <RouterLink class="nav-link active" to="/dashboard"><i class="bi bi-speedometer2 me-1"></i> Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/dashboard/histories"><i class="bi bi-arrow-counterclockwise me-1"></i> History</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-gear me-1"></i> Settings</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/"><i class="bi bi-door-closed"></i> Logout</RouterLink>
                    </li>
                    <li class="nav-item ms-2">
                        <div class="d-flex align-items-center">
                            <div class="user-avatar me-2">AD</div>
                            <span class="fw-medium">Admin</span>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</template>