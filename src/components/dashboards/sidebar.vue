<script setup >
</script>
<template>
    <div class="col-lg-3 mb-4">
                <div class="sidebar">
                    <h3 class="sidebar-title"><i class="bi bi-menu-button-wide me-2"></i>Menu</h3>
                    <ul class="sidebar-menu">
                        <li><a href="#" class="active"><i class="bi bi-list-check"></i> All Transactions</a></li>
                        <li><a href="#"><i class="bi bi-currency-dollar"></i> Paid</a></li>
                        <li><a href="#"><i class="bi bi-clock-history"></i> Pending</a></li>
                        <li><a href="#"><i class="bi bi-person-plus"></i> Add Customer</a></li>
                        <li><a href="#"><i class="bi bi-bar-chart"></i> Reports</a></li>
                        <li><a href="#"><i class="bi bi-bell"></i> Notifications</a></li>
                        <li><a href="#"><i class="bi bi-question-circle"></i> Help & Support</a></li>
                    </ul>
                </div>
                
                <!-- Filter Section -->
                <div class="sidebar mt-4">
                    <h3 class="sidebar-title"><i class="bi bi-funnel me-2"></i>Filter By</h3>
                    <div class="filter-buttons">
                        <button class="btn active" data-filter="all">All</button>
                        <button class="btn" data-filter="paid">Paid</button>
                        <button class="btn" data-filter="unpaid">Unpaid</button>
                        <button class="btn" data-filter="recent">Recent</button>
                        <button class="btn" data-filter="high-value">High Value</button>
                    </div>
                </div>
            </div>
</template>
