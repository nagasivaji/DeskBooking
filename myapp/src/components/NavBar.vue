<template>
    <nav class="navbar navbar-expand-xxl bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Smart desk booking</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page">My Desk</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page">My Bookings</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/more" class="nav-link active" aria-current="page">More</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page">Directions</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page">Account settings</router-link>
                </li>
                <li class="nav-item">
                    <button class="btn btn-primary" @click="logOut">Log Out</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
    export default{
        methods: {
            logOut() {
                localStorage.EmployeeID = ''
                window.location.href = this.$url+"/"
            }
        },
    }
</script>

<style scoped>
    .navbar-brand{
        color: white;
    }
    .navbar-toggler{
        color: white;
    }
    .navbar-nav .nav-link.active{
        color: white;
    }
</style>