<template>
    <div class="_Log_in">
        <div class="_tittle">
            <h1 class="display-4">welcome to hot desk booking</h1>
        </div>
        <div class="_Login">
        <div class="_loginLogo">
            <img src="../assets/Images/loginImg.svg" alt="">
        </div>
        <div class="_form">
            <div><h1 class="display-6">Please Login here...</h1></div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Employee ID</span>
                <input type="number" class="form-control" placeholder="Enter Employee Id" aria-label="" aria-describedby="basic-addon1" v-model="id">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">User Name</span>
                <input type="text" class="form-control" placeholder="Enter username" aria-label="" aria-describedby="basic-addon1" v-model="username">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="password" class="form-control" placeholder="Enter password" aria-label="" aria-describedby="basic-addon1" v-model="password">
            </div>
            <div>
                <submit type="submit" class="btn btn-primary" @click="handleSubmit">Log In <i class="bi bi-box-arrow-in-right"></i></submit>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            username: '',
            password: ''
        }
    },
    beforeCreate() {
        if (localStorage.EmployeeID !== undefined || localStorage.EmployeeID !== null || localStorage.EmployeeID !== ''){
            window.location.href = "http://localhost:3030/#/home"
        }
    },
    methods: {
        handleSubmit () {
            // console.log(this.id, this.username, this.password)
            localStorage.setItem('EmployeeID', this.id);
            window.location.href = "http://localhost:3030/#/home"
        }
    }
}
</script>
<style scoped>

    ._Log_in{
        height: 100vh;
        background: #B2FEFA;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0ED2F7, #B2FEFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    ._tittle{
        text-align: center;
        padding-top: 40px;
    }
    ._tittle h1{
        color: rgb(255, 115, 0);
        font-weight: 500;
        text-shadow: 3px 5px 5px rgba(255, 255, 255, 0.527);
        letter-spacing: 1.5px;
    }
    ._Login{
        display: flex;
    }
    ._Login ._loginLogo{
        width: 55%;
        display: flex;
    }
    ._Login ._form{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5%;
    }
    ._Login ._loginLogo img{
        width: 90%;
        padding: 10%;
    }
</style>

