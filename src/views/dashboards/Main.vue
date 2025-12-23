<script setup>

</script>
<template>
    <div class="col-lg-9">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2><i class="bi bi-receipt me-2"></i>Active Transactions</h2>
                    <div>
                        <button class="btn mark-paid-btn me-2"><i class="bi bi-download me-1"></i> Export</button>
                        <button class="btn view-details-btn"><i class="bi bi-plus-circle me-1"></i> Add New</button>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <div class="stats-card paid-card">
                            <div class="card-icon text-center">
                                <i class="bi bi-check-circle-fill" style="color: #2e8b57;"></i>
                            </div>
                            <h3 class="text-center">Paid</h3>
                            <p class="text-center">Total amount received</p>
                            <div class="amount paid-amount text-center">$12,850.75</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stats-card unpaid-card">
                            <div class="card-icon text-center">
                                <i class="bi bi-exclamation-circle-fill" style="color: var(--dark-pink);"></i>
                            </div>
                            <h3 class="text-center">Unpaid</h3>
                            <p class="text-center">Total amount pending</p>
                            <div class="amount unpaid-amount text-center">$3,420.50</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stats-card total-card">
                            <div class="card-icon text-center">
                                <i class="bi bi-cash-stack" style="color: #6a5acd;"></i>
                            </div>
                            <h3 class="text-center">Total</h3>
                            <p class="text-center">Overall transaction value</p>
                            <div class="amount total-amount text-center">$16,271.25</div>
                        </div>
                    </div>
                </div>
                <!-- Transaction Cards -->
                <div id="transaction-list">
                    <!-- Paid Transaction -->
                    <div class="transaction-card paid-transaction" data-status="paid" data-value="high">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12845</div>
                                <div class="customer-name">Sophia Williams</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 12, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">Premium Subscription</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge paid-badge"><i class="bi bi-check-circle me-1"></i>Paid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$245.99</div>
                            </div>
                            <div class="col-md-2 text-end">
                                <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Unpaid Transaction -->
                    <div class="transaction-card unpaid-transaction" data-status="unpaid" data-value="medium">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12846</div>
                                <div class="customer-name">Emma Johnson</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 11, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">E-commerce Package</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge unpaid-badge"><i class="bi bi-clock me-1"></i>Unpaid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$520.50</div>
                            </div>
                            <div class="col-md-2 text-end">
                                <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                                
                            </div>
                        </div>
                    </div>

                    <!-- Paid Transaction -->
                    <div class="transaction-card paid-transaction" data-status="paid" data-value="low">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12847</div>
                                <div class="customer-name">Olivia Brown</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 10, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">Basic Plan</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge paid-badge"><i class="bi bi-check-circle me-1"></i>Paid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$89.99</div>
                            </div>
                            <div class="col-md-2 text-end">
                                <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Unpaid Transaction -->
                    <div class="transaction-card unpaid-transaction" data-status="unpaid" data-value="high">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12848</div>
                                <div class="customer-name">Ava Martinez</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 9, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">Custom Website</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge unpaid-badge"><i class="bi bi-clock me-1"></i>Unpaid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$1,250.00</div>
                            </div>
                            <div class="col-md-2 text-end">
                               <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Paid Transaction -->
                    <div class="transaction-card paid-transaction" data-status="paid" data-value="medium">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12849</div>
                                <div class="customer-name">Isabella Garcia</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 8, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">Marketing Package</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge paid-badge"><i class="bi bi-check-circle me-1"></i>Paid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$349.99</div>
                            </div>
                            <div class="col-md-2 text-end">
                                <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Unpaid Transaction -->
                    <div class="transaction-card unpaid-transaction" data-status="unpaid" data-value="low">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="transaction-id">TXN-#12850</div>
                                <div class="customer-name">Mia Davis</div>
                                <div class="transaction-date"><i class="bi bi-calendar me-1"></i>May 7, 2023</div>
                            </div>
                            <div class="col-md-3">
                                <div>Product/Service</div>
                                <div class="fw-medium">Consultation</div>
                            </div>
                            <div class="col-md-2">
                                <span class="amount-badge unpaid-badge"><i class="bi bi-clock me-1"></i>Unpaid</span>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="fw-bold fs-5">$75.00</div>
                            </div>
                            <div class="col-md-2 text-end">
                                 <button class="btn view-details-btn me-2" title="View Details">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn mark-paid-btn disabled" title="Already Paid">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Pagination -->
                
            </div>
</template>
