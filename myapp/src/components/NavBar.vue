<template>
    <nav class="navbar navbar-expand-xxl bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><i class="bi bi-columns-gap"></i> Smart desk booking</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page"><i class="bi bi-person-workspace"></i> My Desk</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page"><i class="bi bi-card-checklist"></i> My Bookings</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/more" class="nav-link active" aria-current="page"><i class="bi bi-three-dots"></i> More</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page"> <i class="bi bi-compass"></i> Directions</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page"><i class="bi bi-gear-fill"></i> Account settings</router-link>
                </li>
                <li class="nav-item">
                    <button class="btn btn-primary" @click="logOut"><i class="bi bi-box-arrow-right"></i> Log Out</button>
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
                // window.location.href = this.$url+"/"
                this.eraseCookie('EmployeeID')
                window.location.replace(this.$url+"/");
            },
            eraseCookie(name) {   
                document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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