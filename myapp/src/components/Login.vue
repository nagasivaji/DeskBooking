<template>
    <div class="_Log_in">
        <div class="_tittle">
            <h1 class="display-4">Welcome to <i class="bi bi-fire"></i> desk booking</h1>
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
    beforeMount() {
        // if (localStorage.EmployeeID !== undefined || localStorage.EmployeeID !== null || localStorage.EmployeeID !== ''){
        //     window.location.href = this.$url+"/home"
        // }
        var x = this.getCookie('EmployeeID');
        if(x !== undefined && x !== null && x !== ''){
            window.location.href = this.$url+"/home"
        }
    },
    methods: {
        handleSubmit () {
            // console.log(this.id, this.username, this.password)
            // localStorage.setItem('EmployeeID', this.id);
            // window.location.href = this.$url+"/home"

            this.setCookie('EmployeeID', this.id, 2)
            window.location.href = this.$url+"/home"
        },
        setCookie(name,value,days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        },
        getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
    }
}
</script>
<style scoped>

    ._Log_in{
        height: 100vh;
        background-color: #ECF9FF;
        /* background: #B2FEFA;  
        background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);  
        background: linear-gradient(to right, #0ED2F7, #B2FEFA);  */
        font-family: 'Ubuntu', sans-serif;
    }

    ._tittle{
        text-align: center;
        padding-top: 40px;
    }
    ._tittle h1{
        color: rgb(255, 85, 0);
        /* color: #FF6E31; */
        font-weight: 500;
        letter-spacing: 1.5px;
        font-family: 'Ubuntu', sans-serif;
        font-size: 55px;
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

