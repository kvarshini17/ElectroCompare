<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard | ElectroCompare</title>
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body>
    <div class="admin-wrapper">
        <nav class="admin-sidebar">
            <h2>ElectroAdmin</h2>
            <ul>
                <li><a href="dashboard.jsp" class="active">Overview</a></li>
                <li><a href="manage-products.jsp">Products</a></li>
                <li><a href="manage-users.jsp">Users</a></li>
                <li><a href="orders.jsp">Orders</a></li>
            </ul>
        </nav>
        <main class="admin-content">
            <header>
                <h1>Dashboard Overview</h1>
                <div class="admin-user">Welcome, Admin</div>
            </header>
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Total Sales</h3>
                    <p class="value">$24,500</p>
                </div>
                <div class="stat-card">
                    <h3>Total Users</h3>
                    <p class="value">1,250</p>
                </div>
                <div class="stat-card">
                    <h3>Active Orders</h3>
                    <p class="value">45</p>
                </div>
            </div>
            <!-- Statistics Chart Placeholder -->
            <div class="chart-container">
                <canvas id="salesChart"></canvas>
            </div>
        </main>
    </div>
</body>
</html>
